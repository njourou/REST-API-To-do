# Todo List REST API

A simple and powerful API built with Node.js, Express, and MongoDB to manage todo items. You can add, view, update, and delete tasks, with built-in checks to ensure data is valid and clear error messages when something goes wrong. It also uses the right HTTP status codes to make everything run smoothly.

## Features

- Create, read, update, and delete todos
- Input validation
- Error handling
- MongoDB integration
- RESTful architecture

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Other tools: cors, helmet, morgan

## Getting Started

### Prerequisites

- Node.js 
- MongoDB 
- Postman (for testing)

### Installation

1. Clone the repo
```bash
git clone https://github.com/njourou/REST-API-To-do
cd todo-rest-api
```

2. Install dependencies
```bash
npm install
```

3. Create .env file in root and add:
```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todo-api
```

4. Start the server
```bash
# Development
npm run dev

# Production
npm start
```

## API Endpoints & Payloads

### Create Todo
```http
POST /api/todos
Content-Type: application/json

{
    "title": "Complete Project",
    "description": "REST API project",
    "dueDate": "2024-01-25T00:00:00.000Z",
    "completed": false
}

Response: 201 Created
{
    "status": "success",
    "data": {
        "todo": {
            "title": "Complete Project",
            "description": "REST API project",
            "completed": false,
            "dueDate": "2024-01-25T00:00:00.000Z",
            "_id": "...",
            "createdAt": "2024-01-20T...",
            "updatedAt": "2024-01-20T..."
        }
    }
}
```

### Get All Todos
```http
GET /api/todos

Response: 200 OK
{
    "status": "success",
    "results": 1,
    "data": {
        "todos": [
            {
                "_id": "...",
                "title": "Complete Project",
                "description": "REST API project",
                "completed": false,
                "dueDate": "2024-01-25T00:00:00.000Z",
                "createdAt": "2024-01-20T...",
                "updatedAt": "2024-01-20T..."
            }
        ]
    }
}
```

### Get Single Todo
```http
GET /api/todos/:id

Response: 200 OK
{
    "status": "success",
    "data": {
        "todo": {
            "_id": "...",
            "title": "Complete Project",
            "description": "REST API project",
            "completed": false,
            "dueDate": "2024-01-25T00:00:00.000Z",
            "createdAt": "2024-01-20T...",
            "updatedAt": "2024-01-20T..."
        }
    }
}
```

### Update Todo
```http
PATCH /api/todos/:id
Content-Type: application/json

{
    "completed": true
}

Response: 200 OK
{
    "status": "success",
    "data": {
        "todo": {
            "_id": "...",
            "title": "Complete Project",
            "description": "REST API project",
            "completed": true,
            "dueDate": "2024-01-25T00:00:00.000Z",
            "createdAt": "2024-01-20T...",
            "updatedAt": "2024-01-20T..."
        }
    }
}
```

### Delete Todo
```http
DELETE /api/todos/:id

Response: 204 No Content
```

## Validation Rules

- Title: Required, max 100 characters
- Description: Optional, max 500 characters
- Completed: Optional boolean
- DueDate: Optional valid date

## Error Handling

The API handles various errors

- Invalid input data: 400 Bad Request
- Resource not found: 404 Not Found
- Server errors: 500 Internal Server Error

Example error response:
```json
{
    "status": "fail",
    "message": "Todo not found"
}
```

## Project Structure
```
todo-rest-api/
├── src/
│   ├── config/       
│   ├── controllers/   
│   ├── models/        
│   ├── routes/        
│   ├── middleware/    
│   └── utils/        
├── index.js          
├── .env
└── package.json
```

## Development

- Use `npm run dev` for development with nodemon
