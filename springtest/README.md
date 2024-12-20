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

1. Navigate to the `springtest` directory:
    ```bash
    cd springtest
    ```

2. Build the Spring Boot project:
    ```bash
    gradlew build
    ```

3. Build the Docker image for the backend:
    ```bash
    docker build -t spring-testing-app .
    ```

4. Pull the MongoDB image and run the container:
    ```bash
    docker pull mongo:latest
    docker run -d -p 27017:27017 --name mongo-cont mongo:latest
    ```

5. Run the Spring Boot container and link it to the MongoDB container:
    ```bash
    docker run -p 8080:8080 --name spring-testing-cont --link mongo-cont:mongo -d spring-testing-app:latest
    ```

The Spring Boot API will be available at [http://localhost:8080/api](http://localhost:8080/api).

---

# Testing

- **Backend:** Test API endpoints via [Postman](https://www.postman.com/) or [http://localhost:8080/api](http://localhost:8080/api).

---

# Get All Items

## Method: GET  
**URL**: `http://localhost:8080/api/items`  
  
### Description:  
Fetches all items from the database.  
  
### Example Response:  
```json
[
  {
    "id": 1,
    "name": "Sample Item 1",
    "description": "Item Description 1"
  },
  {
    "id": 2,
    "name": "Sample Item 2",
    "description": "Item Description 2"
  }
]
```

---

# Get an Item

## Method: GET  
**URL**: `http://localhost:8080/api/items/{id}`  
  
### Description:  
Get the item with the specified ID from the database.  
  
### Example Response:  
```json
{
  "name": "Item",
  "description": "Description"
}
```

# Add an Item

## Method: POST  
**URL**: `http://localhost:8080/api/items`

### Description:  
Add new item to the database. 
  
### Body (raw JSON):  
```json
{
  "name": "New Item",
  "description": "New Description"
}
```

---

# Update an Item

## Method: PUT  
**URL**: `http://localhost:8080/api/items/{id}`

### Description:  
Updates the item with the specified ID from the database. 
  
### Body (raw JSON):  
```json
{
  "name": "Updated Item Name",
  "description": "Updated Description"
}
```
# DELETE an Item

## Method: DELETE  
**URL**: `http://localhost:8080/api/items/{id}`

### Description:  
Deletes the item with the specified ID from the database. 
  
---

# Error Handling

#### 1. If the `id` parameter in the **PUT**, **GET** or **DELETE** requests is not found (e.g., `id=1`), the response status will be **404 Not Found** with the message:
```json
{
  "Item with ID 1 not found"
}
```
#### 2. For the **POST** request, if the name field is not provided or is empty, the response status will be **400 Bad Request** with the message:
```json
{
  "Name is required and cannot be empty."
}
```

