FROM node

WORKDIR /app

RUN npm install -g @angular/cli

RUN git clone https://github.com/lealbrunocalhau/login-base.git .

RUN cd /app/frontend2

RUN npm install

WORKDIR /app/frontend2

CMD ["ng", "serve", "--port", "4240", "--host", "0.0.0.0"]
