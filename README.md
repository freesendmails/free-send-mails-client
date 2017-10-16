# Free Send Mails

![angular](https://img.shields.io/badge/Angular-4.0.0-green.svg)
![angular-cli](https://img.shields.io/badge/Angular-Cli-1.2.4-green.svg)
[![Build Status](https://travis-ci.org/freesendmails/free-send-mails-client.svg?branch=master)](https://travis-ci.org/freesendmails/free-send-mails-client)

`free send mails` This project is focused on making an email server available to static sites. In a simple and low code.

`Example:`
```html
<form action="http://www.api.freesendmails.com/v1/mails/youmail" method="POST">
  <div>
    <label>Name:</label>
    <input type="text" name="_name">
  </div>
  <div>
    <label>Email address:</label>
    <input type="email" name="_email">
  </div>
  <div>
    <label>Message:</label>
    <input type="text" name="_message">
  </div>
  <button type="submit">Submit</button>
</form>
```

## Demo app

Below you will be redirected to the direct demo of the site and you will also be able to see the two repositories of application codes.

- [Live Demo](http://www.freesendmails.com/test-mail)
- [Source code - Client](https://github.com/grassiricardo/free-send-mails-client)
- [Source code - Api](https://github.com/grassiricardo/free-send-mails-api)

## Development

Familiarize yourself with the code and try to follow the same syntax conventions to make it easier for us to accept your pull requests.


### Getting the Code

1. Clone the free-send-mails-client project:

  ```shell
  $ git clone https://github.com/grassiricardo/free-send-mails-client.git
  $ cd free-send-mails-client
  ```

### Run the application - (Without Docker)

1. Install dependencies. We assume that you have already installed `npm` in your system.

  ```shell
  $ npm install
  ```
  
2. Run the application.

  ```shell
  $ ng server
  ```

### Run the application - (With Docker)

1. Install dependencies and run application

  ```shell
  $ docker-compose up --build
  ```
