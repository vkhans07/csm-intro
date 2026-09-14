# CSM Scheduler Intro Project

Welcome to the CSM Scheduler Intro Project! This repository contains a scaffolded full-stack web application designed to help you learn and practice web development with Django, React, and SCSS.

## Project Overview

The project is split into two parts:
1.  **Backend (Django + PostgreSQL)**: Handles data storage and API logic.
2.  **Frontend (React + TypeScript + SCSS)**: Provides the user interface for students.

## Simplified Logic
We have removed complex authentication and attendance.
- **Students** and **Mentors** are simplified: they just have a `name` and `email`.
- **Enrolling** simply means creating a "Student" record linked to a "Section" and "Course".

## Architecture

- **Backend**: Django Rest Framework (DRF) serving a JSON API.
- **Frontend**: Vite-powered React app consuming the API.
- **Database**: PostgreSQL.
- **Infrastructure**: Docker Compose orchestrates the services.

## Getting Started

1.  **Prerequisites**: Ensure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed.
2.  **Run the App**:
    ```bash
    docker-compose up --build
    ```
3.  **Access**:
    - Backend API: [http://localhost:8000/api/](http://localhost:8000/api/)
    - Admin Panel: [http://localhost:8000/admin/](http://localhost:8000/admin/)
    - Frontend: [http://localhost:5173/](http://localhost:5173/)
      
### Backend

  1. Counter Model:
      - Task: Create a Counter model with an integer field named count.
      - The count should start at 0.
  2. Create a `GET` endpoint that returns the current counter value.
     - If the counter does not exist, create it with a value of `0`.
     - Create a `POST` endpoint that increments the counter by one and returns the updated value.
  3.  Connect both counter endpoints in scheduler/urls.py

### Frontend

The React frontend is already implemented. No frontend work is required.

### Collaboration

- **Git Branching**: Use feature branches.
- **API Design**: Agree on the `enroll` payload format before starting!

## Resources

- [Django REST Framework @action](https://www.django-rest-framework.org/api-guide/viewsets/#marking-extra-actions-for-routing)
- [Django REST Framework @api_view](https://www.django-rest-framework.org/api-guide/views/#function-based-views)
- [React Documentation](https://react.dev/learn)
- [Sass Documentation](https://sass-lang.com/documentation/)

Good luck!
