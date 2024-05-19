
# Portfolio Web


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [GraphQL Configuration](#graphql-configuration)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

**Portfolio Web** is a website that connects to a headless CMS using GraphQL to store and display projects. Users can view and filter projects easily. This project is built with React and Vite for a fast and efficient development experience.


## Features

- Fetches project data from a headless CMS using GraphQL
- Displays project details with filtering options
- Built with modern technologies: React, Vite, TailwindCSS

## Installation

### Prerequisites

- Node.js and npm installed
- Access to a headless CMS with GraphQL support

### Steps

1. Clone the repository:
 
   ```sh
   git clone https://github.com/ddcsoftdev/portfolio-web.git
   ```

3. Navigate to the project directory:

   sh
   ```
   cd portfolio-web
   ```

5. Install the dependencies:

   sh
   ```
   npm install
   ```

## Usage

### GraphQL Configuration

1. Create a \`.env\` file in the root directory.
2. Add your GraphQL endpoint URL and API key to the \`.env\` file:

   env
   ```
   VITE_GRAPHQL_ENDPOINT=https://your-graphql-endpoint.com/graphql
   VITE_API_KEY=your_api_key
   ```

### Running the Project

1. Start the development server:

   sh
   ```
   npm run dev
   ```

3. Open your browser and navigate to \`http://localhost:3000\` to see the website in action.

![Running the Project Illustration](https://via.placeholder.com/800x300)

## Project Structure

- \`src/\`: Contains the main source code for the project
  - \`components/\`: Reusable React components
  - \`pages/\`: Page components for different routes
  - \`styles/\`: Styling files (e.g., TailwindCSS)
  - \`utils/\`: Utility functions and helpers
- \`public/\`: Public assets and HTML template
- \`.env\`: Environment variables for configuration

## Contributing

We welcome contributions to the Portfolio Web project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature\`).
3. Make your changes.
4. Commit your changes (\`git commit -m 'Add some feature'\`).
5. Push to the branch (\`git push origin feature/your-feature\`).
6. Open a pull request.

![Contributing Illustration](https://via.placeholder.com/800x300)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
