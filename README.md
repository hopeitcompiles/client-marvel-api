# Marvel API Client - React Application
 React project that uses Marvel API to get data about Marvel characters

 This web application was made using React JS.
 
 ## About Marvel API
 It is free. In order to use the API you must register in the Marvel Developer Portal. 
 https://developer.marvel.com/.
 Then you can get a public and private key. Both of them will be needed to generate a HASH which must be a md5 digest of the ts parameter, the private and public key.
 
 For example, a user with a ts of "1", public key of "1234" and a private key of "abcd", the hash value would be the md5 digest of 1abcd1234, then could construct a valid call as follows: http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150.

The response result format is showed in the Interactive API Tester, in https://developer.marvel.com/docs. This repository also contains an example of a character result, named as hero.json, not the entire API response.

## About this Project

It uses Components and Hooks to implement the navigation. 

### Bootstrap
It was added to the project via NPM, use "npm install bootstrap". Bootstrap depends on Popper, in order to add it just use "npm i @popperjs/core". Then you can import it as a component using "import bootstrap from 'bootstrap'".

### React Router Dom
This is routing library for the React, it lets perform a no-reload page navigation. It can be added to the project via NPM, use "npm install react-router-dom".
In order to implement navigation, place your route structure into a BrowserRouter mark, inside put a Routes mark, it works as a switch, and for every path option add a Route mark, just like this:

![image](https://user-images.githubusercontent.com/73175815/152441976-242bcd2b-40df-4df5-95ea-a46cc0bf2ab4.png)

The ":heoid" means it is a router parameter and it can be catched with the useParams hook from React Router. 

### Fecth API Data
The fecth function was used to get the data from the API, a valid API uri must be send in order to get the data.

