FROM alpine:latest 
WORKDIR /root/
RUN sudo cp docker-compose-$(uname -s)-$(uname -m) /usr/local/bin/docker-compose
RUN sudo chmod +x /usr/local/bin/docker-compose
ENTRYPOINT ["docker-compose","up -d"]