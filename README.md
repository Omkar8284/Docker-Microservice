🚀 Microservices Architecture with Spring Cloud, React & Docker

This project demonstrates a microservices-based architecture using Spring Boot, Spring Cloud, React, MySQL, and Docker.
It also showcases Resilience4j Circuit Breaker for fault tolerance and service resilience.

🧩 Architecture Overview

The system consists of multiple independently deployable services:

User Service – Manages user-related data

Department Service – Manages department-related data

Spring Cloud API Gateway – Single entry point for all requests

Eureka Service Registry – Service discovery

React Frontend – User interface

MySQL Database – Persistent storage

Docker – Containerization of all services

Resilience4j – Circuit breaker for fault tolerance

🛠️ Tech Stack
Backend

Java 17+

Spring Boot

Spring Cloud (Eureka, Gateway)

Spring Data JPA

Resilience4j

MySQL

Maven

Frontend

React

Axios

DevOps

Docker

Docker Compose

🧱 Microservices Details
🧍 User Service

Manages user information

Communicates with Department Service

Uses Resilience4j Circuit Breaker to handle failures gracefully

🏢 Department Service

Manages department data

Exposes REST APIs

Registered with Eureka

🌐 Spring Cloud API Gateway

Routes requests to backend services

Load balancing via Eureka

Centralized API access point

🧭 Eureka Service Registry

Service discovery for all microservices

Enables dynamic service registration

🎨 React Frontend

Consumes APIs through API Gateway

Displays user and department data

Handles backend failures gracefully

🔁 Resilience4j – Circuit Breaker

This project demonstrates fault tolerance using Resilience4j:

Prevents cascading failures

Automatically opens circuit when a service is down

Provides fallback responses

Improves system stability

Example use case:

If Department Service is unavailable, User Service returns a fallback response instead of failing completely

🐳 Dockerized Services

Each component is fully containerized:

User Service

Department Service

API Gateway

Eureka Server

React Frontend

MySQL Database

Services are orchestrated using Docker Compose.

▶️ Running the Application
Prerequisites

Docker & Docker Compose

Java 17+

Node.js (for local frontend dev)

Run using Docker Compose
docker-compose up --build

🌍 Access the Application
Service	URL
Eureka Dashboard	http://localhost:8761

API Gateway	http://localhost:9191

React Frontend	http://localhost:3000

User Service	http://localhost:8080

Department Service	http://localhost:8081

(All backend requests go through API Gateway)


🎯 Key Features

Microservices architecture

Service discovery with Eureka

Centralized routing with API Gateway

Fault tolerance with Resilience4j

React frontend integration

MySQL database

Fully Dockerized setup

📌 Future Enhancements

Authentication & Authorization (JWT)

Config Server

Distributed tracing (Zipkin)

Kubernetes deployment

👨‍💻 Author

Shivraj
GitHub: ShivrajJ15
