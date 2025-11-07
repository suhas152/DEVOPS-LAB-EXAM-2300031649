# Spring Boot Exam Project

## How to Run
1. Open this folder in your IDE (IntelliJ / VS Code) or terminal.
2. Update `application.yml` with your MySQL username & password.
3. Run with Maven:
   ```
   mvn clean package
   java -jar target/springbootexamproject-1.0.0.jar
   ```
4. Backend runs on: `http://localhost:2000`

### Endpoints
- `POST /api/users/register` – Register new user  
- `POST /api/users/login` – Login user  
- `GET /api/users/{id}` – Fetch user details

This project uses plain Spring Boot (no JWT / no Spring Security).
