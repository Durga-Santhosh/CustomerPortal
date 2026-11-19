
# Stage 1: Build Spring Boot application
FROM eclipse-temurin:25-jdk AS build

WORKDIR /app

# Copy Maven project files
COPY . .

# Make Maven wrapper executable
RUN chmod +x mvnw

# Build executable JAR
RUN ./mvnw clean package -DskipTests

# Stage 2: Run Spring Boot application
FROM eclipse-temurin:25-jre

WORKDIR /app

# Copy generated JAR
COPY --from=build /app/target/customer-0.0.1-SNAPSHOT.jar app.jar

# Application port
EXPOSE 7070

# Start application
ENTRYPOINT ["java", "-jar", "app.jar"]
