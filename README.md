1. First install the app by using the following command: npm install create-react-app
2.Create the react by : create react-app appname
3.Install dependencies which are to be used in the project: 
  3.1  npm i json-server
  3.3 npm i concurrently
  3.4 npm i react-router-dom
4. Create the component structure in the project folder
5.After the basic components structure is created run the app by giving 
  5.1 npm start
6. If two servers need to run parallely:
   open package.json ->within the scripts folder added a new line  ->  "launch": "node_modules\\.bin\\concurrently --kill-others \"node_modules\\.bin\\json-server json-server-data/addproduct.json\" \"npm run start\""
After making necessary changes., give the following command -> npm run launch
  

