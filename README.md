# To-Do List API

Welcome to the To-Do List API! This is a simple RESTful API built with **Express.js** that allows you to manage your tasks effectively. You can create, read, update, and delete tasks with ease.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **Create Tasks**: Add new tasks with customizable titles.
- **Read Tasks**: Retrieve a list of all tasks.
- **Update Tasks**: Modify existing tasks by changing their title or marking them as completed.
- **Delete Tasks**: Remove tasks from your list.

## Getting Started

To get started with this API, follow these steps:

### Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-api.git

2. Navigate into the project directory:

```bash
cd todo-list-api
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. Open your browser and navigate to http://localhost:3000 to access the API.

### API Endpoints
1. Get All Tasks
Endpoint: GET /
Response: Returns a JSON array of all tasks.
2. Add a New Task
Endpoint: POST /
Request Body:
```json
{
    "title": "Your task title"
}
```

Response: Returns the created task with a unique ID.

3. Update a Task
Endpoint: PUT /:id
Request Body:
```json
{
    "title": "Updated task title",
    "status": {
        "completed": true
    }
}
```

Response: Returns the updated task.

4. Delete a Task
Endpoint: DELETE /:id
Response: Returns a message confirming the deletion of the task.


### Technologies Used
Node.js: JavaScript runtime for building scalable network applications.
Express.js: Web framework for Node.js to build APIs.


