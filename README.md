# Flight Auth Service

## Overview

The Flight Auth Service is a microservice in the Airline Management system responsible for user registration and role-based authentication. It supports roles such as 'user' and 'admin.' Admins have special privileges, including create, update, and delete functionalities. The service utilizes PostgreSQL as the database, Sequelize as the ORM, bcrypt for password encryption, and jsonwebtoken for generating JWT tokens. The authentication mechanism is based on local storage, and only registered users have access to communicate with other microservices.

## Features

- **User Registration**: Allows users to register for access to the Airline Management system.
- **Role-Based Authentication**: Implements role-based authentication with 'user' and 'admin' roles.
- **Admin Privileges**: Admins have access to create, update, and delete functionalities.
- **Password Encryption with bcrypt**: Secures user passwords by encrypting them before storage in the database.
- **JWT Token Generation with jsonwebtoken**: Generates JWT tokens for authenticated users.
- **Local Storage Authentication**: Only registered users with valid JWT tokens have access to communicate with other microservices.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web application framework for Node.js.
- **PostgreSQL**: Relational database for data storage.
- **Sequelize**: Promise-based ORM for Node.js and PostgreSQL.
- **Sequelize CLI**: Command-line interface for Sequelize.
- **bcrypt**: Library for password hashing and encryption.
- **jsonwebtoken**: Library for generating JSON Web Tokens (JWT).

## How to Use

1. **Clone the repository:**
    ```bash
    git clone https://github.com/vishnu-mouli-102408/Flight-Auth-Service
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Configure environment variables:**
    - Create a `.env` file in the project root.
    - Set the following variables in the `.env` file:
        ```env
        PORT=your_preferred_port
        SYNC_DB=true
        ```
4. **Run Sequelize Init**
   ```bash
   npx sequelize init
   ```
5. **Inside the config/config.json file make sure to add your local DB username and Password and appropriate DB name.**
   
6. **Run Sequelize Create**
   ```bash
   npx sequelize db:create
   ``` 

7. **Run Sequelize Migrations:**
    ```bash
    npx sequelize db:migrate
    ```

8. **Run the Flight Search Service:**
    ```bash
    npm start
    ```

9. **Access the Flight Auth Service:**
    - The service will be running on the specified port (default is 3003).

10. **Explore the Flight Auth Service!**

## Configuration

Ensure to set the appropriate environment variables in your `.env` file for configuring the Flight Auth Service:

- `PORT`: Port on which the service will run.
- `SYNC_DB`:  While starting the server ensure to make it true and after that either comment it out or make it false. Since DB Sync has to be done once.
  
## License

This project is licensed under the [MIT License](LICENSE).
