# E-commerce-microservice


E-commerce system using MERN stack



## Acknowledgements

 ### How to run this project:

 - Set up essential creadentials on .env file
 - Install node js (minimum  v 16)
 - Install node modules using "npm install"
 - To run the app run "node index.js"
 - To run the project for continious development install nodemond globally and run "nodemon index.js"

 ### How to run api:
 - Firstly need an authentication token to authenticate user endpoint using: (https://{{base}}/get-token). This will return an authentication token
 - Then using this token, need to sign in into the system using https://{{base}}/user/signin routes. Make sure you are providing the the token as bearer token.
 - If login is successfull you will get another authentication token on header, it's key is "auth"
 - To perform any operation on db using the api, you need to send the token using "auth" through the header.This token will be validate for one day.
 



 ### How to run postman collection

- Before running any api makesure you have add variables properly
- The base url should be stored inside "test" variable
- Before send any request, you have to send signin api for the first time.
- After signing in, you can successfully run any api.
- Makesure every api has "auth" header. Otherwise it will not work.



## Appendix

If you need any kind of help feel free to  [contact us](https://wa.me/01793899433)

## Authors
- [MM Tareque](https://wa.me/01793899433)


## Owner

This project is developed by Muhimenul Tareque



## Tech Stack

**Language:** Javascript, Typescript

**Client:** Next, Redux, TailwindCSS

**Server:** Node, Express,

**Database:** Postgresql (Prisma ORM), MongoDB(Mongose)

**Others:** Radis, RabitMQ

<!--npm i express express-validator cors dotenv bcryptjs cloudinary multer jsonwebtoken body-parser @types/express @types/body-parser typescript ts-node nodemon --save-dev -->