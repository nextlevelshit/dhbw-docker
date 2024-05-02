# DHBW Docker App

This is a comprehensive guide to get you started with the DHBW Docker App, a containerized service orchestration for a TypeScript-based API. The application is composed of multiple services including an API service and a database service, all managed using Docker and orchestrated with Docker Compose.

## Prerequisites

Before you start, make sure you have the following installed:

- Docker
- Docker Compose
- Make (optional, for using the Makefile)

## Getting Started

1. Clone the repository to your local machine.

2. Navigate to the root directory of the project.

3. Copy the `.env.example` file to a new file named `.env` in the same directory.
   
   ```bash
   make .env
    ```
   
   Adjust the environment variables in the `.env` file according to your setup. The following environment variables are required:

    - `DATABASE_USERNAME`: The username for the database.
    - `DATABASE_PASSWORD`: The password for the database.
    - `DATABASE_NAME`: The name of the database.

4. Build and start the services using Docker Compose. You can use the provided Makefile for this. Run the following command in your terminal:

    ```bash
    make dev
    ```

   This command will start the containers for development. It builds the Docker images if they don't exist, removes orphan containers, and recreates the containers.

   If you want to start the containers in detached mode (in the background), use the following command:

    ```bash
    make dev:up
    ```

   To stop and remove the containers, use the following command:

    ```bash
    make dev:down
    ```

5. Once the services are up and running, you can access the API at `http://localhost:10000`.

## Additional Commands

The Makefile provides additional commands for database migrations and queries:

- `make migration:create`: Create a new TypeORM migration.
- `make migration:generate`: Generate a TypeORM migration from changes in the entities.
- `make migration:revert`: Revert the last TypeORM migration.
- `make migration:run`: Run pending TypeORM migrations.
- `make migration:list`: Show a list of applied TypeORM migrations.
- `make query`: Execute a TypeORM query.

## API Development

For API development, navigate to the `api` directory. The API is built with TypeScript and uses npm for package management. The following commands are available:

- `npm test`: Run tests.
- `npm run lint`: Check for linting errors.
- `npm run lint:fix`: Fix linting errors.
- `npm run build`: Build the project.

For more details, refer to the [README.md](/api/README.md) file in the `api` directory.

## Contributing

Contributions are welcome. Please make sure to follow the existing code style and run tests before submitting a pull request.

## License

This project is licensed under the WTFPL License.