# Important update note:

We have now a better and simpler template:

https://github.com/SuprGames/serverless-ts-base-template

------------------------------------------------------------------------------------------------------------

Legacy Template:

This will be archived.

# serverless-app-template
Serverless Application Template - TS - Serverless - Offline

Really opinionated Template:

* TypeScript
* Test (Mocha - Chai)
* WebPack with AWS-SDK module exclusion
* Environment variables with .ENV Plugin
* Pseudo Params plugin 
* Offline Plugin
* STS-DSL In place (Only for decoration in current version)
* First Handler in place with TS and Responses external module set up
* Logging with Simple Node Logger
* Domain Manager plugin


Run `npm install` to install all the dependencies.

* If you have a domain then, fill the domain values in the .env file: *certificate name* and *domain name*
* If you do not have a domain or you do not want to make use of the domain plugin, remove these values from .env and remove the plugin entry.

With `sls offline start` you will start the service locally and you will be able to access the Hello Lambda:
* By default will be placed in: http://localhost:3000/dev/hello

With `sls deploy` you will deploy the application.

Considerations:
* The template is integrated with Serverless Dashboard, for that reason the Organization and the Application values are present **Select your correct values**

