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
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
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

## Installation

To install and run the TodoList App, please follow these steps:

### Backend Setup

1. Clone the repository.
2. To run the backend server, navigate to the server directory:

```shell
cd todolist/server
```

3. Initialize the Go module and install the required dependencies:

```shell
go mod init server
go get -u github.com/gin-gonic/gin
go get -u gorm.io/gorm
```

4. Configure the database connection string in the `config/database.go` file:

```shell
dsn := "host=localhost user={your_username} password={your_password} dbname={your_dbname} port=5432 sslmode=disable"
```
Replace `{your_username}`, `{your_password}`, and `{your_dbname}` with your actual PostgreSQL database credentials and database name.

5. Start the backend application by running the following command:

```shell
cd cmd/todoapp
go run .
```

The backend API can now be accessed at `http://localhost:8080`.

### Frontend Setup

1. Navigate to the root directory of the cloned repository.
2. Install the frontend project dependencies:

```shell
npm install
```

3. Create a file named `setupProxy.js` in the root directory of the frontend project if it doesn't already exist.
4. Add the following code to the `setupProxy.js` file:

```javascript
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // Replace with the URL of your backend server
      changeOrigin: true,
    })
  );
};
```

5. Replace `'http://localhost:8080'` in the `target` option with the URL of your backend server. Make sure the backend server is running and accessible at that URL.

### Running the Application

1. Start the backend server by following the steps mentioned in the [Backend Setup](#backend-setup) section.
2. Start the frontend development server by running the following command in the frontend project's root directory:

```shell
npm start
```

3. Access the project in your browser at `http://localhost:3000`.
4. During development, when the frontend server receives requests to the `/api` path, they will be automatically redirected to the backend server specified in the `setupProxy.js` file.

Please note that for the proxy to work correctly, both the frontend and backend servers need to be running simultaneously. Additionally, ensure that the proxy configuration in the `setupProxy.js` file matches the actual backend server URL and port.
7. Access the project in your browser at http://localhost:3000.


### Contributing
If you would like to contribute to the TodoList App, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make the necessary changes and commit them.
- Push your changes to your forked repository.
- Submit a pull request to the main repository.
Please ensure that your code adheres to the project's coding conventions and is properly documented.
