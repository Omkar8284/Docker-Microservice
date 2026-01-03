FROM maven:latest

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests
EXPOSE 8081
CMD ["java", "-jar", "target/service-registry-0.0.1-SNAPSHOT.jar"]

