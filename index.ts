import { OpenAI } from "openai";
import dotenv from "dotenv";
import fs from "fs";
import Twig from "twig";

interface Component {
  name: string;
  code: string;
  styles: string;
}
// Configure dotenv to get our API key from the .env file which we'll create in a moment
dotenv.config();
const openai = new OpenAI();

const specification = fs.readFileSync("./specs/button.yaml", "utf8");
const platformSpecification = fs.readFileSync("./specs/platform.yaml", "utf8");
const promptTemplate = fs.readFileSync("./prompt.twig", "utf8");

const twig = Twig.twig;
const template = twig({ data: promptTemplate });
const systemPrompt = template.render({
  platform: "React",
  platformSpec: platformSpecification,
  tokens: "brand-primary, brand-red, brand-green, brand-yellow",
});
async function generateComponent(): Promise<Component> {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: specification,
      },
    ],
    model: "gpt-4-0125-preview",
    response_format: {
      type: "json_object",
    },
  });
  const component = JSON.parse(response.choices[0].message.content || "");
  return component;
}

function writeComponentToFile(component: Component) {
  // Create the components directory if it doesn't exist
  if (!fs.existsSync("./components")) {
    fs.mkdirSync("./components");
  }
  fs.writeFileSync(`./components/${component.name}.tsx`, component.code);
  fs.writeFileSync(`./components/${component.name}.scss`, component.styles);
  console.log(`Component ${component.name} has been written to file`);
}

async function main() {
  const component = await generateComponent();
  writeComponentToFile(component);
}
main();
