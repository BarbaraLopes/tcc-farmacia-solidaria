FROM java:alpine

WORKDIR aplicacao

COPY ./target/*.jar ./
RUN mv ./*.jar app.jar

CMD ["java", "-jar", "-Dserver.port=8080", "app.jar"]