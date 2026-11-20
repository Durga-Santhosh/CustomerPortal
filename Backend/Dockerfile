
# Stage 1: Build Spring Boot application
FROM maven:3.9-eclipse-temurin-17 AS build

WORKDIR /app

# Copy project files
COPY pom.xml .
COPY src ./src

# Build JAR using Maven
RUN mvn clean package -DskipTests

# Stage 2: Run Spring Boot application
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copy generated JAR file
COPY --from=build /app/target/*.jar app.jar

# Render application port
EXPOSE 8080

# Start Spring Boot
CMD ["java", "-jar", "app.jar"]
