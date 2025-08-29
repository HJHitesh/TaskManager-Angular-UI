# Cloud-Native Task Manager – Angular Frontend

## Project Overview

This project is the **Angular frontend** for the Cloud-Native Task Manager.  
It provides a responsive UI to interact with the Spring Boot backend API and demonstrates task management functionality including creation, listing, updating, and deletion of tasks.

**Skills Demonstrated:**  
- Angular – Reactive forms, UI components, API integration  
- Angular Material (optional)  
- Interaction with REST APIs  
- Form validation and user feedback  

---

## Live Demo

Access the live UI here:  
[Angular App](http://my-angular-app-4056.s3-website.us-east-2.amazonaws.com/tasks)

---

## API Testing with Swagger

The backend Spring Boot API provides a Swagger UI for interactive testing of all endpoints.
You can access it at:
[Swagger Link](https://ec2-3-148-243-104.us-east-2.compute.amazonaws.com:8082/swagger-ui/index.html#/Task%20API/createTask)

## Installation and Running Locally

1. Clone the repository:

```bash
git clone https://github.com/HJHitesh/TaskManager-Angular-UI.git
cd TaskManager-Angular-UI
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Access the UI at:

```
http://localhost:4200
```

---

## Angular Project Directory Structure

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

- `app/` – Main application folder containing components, services, models, and routing.  
- `components/` – Reusable UI components (task forms, tables, etc.).  
- `models/` – Data models for tasks.  
- `services/` – Angular services for API integration.  
- `main.ts` – Client-side entry point.  
- `main.server.ts` – Server-side entry point (if using Angular Universal).  
- `styles.scss` – Global styles.  
- `index.html` – Main HTML template.  

---

## Features

- Task creation and update using Reactive Forms  
- Display of tasks in a paginated table with filtering by status  
- Edit and delete functionality for tasks  
- Validation errors and success messages  
- Optional integration with Angular Material for UI components  

---

## API Integration

The frontend communicates with the Spring Boot backend API. Endpoints used:

- **POST** `/tasks` – Create task  
- **GET** `/tasks` – List all tasks  
- **GET** `/tasks/{id}` – Get task details  
- **PUT** `/tasks/{id}` – Update task  
- **DELETE** `/tasks/{id}` – Delete task  

> Make sure the backend API is running and CORS is properly configured.

---

## Architecture

The Cloud-Native Task Manager follows a **full-stack, cloud-native architecture**:

```
             ┌───────────────────┐
             │  User / Browser   │
             └─────────┬─────────┘
                       │
                       ▼
             ┌───────────────────┐
             │   AWS S3 / CloudFront  │
             │  (Angular Frontend)    │
             └─────────┬─────────┘
                       │ HTTP/HTTPS
                       ▼
             ┌───────────────────┐
             │   EC2 Instance    │
             │ (Spring Boot Backend │
             │    in Docker)       │
             └─────────┬─────────┘
                       │ JDBC / REST
                       ▼
             ┌───────────────────┐
             │    MySQL Database │
             │  (RDS or EC2-based) │
             └───────────────────┘
```

### Components:

1. **Angular Frontend**  
   - Hosted on **AWS S3** with optional **CloudFront CDN** for fast delivery.  
   - Communicates with backend REST APIs over HTTP/HTTPS.  

2. **Spring Boot Backend**  
   - Runs on **EC2** instance inside **Docker container**.  
   - Handles business logic and exposes REST endpoints.  

3. **MySQL Database**  
   - Can be hosted on **AWS RDS** or on the same EC2 instance.  
   - Stores all task data.  

4. **Docker**  
   - Encapsulates backend application for easy deployment and scaling.  

5. **AWS Services**  
   - **S3 + CloudFront:** Serves static frontend.  
   - **EC2:** Hosts backend Docker container.  
   - **RDS (optional):** Managed MySQL database.  

### Flow:

1. User accesses the **Angular frontend** from S3 via browser.  
2. Frontend sends HTTP requests to **Spring Boot backend** on EC2.  
3. Backend queries or updates **MySQL database**.  
4. Backend returns JSON responses to frontend for rendering.  

---

## Screenshots

**1. Create Task**  
![Create](https://github.com/HJHitesh/TaskManager-Angular-UI/blob/master/images/CREATE.png)

**1. Edit Task**  
![Create](https://github.com/HJHitesh/TaskManager-Angular-UI/blob/master/images/EDIT.png)

**1. Create Task**  
![Create](https://github.com/HJHitesh/TaskManager-Angular-UI/blob/master/images/CREATE.png)

**1. Create Task**  
![Create](https://github.com/HJHitesh/TaskManager-Angular-UI/blob/master/images/CREATE.png)

**1. Create Task**  
![Create](https://github.com/HJHitesh/TaskManager-Angular-UI/blob/master/images/CREATE.png)


> Replace the above placeholder image URLs with actual screenshots from your app.

---

## Deployment

The frontend can be deployed to **AWS S3** and served via **CloudFront** for static hosting:

1. Build the project for production:

```bash
ng build --prod
```

2. Upload the contents of `dist/angular-task-ui` to your S3 bucket.  
3. Configure S3 bucket for static website hosting and optionally use CloudFront for CDN.  

---

## Notes

- Ensure that the backend API URL is correctly configured in `app.config.ts`.  
- Use Angular CLI commands for building and serving the app:

```bash
ng build    # Build for production
ng serve    # Run locally
```
