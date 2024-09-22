# Ticket Management System

## Description

This project is a simple **Ticket Management System** built using **Node.js** and **MongoDB**. The API allows users to create, read, update, and delete tickets. Each ticket has fields such as `ticketId`, `title`, `description`, `status`, and timestamps (`createdAt` and `updatedAt`).

## Features

- Create a new ticket
- Retrieve a list of all tickets
- Retrieve a single ticket by its unique identifier
- Update an existing ticket by its unique identifier
- Delete a ticket by its unique identifier

## Tech Stack

- **Node.js** (Backend)
- **Express.js** (RESTful API)
- **MongoDB** (Database)

## Folder Structure

```bash
node_modules
src
 └── config
      └── db.js         # Database connection configuration
 └── ticket
      ├── handlers.js   # API handlers for ticket CRUD operations
      ├── model.js      # Mongoose ticket schema and model
      └── routes.js     # Express routes for ticket management API
 └── utils
      └── generate-unique-id.js  # Utility to generate unique ticket IDs
 └── index.js          # Main entry point to initialize the server

.env                  # Environment variables file
.gitignore            # Git ignore file
package.json          # Project configuration and dependencies
package-lock.json     # Dependency tree
README.md             # Project documentation
```

## Installation

### 1. Clone the repository:

   ```
   git clone <repository-url>
   cd ticket-management-system
   ```

### 2. Install dependencies:

   ```bash
   npm install
   ```

### 3. Set up environment variables: Create a `.env` file in the root directory or if it is already exist add the following values:

   ```
   DB_CONNECTION_STRING=<your-mongodb-connection-string>
   PORT=3000
   ```

### 4. Start the server:

   - For production:

     ```bash
     npm start
     ```

   - For development with live-reloading:
     ```bash
     npm run dev
     ```

# API Endpoints

1. Create a New Ticket

    - Endpoint: `POST /api/ticket/create`
    - Request Body:
      ```
      {
        "title": "Open mic",
        "description": "Show your talent",
        "status": "available"
      }
      ```
    - Response:
      ```
      {
        "message": "Ticket has been created",
        "ticket": {
            "ticketId": "5vERIv5Mijy1jdj35nN8E",
            "title": "Open mic",
            "description": "Show your talent",
            "status": "available",
            "_id": "66efe1b16b660c57a33a3507",
            "createdAt": "2024-09-22T09:21:53.545Z",
            "updatedAt": "2024-09-22T09:21:53.545Z",
        }
      }
      ```

2.  Get All Tickets

    - Endpoint: `GET /api/ticket/get`

    - Response:
      ```
      {
        "message": "All tickets",
        "tickets": [
            {
                "_id": "66eea695e225eb3d8b6e8934",
                "ticketId": "EOOzOCtvs7jjmwbZ5Wr5a",
                "title": "Football event",
                "description": "Lets play Football",
                "status": "available",
                "createdAt": "2024-09-21T10:57:25.861Z",
                "updatedAt": "2024-09-21T15:48:19.227Z",
            },
         ]
      }
      ```

3.  Get Ticket by ID (Unique identifier) 
    - Endpoint: `GET /api/ticket/get/:id` 
    - Example: Replace `:id` with the ticket’s unique identifier

          `GET /api/tickets/get/66eea695e225eb3d8b6e8934`

    - Response:
        ```
        {
            "message": "Your Ticket",
            "ticket": {
                "_id": "66eea695e225eb3d8b6e8934",
                "ticketId": "EOOzOCtvs7jjmwbZ5Wr5a",
                "title": "Football event",
                "description": "Lets play Football",
                "status": "available",
                "createdAt": "2024-09-21T10:57:25.861Z",
                "updatedAt": "2024-09-21T15:48:19.227Z",
            }
        }
        ```

4.  Update a Ticket by ID (Unique identifier)

    - Endpoint: `PUT /api/ticket/update/:id`
    - Example: Replace `:id` with the ticket’s unique identifier

      `PUT /api/ticket/update/66eea695e225eb3d8b6e8934`

    - Request Body:

        ```
        {
            "title": "Comedy circus",
            "description": "Lets laugh together",
            "status": "sold"
        }
        ```

    - Response:

        ```
        {
            "message": "Ticket has been updated",
            "ticket": {
                "_id": "66eea695e225eb3d8b6e8934",
                "ticketId": "EOOzOCtvs7jjmwbZ5Wr5a",
                "title": "Comedy circus",
                "description": "Lets laugh together",
                "status": "sold",
                "createdAt": "2024-09-21T10:57:25.861Z",
                "updatedAt": "2024-09-22T12:57:38.894Z",
            }
        }
        ```

5. Delete a Ticket by ID (Unique identifier)
   - Endpoint: `DELETE /api/tickets/delete/:id`
   - Example: Replace `:id `with the ticket’s unique identifier
   
     `DELETE /api/tickets/delete/66eea695e225eb3d8b6e8934`

   - Response:
        ``` 
        {
            "message": "Ticket has been deleted",
            "ticket": {
                "_id": "66eea695e225eb3d8b6e8934",
                "ticketId": "EOOzOCtvs7jjmwbZ5Wr5a",
                "title": "Comedy circus",
                "description": "Lets laugh together",
                "status": "sold",
                "createdAt": "2024-09-21T10:57:25.861Z",
                "updatedAt": "2024-09-22T12:57:38.894Z",
            }
        }
        ```