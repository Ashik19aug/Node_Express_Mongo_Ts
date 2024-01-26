<div align="center">
<br>
<img src="src/assets/Images/Logo/readMeLogo.png" alt="Logo" width="80" height="80">
<h2>NodeJS SetUp</h2>
</div>

<br/><br/>
### Installation Commands
#### SetUp Project
```shell
npm init -y
```
#### Install TypeScript
```shell 
npm install -D typescript 
```
#### Install TypeScript Node
```shell
npm install -D ts-node
```
#### Install Nodemon to running the project on development
```shell
npm install -D nodemon
```
<br/><br/>

#### Now create the TypeScript Configuration file in the root directory
```shell
tsc --init
// Create tsconfig.json file and change 
"sourceMap": true,  
"baseUrl": "./src",
"outDir": "./dist",  

```
#### Create new file nodemon.json to configure nodemon
```shell
nodemon.json
// wrire this code into nodemon.json file
{
  "watch" : "src",
  "ext" : ".js,.ts",
  "exec" : "ts-node ./src/index.ts"
}
```
<br/><br/>
##### Create new folder src and create new file index.ts
#### Now update the package.json file
```shell
"scripts": {
    "start": "nodemon", // add this line to the package.json file
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Run Project
```shell
npm start
```
