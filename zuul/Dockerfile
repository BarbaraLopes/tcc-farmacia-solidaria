FROM java:alpine

WORKDIR aplicacao

COPY ./config-client-entrypoint.sh ./
COPY ./target/*.jar ./
RUN mv ./*.jar app.jar

RUN chmod 755 ./config-client-entrypoint.sh

ENTRYPOINT ["./config-client-entrypoint.sh"]-cloud/bin/config-client-entrypoint.sh