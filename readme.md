# Swatch UI

---

## Pre-requisites

* NodeJs 16.13.1
* Docker 19.03.8 `(Optional)`

## How to build and run

### Using binary

* `npm install`
* `npm start`

### Using Docker

* `docker build -t swatch/ui:0.0.1 .`
* `docker run -p 3000:3000 -d swatch/ui:0.0.1 >> ../ui.pid`

## How to test

* Open the URL `http://localhost:3000` in a web browser and click on the `GENERATE SWATCH` button.