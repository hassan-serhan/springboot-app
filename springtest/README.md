# Spring Boot Application

This file demonstrates a simple setup for a Spring Boot backend containerized using Docker.

---

## Steps to Run the Application

### Clone the Repository
```bash
git clone https://github.com/hassan-serhan/springboot-app.git
cd springboot-app
```
---

### Setting Up the Spring Boot Backend

1. Build the Spring Boot project:
    ```bash
    gradlew build
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

- **Backend:** Test API endpoints via [Postman](https://www.postman.com/) or [http://localhost:8080/api](http://localhost:8080/api).

---
