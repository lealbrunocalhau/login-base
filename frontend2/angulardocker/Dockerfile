FROM node

WORKDIR /app

RUN npm install -g @angular/cli

RUN git clone https://github.com/lealbrunocalhau/login-base.git .

WORKDIR /app/frontend2

RUN npm install


CMD ["ng", "serve", "--port", "4240", "--host", "0.0.0.0"]
