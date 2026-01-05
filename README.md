# 🚀 Docker Microservices Architecture

A production-ready microservices application built with Spring Boot, Spring Cloud, React, and Docker, demonstrating modern distributed system patterns including service discovery, API gateway, circuit breakers, and containerization.

[![Java](https://img.shields.io/badge/Java-17+-blue)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen)](https://spring.io/projects/spring-boot)
[![React](https://img.shields.io/badge/React-18.x-61DAFB)](https://reactjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Compose-2496ED)](https://www.docker.com/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1)](https://www.mysql.com/)

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technologies](#technologies)
- [Services](#services)
- [Service Proofs](#service-proofs)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [API Documentation](#api-documentation)
- [Project Structure](#project-structure)

## 🌟 Overview

This project showcases a complete microservices ecosystem with the following key features:

- **Service Discovery**: Automatic service registration and discovery using Netflix Eureka
- **API Gateway**: Centralized routing and load balancing with Spring Cloud Gateway
- **Fault Tolerance**: Circuit breaker pattern implementation using Resilience4j
- **Containerization**: Full Docker support with Docker Compose orchestration
- **Modern Frontend**: React-based user interface with seamless backend integration
- **Database Persistence**: MySQL for reliable data storage

## 🏗️ Architecture

![Architecture Diagram](./architecture-diagram.png)

```
┌─────────────────┐
│  React Frontend │
│   (Port 3000)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   API Gateway   │
│   (Port 9191)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Eureka Registry │◄──────┐
│   (Port 8761)   │       │
└─────────────────┘       │
         │                │
    ┌────┴────┐           │
    ▼         ▼           │
┌─────────┐ ┌─────────┐  │
│  User   │ │  Dept   │  │
│ Service │─┤ Service │  │
│ (8080)  │ │ (8081)  │──┘
└────┬────┘ └────┬────┘
     │           │
     └─────┬─────┘
           ▼
      ┌─────────┐
      │  MySQL  │
      │  (3306) │
      └─────────┘
```

**Download Draw.io Architecture Diagram**: [architecture-diagram.drawio](./architecture-diagram.drawio)

## 🛠️ Technologies

### Backend
- **Java 17+** - Core programming language
- **Spring Boot 3.x** - Application framework
- **Spring Cloud Netflix Eureka** - Service discovery
- **Spring Cloud Gateway** - API routing and load balancing
- **Spring Data JPA** - Data persistence
- **Resilience4j** - Circuit breaker and resilience patterns
- **MySQL 8.0** - Relational database
- **Maven** - Dependency management

### Frontend
- **React 18.x** - UI framework
- **Axios** - HTTP client
- **CSS3** - Styling

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration

## 📦 Services

### 1. User Service (Port 8080)
Manages user-related operations with the following capabilities:
- CRUD operations for user entities
- Integration with Department Service for complete user profiles
- Circuit breaker implementation for graceful degradation
- RESTful API endpoints

**Key Endpoints:**
- `GET /users` - List all users
- `GET /users/{id}` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/{id}` - Update user
- `DELETE /users/{id}` - Delete user

### 2. Department Service (Port 8081)
Handles department-related data and operations:
- Department entity management
- RESTful API for department operations
- Registered with Eureka for service discovery

**Key Endpoints:**
- `GET /departments` - List all departments
- `GET /departments/{id}` - Get department by ID
- `POST /departments` - Create department
- `PUT /departments/{id}` - Update department
- `DELETE /departments/{id}` - Delete department

### 3. API Gateway (Port 9191)
Central entry point for all client requests:
- Routes requests to appropriate microservices
- Load balancing across service instances
- Cross-cutting concerns (logging, security)
- Integration with Eureka for dynamic routing

### 4. Eureka Service Registry (Port 8761)
Service discovery server:
- Automatic service registration
- Health monitoring
- Dynamic service discovery
- Load balancing support

### 5. React Frontend (Port 3000)
User interface application:
- Responsive design
- Consumes REST APIs via API Gateway
- Real-time data display
- Error handling and user feedback

### 6. MySQL Database (Port 3306)
Persistent data storage:
- Separate databases for User and Department services
- Transactional support
- Data integrity and consistency

## 📸 Service Proofs

### 1. Eureka Service Registry Dashboard

**Service Registration Proof:**

![Eureka Dashboard](./docs/screenshots/eureka-dashboard.png)

**What to verify:**
- All services (API Gateway, User Service, Department Service) are registered
- Services show status as "UP"
- Instance count shows correct number of running instances
- Application names match: `API-GATEWAY`, `USER-SERVICE`, `DEPARTMENT-SERVICE`

**Screenshot Command:**
```bash
# Access Eureka Dashboard
open http://localhost:8761
```

---

### 2. User Service

**Service Running Proof:**

![User Service Health](./docs/screenshots/user-service-health.png)

**Docker Container Status:**
```bash
docker ps | grep user-service
```

**Health Check:**
```bash
curl http://localhost:9191/users/actuator/health
```

**Sample API Call - Create User:**
```bash
curl -X POST http://localhost:9191/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "departmentId": 1
  }'
```

**Expected Response:**
```json
{
  "userId": 1,
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "departmentId": 1
}
```

**Get All Users:**
```bash
curl http://localhost:9191/users
```

![User Service Response](./docs/screenshots/user-service-response.png)

---

### 3. Department Service

**Service Running Proof:**

![Department Service Health](./docs/screenshots/department-service-health.png)

**Docker Container Status:**
```bash
docker ps | grep department-service
```

**Health Check:**
```bash
curl http://localhost:9191/departments/actuator/health
```

**Sample API Call - Create Department:**
```bash
curl -X POST http://localhost:9191/departments \
  -H "Content-Type: application/json" \
  -d '{
    "departmentName": "Engineering",
    "departmentAddress": "Building A",
    "departmentCode": "ENG001"
  }'
```

**Expected Response:**
```json
{
  "departmentId": 1,
  "departmentName": "Engineering",
  "departmentAddress": "Building A",
  "departmentCode": "ENG001"
}
```

**Get All Departments:**
```bash
curl http://localhost:9191/departments
```

![Department Service Response](./docs/screenshots/department-service-response.png)

---

### 4. API Gateway

**Gateway Routing Proof:**

![API Gateway Logs](./docs/screenshots/api-gateway-logs.png)

**Test Gateway Routing:**
```bash
# Route to User Service
curl http://localhost:9191/users

# Route to Department Service
curl http://localhost:9191/departments

# Check Gateway Health
curl http://localhost:9191/actuator/health
```

**Gateway Routes Configuration:**
```bash
# View configured routes
curl http://localhost:9191/actuator/gateway/routes
```

![Gateway Routes](./docs/screenshots/gateway-routes.png)

---

### 5. React Frontend

**Frontend Running Proof:**

![React Frontend Homepage](./docs/screenshots/frontend-homepage.png)

**Access:**
```bash
open http://localhost:3000
```

**Features Demonstrated:**
1. User Management Interface
2. Department Management Interface
3. Real-time data fetching from microservices
4. Responsive design

![User Management UI](./docs/screenshots/frontend-users.png)
![Department Management UI](./docs/screenshots/frontend-departments.png)

---

### 6. MySQL Database

**Database Connection Proof:**

![MySQL Database](./docs/screenshots/mysql-connection.png)

**Connect to MySQL Container:**
```bash
docker exec -it mysql-db mysql -u root -proot
```

**Verify Databases:**
```sql
SHOW DATABASES;
```

**Expected Output:**
```
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| userdb             |
| departmentdb       |
+--------------------+
```

**Verify User Data:**
```sql
USE userdb;
SHOW TABLES;
SELECT * FROM users;
```

**Verify Department Data:**
```sql
USE departmentdb;
SHOW TABLES;
SELECT * FROM departments;
```

![Database Tables](./docs/screenshots/database-tables.png)

---

### 7. Docker Compose Services

**All Services Running:**

```bash
docker-compose ps
```

**Expected Output:**
```
NAME                    IMAGE                           STATUS              PORTS
api-gateway             docker-microservice-api-gateway  Up 2 minutes       0.0.0.0:9191->9191/tcp
department-service      docker-microservice-department   Up 2 minutes       0.0.0.0:8081->8081/tcp
mysql-db                mysql:8.0                       Up 2 minutes       0.0.0.0:3306->3306/tcp, 33060/tcp
service-registry        docker-microservice-registry     Up 2 minutes       0.0.0.0:8761->8761/tcp
user-service            docker-microservice-user         Up 2 minutes       0.0.0.0:8080->8080/tcp
frontend                docker-microservice-frontend     Up 2 minutes       0.0.0.0:3000->3000/tcp
```

![Docker Compose Services](./docs/screenshots/docker-compose-services.png)

**View Logs:**
```bash
# All services
docker-compose logs

# Specific service
docker-compose logs user-service
docker-compose logs department-service
```

---

### 8. Inter-Service Communication Proof

**User Service calling Department Service:**

```bash
# Create a department first
curl -X POST http://localhost:9191/departments \
  -H "Content-Type: application/json" \
  -d '{
    "departmentName": "HR",
    "departmentAddress": "Building B",
    "departmentCode": "HR001"
  }'

# Create a user with department
curl -X POST http://localhost:9191/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Smith",
    "email": "jane.smith@example.com",
    "departmentId": 1
  }'

# Get user with department details (shows inter-service call)
curl http://localhost:9191/users/1
```

**Expected Response (with department details):**
```json
{
  "userId": 1,
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "department": {
    "departmentId": 1,
    "departmentName": "HR",
    "departmentAddress": "Building B",
    "departmentCode": "HR001"
  }
}
```

![Inter-Service Communication](./docs/screenshots/inter-service-call.png)

---

### 9. Circuit Breaker Proof (Resilience4j)

**Simulate Department Service Failure:**

```bash
# Stop department service
docker-compose stop department-service

# Try to get user with department (circuit breaker should activate)
curl http://localhost:9191/users/1
```

**Expected Response (Fallback):**
```json
{
  "userId": 1,
  "firstName": "Jane",
  "lastName": "Smith",
  "email": "jane.smith@example.com",
  "department": {
    "departmentId": 0,
    "departmentName": "Temporarily Unavailable",
    "departmentAddress": "N/A",
    "departmentCode": "N/A"
  }
}
```

**Restart Department Service:**
```bash
docker-compose start department-service
```

![Circuit Breaker in Action](./docs/screenshots/circuit-breaker.png)

---

## ✅ Prerequisites

Before running this application, ensure you have:

- **Docker Desktop** (version 20.10+)
- **Docker Compose** (version 2.0+)
- **Java 17** or higher (for local development)
- **Node.js 16+** and **npm** (for frontend development)
- **Maven 3.8+** (for building Java projects)
- **Git** (for cloning the repository)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Omkar8284/Docker-Microservice.git
cd Docker-Microservice
```

### 2. Create Screenshots Directory

```bash
mkdir -p docs/screenshots
```

### 3. Run with Docker Compose

Start all services with a single command:

```bash
docker-compose up --build
```

This will:
- Build all Docker images
- Start MySQL database
- Launch all microservices
- Start the React frontend
- Configure networking between containers

### 4. Wait for Services to Start

Monitor the logs and wait for all services to be healthy:
- Eureka Server typically takes 30-60 seconds
- Other services register with Eureka after startup
- Check Eureka dashboard at http://localhost:8761

### 5. Capture Proofs

Follow the commands in the "Service Proofs" section above to verify each service and capture screenshots.

### 6. Access the Application

| Service | URL | Description |
|---------|-----|-------------|
| Frontend | http://localhost:3000 | React application |
| API Gateway | http://localhost:9191 | API entry point |
| Eureka Dashboard | http://localhost:8761 | Service registry UI |
| User Service | http://localhost:8080 | Direct access (not recommended) |
| Department Service | http://localhost:8081 | Direct access (not recommended) |

### 7. Stop the Application

```bash
docker-compose down
```

To remove volumes and clean up completely:

```bash
docker-compose down -v
```

## 📚 API Documentation

### Example API Calls (via API Gateway)

#### Create a Department
```bash
curl -X POST http://localhost:9191/departments \
  -H "Content-Type: application/json" \
  -d '{
    "departmentName": "Engineering",
    "departmentAddress": "Building A",
    "departmentCode": "ENG001"
  }'
```

#### Create a User
```bash
curl -X POST http://localhost:9191/users \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "departmentId": 1
  }'
```

#### Get User with Department
```bash
curl http://localhost:9191/users/1
```

## 📂 Project Structure

```
Docker-Microservice/
├── api-gateway/              # Spring Cloud Gateway
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── service-registry/         # Eureka Server
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── user/                     # User Microservice
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── department/               # Department Microservice
│   ├── src/
│   ├── Dockerfile
│   └── pom.xml
├── microservice-frontend/    # React Application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   └── package.json
├── docs/                     # Documentation & Screenshots
│   └── screenshots/
├── compose.yaml              # Docker Compose configuration
├── architecture-diagram.drawio  # Architecture diagram
├── .dockerignore
└── README.md
```

## 🧪 Testing

### Health Checks

Check if services are healthy:

```bash
# Eureka health
curl http://localhost:8761/actuator/health

# User Service health
curl http://localhost:9191/users/actuator/health

# Department Service health
curl http://localhost:9191/departments/actuator/health
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.

## 👤 Author

**Omkar Pawar**

- GitHub: [@Omkar8284](https://github.com/Omkar8284)

---

**Happy Coding! 🚀**
