[![Repo Size](https://img.shields.io/github/repo-size/araff-16/Fake-Umbrella?style=for-the-badge)]()
[![Code Size](https://img.shields.io/github/languages/code-size/araff-16/Fake-Umbrella?style=for-the-badge)]()

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

# Summary

Web app for Fake Umbrella to track customer information and determine which customers are expecting rain within the next five days.

# Project Structure

- [Front-End](/front-end)
  - [Components](/front-end/src/app/Components)
  - [Models](/front-end/src/app/Models)
  - [Services](/front-end/src/app/Services)
- [Back-End](/back-end)

# Project Setup

- [Fork](https://github.com/araff-16/Fake-Umbrella/fork) this repository and clone it to your local device.
- Make an ENV file for the back-end following [.env.example](/back-end/.env.example).

- Running the project using Docker Images
  - Start-up front-end:
    - `cd front-end`
    - `docker build . -t frontend`
    - `docker run --rm -it -p 4200:4200 frontend`
  - Start-up back-end:
    - `cd back-end`
    - `docker build . -t backend`
    - `docker run --rm -it -p 3000:3000 backend`
  - Visit http://localhost:4200/
- Running the project using local machine
  - Start-up front-end:
    - `cd front-end`
    - `npm install`
    - `npm start`
  - Start-up back-end:
    - `cd back-end`
    - `npm install`
    - `npm start`
  - Visit http://localhost:4200/

## Note

To reset the database run `npx nestjs-command create:customers` while in the [back-end](/back-end) directory.

## Note

Everytime the backend docker image is run the database will be reset. This can be prevented by removing `npx nestjs-command create:customers` from the [Dockerfile](/back-end/Dockerfile).
