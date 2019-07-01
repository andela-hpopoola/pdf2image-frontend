# PDF CONVERTER - FRONTEND

PDF CONVERTER allows you to instantly convert PDF documents to text or image format with this free PDF converter.


## Features

Users can perform the following actions with the application
  - Convert PDF to text
  - Register a new account
  - Log into an existing account
  - Convert PDF to images (in progress)


#### API Documentation
This project consumes two microservices

1. (Auth Services)[https://pdf2image-auth-service.herokuapp.com] - For Authentication
2. (PDF Services[https://pdf2image-doc-service.herokuapp.com])  - For PDF conversion


## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Installation and Setup

1. Clone the repository:
```
git@github.com:andela-hpopoola/pdf2image-frontend.git
```
2. Navigate into the cloned repository folder

3. Install dependencies:
```
$ npm install
```
4.  Create Postgresql database and run migrations `npm run db:migrations`.

5. Create a `.env` file by using the sample env file `.env.sample` in the root directory of the application. Use a different database for your testing and development.

6. Start the application:

```
npm start
```


## Contribution
To contribute to the project, follow the instructions below
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that I can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!


## Licence
Copyright (c) 2019 Haruna Popoola

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2019 Haruna Popoola
