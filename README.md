
# Cloud-Native Task Manager – Technical Test

## Repositories

- **Backend API (Spring Boot)**: [HJHitesh/TaskManager-Backend-API](https://github.com/HJHitesh/TaskManager-Backend-API)  
  Swagger Documentation: [Swagger UI](https://ec2-3-148-243-104.us-east-2.amazonaws.com:8082/swagger-ui/index.html#/Task%20API/createTask)

- **Frontend UI (Angular)**: [HJHitesh/TaskManager-Angular-UI](https://github.com/HJHitesh/TaskManager-Angular-UI)  
  Live UI: [Angular App](http://my-angular-app-4056.s3-website.us-east-2.amazonaws.com/tasks)

---

## Project Overview

**Duration:** 1.5 Hours  
**Skill Areas:**  
- Java Spring Boot – REST API development, validation, pagination, testing  
- Angular – Reactive forms, UI components, API integration  
- AWS Fundamentals – Lambda functions, SDK usage, event-driven architecture  
- Cloud Deployment – End-to-end deployment and live demo  

This project demonstrates a cloud-native task management system with backend APIs, frontend UI, and AWS Lambda integration.

---

## Project Structure

```
cloud-native-task-manager/
├── springboot-task-api/         # Java backend
├── angular-task-ui/             # Angular frontend
├── aws-lambda-task-handler/     # Python Lambda function
├── README.md                    # This file
```

---

## 1. Spring Boot API

**Objective:** Build a REST API for managing tasks.

**Steps to Run:**  
1. Navigate to `springboot-task-api/`  
2. Build and run using Maven or Gradle  
3. Access Swagger UI at:  
   ```
   http://localhost:8080/swagger-ui.html
   ```

**API Endpoints:**  
- `POST /tasks` – Create a new task  
- `GET /tasks` – List all tasks  
- `GET /tasks/{id}` – Get task by ID  
- `PUT /tasks/{id}` – Update task by ID  
- `DELETE /tasks/{id}` – Delete task by ID  

**Features:**  
- Validation (e.g., title required, due date must be in future)  
- Pagination and filtering by status  
- Swagger/OpenAPI documentation  
- Unit tests for service layer  

---

## 2. Angular UI

**Objective:** Build a responsive UI to interact with the Spring Boot API.

**Steps to Run:**  
1. Navigate to `angular-task-ui/`  
2. Run:  
   ```bash
   npm install
   ng serve
   ```  
3. Access the UI at:  
   ```
   http://localhost:4200
   ```

**Angular Project Directory Structure:**

```
angular-task-ui/
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.server.ts
│   ├── app.config.ts
│   ├── app.routes.server.ts
│   ├── app.routes.ts
│   ├── components/
│   ├── models/
│   ├── prerender.ts
│   └── services/
├── index.html
├── main.server.ts
├── main.ts
├── server.ts
└── styles.scss
```

**Explanation:**  
- `app/` contains the main application code, including components, models, services, and routing configurations.  
- `components/` holds reusable UI components.  
- `models/` defines data structures for tasks and other entities.  
- `services/` contains Angular services to interact with the backend API.  
- `main.ts` and `main.server.ts` are entry points for client-side and server-side rendering.  
- `styles.scss` contains global styles, and `index.html` is the main HTML template.  

**Features:**  
- Form to create/update tasks using Angular Reactive Forms  
- Table to list tasks with pagination and status filter  
- Buttons to edit/delete tasks  
- Display validation errors and success messages  
- Optional: Angular Material UI components  

---

## 3. AWS Lambda Function

**Objective:** Simulate an event-driven workflow using AWS Lambda and SDK.

**Steps to Run:**  
1. Navigate to `aws-lambda-task-handler/`  
2. Implement a Python Lambda function that:  
   - Receives a simulated task completion event  
   - Logs the task details  
   - Stores a summary in a mock S3 bucket using AWS SDK (`boto3`)  

**Notes:**  
- Include comments explaining how this would work in a real AWS setup  
- Demonstrates event-driven architecture simulation  

---

## Cloud Deployment

**Objective:** Deploy all services to AWS and demonstrate functionality.

**Steps:**  
- Deploy Angular frontend to AWS S3 and serve via CloudFront  
- Deploy Spring Boot backend to AWS EC2 or Elastic Beanstalk  
- Deploy Lambda function using AWS Console or SAM CLI  
- Ensure proper CORS configuration between frontend and backend  

---

## Live Demo

- Demonstrate task creation, listing, and Lambda event simulation  
- Discuss architecture and deployment choices  

---

## Source Code Submission

- GitHub repository containing source code for all components  
- Deployment instructions  
- Optional architecture diagram  

---

**Note:** This README provides links to the deployed frontend and Swagger UI for quick testing and validation.
