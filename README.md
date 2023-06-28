# TodoList App

## Table of Contents
- [Frontend Stack](#frontend-stack)
- [Backend Stack](#backend-stack)
- [Configs](#configs)
- [Frontend Project Folder Structure](#frontend-project-folder-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)

## Frontend Stack
- React
- Tailwind CSS
- JavaScript with TypeScript

## Backend Stack
- [Golang](https://golang.org/)
- [Gin](https://github.com/gin-gonic/gin)
- [GORM](https://gorm.io/)


## Configs
- Eslint for JavaScript linting
- Prettier for code formatting
- Stylelint for CSS linting
- Commit lint for enforcing commit message conventions
- `lint-staged` config for running linting and formatting tasks on staged files
- Pre-Commit and Commit-Message config using Husky for running tasks before committing code

## Frontend Project Folder Structure
The TodoList App follows the feature-sliced folder structure design pattern, which is a modular and scalable approach to organizing code in React applications. This pattern encourages a clear separation of concerns and promotes reusability and maintainability.

To learn more about the feature-sliced design pattern, you can visit the [official website](https://feature-sliced.design/) for detailed documentation and examples.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your system:
- Node.js (version > 18.12)
- Yarn (recommended) or npm (JavaScript package manager)
- Golang
- PostgreSQL 
### Installation

1. Clone the repository
2. Install the project dependencies by running the following command:

```shell
   npm install 
```

3. start the project by running:

```shell
    npm start
```

4. Access the project in your browser at http://localhost:3000.


### Contributing
If you would like to contribute to the TodoList App, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
Please ensure that your code adheres to the project's coding conventions and is properly documented.