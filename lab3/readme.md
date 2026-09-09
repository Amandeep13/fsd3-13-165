localhost -URL
127.0.0.1-IP address

ctrl+c -stop the server
every request has a pair of{request,response}

##NODE  PACKAGE  MANAGER

used to install run uninstall any program/project and package 

-npm install<packageName>
-npm uninstall<packagrName>

to use npm,the must be npm project
to create npm project we can  use 

-npm init -y
-it create  a package .json file automatically
package;json holds all th informaation related to install package from npm
-update package.json,set type ='module'
-it also create a folder naofe-modules automatically
-node-module hold th eapckage.library files
-generally we ignore the node-module by ,gitignore 


Nodemon=it restart  the server auto matically when file changes ,to install 

>npm i nodemon -D

Note :-D flag will install this package as a developer dependency
-to execute any program,update
the package .json file then  start the server  as 
<b>npm  rundev</b>
-start ->it will server execute the app on f=deployment 
-dev->it will start derver in development phase 
-res:it will return the contents (json /file plain) to user /client 
-req:it will retrieve the information from client to the server 
-server send also staatus codes to the client ,that indicated teh error/succcess message
##status codes
-200->ok
-201->created
-400->bad request 
-401->unauthorised 
-403>forbidden
-404>not found
-500->Internal server error

## content type
-text/plain
-text/html
-application/json
-text/css

the content type and status code can be send back to client by two ways 
1.rees.writeHead
2.res.setHeader
3.res.statuscode


## response as html content
1.Res.end(any html content/tag)
2.htm;l file
    -REAd by create readstream
    -pipe with res
   
   
    ##JSON =JAVASCRIPT NOTATION
    server returns 