# Next.js Dockerized Application

This file demonstrates a simple setup for a Next.js frontend containerized using Docker.

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

## Testing

- **Frontend:** Open [http://localhost:3000](http://localhost:3000) in your browser.

---
