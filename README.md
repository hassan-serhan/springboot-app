# springboot-app

# Spring Boot and Next.js Dockerized Application

This repository demonstrates a simple setup for a Spring Boot backend and a Next.js frontend, both containerized using Docker.

---

## Steps to Run the Application

### Clone the Repository
```bash
git clone https://github.com/hassan-serhan/springboot-app.git
cd springboot-app
```

---

### Setting Up the Next.js Frontend

1. Navigate to the `nextjs-app` directory:
    ```bash
    cd nextjs-app
    ```

2. Create an `.env` file and add the following content:
    ```
    NEXT_PUBLIC_API_BASE_URL=http://localhost:8080/api
    ```

3. Build the Docker image for the frontend:
    ```bash
    docker build -t next-testing-app .
    ```

4. Run the Docker container for the frontend:
    ```bash
    docker run -dp 3000:3000 next-testing-app
    ```

The Next.js application will be available at [http://localhost:3000](http://localhost:3000).

---

### Setting Up the Spring Boot Backend

1. Build the Spring Boot project:
    ```bash
    mvn clean package
    ```

2. Build the Docker image for the backend:
    ```bash
    docker build -t spring-testing-app .
    ```

3. Pull the MongoDB image and run the container:
    ```bash
    docker pull mongo:latest
    docker run -d -p 27017:27017 --name mongo-cont mongo:latest
    ```

4. Run the Spring Boot container and link it to the MongoDB container:
    ```bash
    docker run -p 8080:8080 --name spring-testing-cont --link mongo-cont:mongo -d spring-testing-app:latest
    ```

The Spring Boot API will be available at [http://localhost:8080/api](http://localhost:8080/api).

---

## Testing

- **Frontend:** Open [http://localhost:3000](http://localhost:3000) in your browser.
- **Backend:** Test API endpoints via [Postman](https://www.postman.com/) or [http://localhost:8080/api](http://localhost:8080/api).

---

