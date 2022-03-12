## English words check in sentence 

Simple application which takes english words from the user and return the non english words in the sentence

This application is deployed in the AWS EC2 
## http://ec2-44-202-167-154.compute-1.amazonaws.com/

## Project specification

##### Backend

- Using Binary search, low latency searching the sentence words in the large size english words.
- English words data is implemented using singleton pattern.


##### Frontend
- Element styling has been almost entirely achieved using styled-components.
- Formik has been used for form management. The values for the different inputs, as well as their error states are managed by Formik.
- The form inputs are validated using Yup.
- Unit test for the form is included. There are two describe blocks in it one for form input validations and another for form submission behavior.
  

### API Endpoint

`/sentence/check` takes query parameter called `sentence` pass english sentence.

Example:

```
http://ec2-44-202-167-154.compute-1.amazonaws.com:3001/sentence/check?sentence=Hey%20how%20are%20you
```

### Testing in local

- Node server is running on port `3001`
To start node server run `npm start` in the root folder

- React Web app is running on port `3000`
To start react app server run `npm start` in `app/` folder

### Deploy on your EC2 instance

Edit `deploy` file and add location of .pem folder and location of the folder

### Technologies used

- Express
- Node
- Axios 
- ReactJS 
- Formik (form management)
- Yup (schema based validation)
- styled-components (CSS in JS)


#### Future works

- Vercel for deployment frontend application
- Using CI/CD tools automated deployment on AWS
