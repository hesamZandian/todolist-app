# TodoList App
The TodoList App is a simple CRUD application that allows you to manage your tasks effectively. With this app, you can create new todos, view existing ones, update their status, and delete them when they are no longer needed.


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
- Golang
- Gin
- GORM


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
2. To run the backend server, please follow these steps:

```shell
cd todolist/server
go mod init server
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm
```

3. Configure the database connection string in the dsn variable found in the `config/database.go` file:

```shell
dsn := "host=localhost user={your_username} password={your_password} dbname={your_dbname} port=5432 sslmode=disable"
```
Replace `{your_username}`, `{your_password}`, and `{your_dbname}` with your actual PostgreSQL database credentials and database name.


4. Start the backend application by running following command:
```sh
cd cmd/todoapp
go run .
```
  the API can now be accessed at http://localhost:8080.  

5. Install the frontend project dependencies by running the following command:
```shell
   npm install 
```

6. start the project by running:

```shell
    npm start
```

7. Access the project in your browser at http://localhost:3000.


### Contributing
If you would like to contribute to the TodoList App, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
Please ensure that your code adheres to the project's coding conventions and is properly documented.
