#!/bin/sh
while ! nc -z config-service 8080 ; do
    echo "Waiting for upcoming Config Server"
    sleep 2
done

while ! nc -z eureka-service 8080 ; do
    echo "Waiting for upcoming Eureka Server"
    sleep 2
done

java -jar -Dspring.profiles.active=prod -Dspring.cloud.config.uri=http://config-service:8080 app.jar