const fs = require('fs');
const { remote } = require('electron')

let data = JSON.parse(fs.readFileSync('fitnesstracker/userData.json', 'utf8'));

document.getElementById('login').addEventListener('click', () => {
    const usm = document.getElementById('username').value;
    const pass = document.getElementById('pass').value;
    let tempusm = data.users.find(x => x.username === usm);

    if (!tempusm) {
        const errafter = document.getElementById('username');
        const newElement = '<p>This account doesn\'t exist!</p>';
        errafter.insertAdjacentHTML('beforebegin', newElement);
        return false;
    }

    if (tempusm.password !== pass || tempusm.username !== usm) {
        const errafter = document.getElementById('username');
        const newElement = '<p>The username/password is incorrect!</p>';
        errafter.insertAdjacentHTML('beforebegin', newElement);
        return false;
    }

    if (tempusm.username === usm && tempusm.password === pass) {
        event.preventDefault();
        tempusm.loggedIn = true;
        fs.writeFile('fitnesstracker/userData.json', JSON.stringify(data), (err) => {
            if (err) {
                console.log(err);
            }
        });
        window.location = `index.html`;
        return false;
    }
    return false;
});