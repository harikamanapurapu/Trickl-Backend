# Trickl-Backend

## Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) installed and running (or use a cloud-based MongoDB service like MongoDB Atlas).
- [Git](https://git-scm.com/) installed on your machine (for GitHub setup).

## Getting Started

To get a local copy of the project and run the API server, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/harikamanapurapu/Trickl-Backend.git
2.Change to the project's directory:cd your-repo-nam and install project dependencies: npm install

3.Create a .env file in the project root directory and set the following environment variables:
PORT=4000  # Port on which the API server will run
MONGODB_URL=  # Your MongoDB connection URL

4.Start the API server: node index.js

Your API server should now be running at http://localhost:4000

You can test the API endpoints using a tool like Postman or by making HTTP requests from your frontend application.

1. [Download Postman Collection](./Trickle.postman-collection.json)
2. Import the collection into Postman.
3. Configure the environment variables or set them directly in Postman.
4. Use the collection to send requests to your API for testing.

Remember to update the environment variables in the collection with the appropriate values according to your environment.


