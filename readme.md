# Component Generator

The Component Generator is a powerful tool designed to accelerate your development workflow by automating the creation of components for your projects. As part of the innovative toolkit showcased in the [code generator recipe](https://kevincoyle.co.uk/blog/code-generator-recipe), it leverages the full potential of Node.js and TypeScript to streamline your coding process.

## Prerequisites

Before setting up the Component Generator, make sure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:
   ```
   git clone git@github.com:kevin-coyle/ai-recipe-component-generator.git
   ```
2. Navigate to the project directory:

   ```
   cd ai-recipe-component-generator

   ```

3. Install the required npm packages:
   ```
   npm install
   ```

## Configuration

To run the Component Generator, you need to configure an environment variable that holds your OpenAI API key.

1. Create a `.env` file in the root directory of the project.
2. Add the following entry to the file:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   Replace `your_openai_api_key_here` with your actual OpenAI API key.

Please keep your API key secret to prevent unauthorized usage.

## Running the Application

Once you have set up your `.env` file with the OpenAI API key, you can start the Component Generator with the following command:

```
npm start
```

This will launch the application using `ts-node`, which allows you to run TypeScript files directly without pre-compilation.

## Contribution

Contributions are welcome! Feel free to fork the repository, make your changes, and create a pull request to merge them into the main branch.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
