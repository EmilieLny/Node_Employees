const express = require('express');
const path = require('path');
var cors = require('cors')

const app = express();

let fs = require('fs');
let data = fs.readFileSync('./users.json');
let USERS = JSON.parse(data);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors()); // Use this after the variable declaration

// Get list of users
app.get('/users', showUsers);

app.get('/users/update/:email/:status', editStatus);

app.get('/home/:mail', getUser);

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

function showUsers(request, response) {
    response.send(USERS);
}

function editStatus(request, response) {
    let status = request.params.status;
    let user = request.params.email;

    for (let i = 0; i < USERS.length; i++) {
        if(USERS[i]["email"] === user){
            USERS[i]["status"] = status;
        }
    };

    let data = JSON.stringify(USERS)
    fs.writeFile('users.json', data, finished);
    function finished(err) {
        console.log('all set')
    }
    response.send(data);
}