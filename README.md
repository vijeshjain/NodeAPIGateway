

# NodeAPIGateway

The objective of this project is to implement a simple API Management Gateway (gateway) for RESTful APIs.

## Usage

Run app.js

A login form is displayed on the screen.

To test the application, use below credentials:
email: admin@admin.com
password: admin

## Implemented Features

When the user submits the login form, a POST request is sent to the API Gateway ('/gateway/loginUser') and then the request is proxied to actual REST Web Service ('/loginUser')

Login Authentication is implemented for the user login module in the API Gateway layer.

A counter is maintained to keep track of the number of calls made to the Actual REST API.
Counter is displayed when the user get logged in successfully. 

In brief, the gateway takes the all the calls from the caller and passes it to the proxied API and the results are returned back to the caller.

Specifications regarding the API's is mentioned in the RAML file ('loginex.raml'), which is loaded into the application using the npm package 'raml-parser'

npm package 'osprey' is used to bind the API with the Node-Express application.

## Developing

Implementation of OAuth using the API Gateway.

Functionality to log all calls to the gateway and keep track of the count of every API call.

Mashup data from multiple APIs.

Create caching system that allows to improve the data delivery from the API.

Ability to blacklist/whitelist IP's based on some condition.

Limit number of calls to an API (threshold).


### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
