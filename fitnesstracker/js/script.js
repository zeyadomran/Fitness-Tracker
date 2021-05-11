const fs = require('fs');

let data = JSON.parse(fs.readFileSync('fitnesstracker/userData.json', 'utf8'));

function startup() {
    let loggedin = data.users.find(x => x.loggedIn === true);

    document.getElementById('welcomemsg').innerText =`Welcome ${loggedin.firstName}`;
}


function logout() {
    let loggedin = data.users.find(x => x.loggedIn === true);
        loggedin.loggedIn = false;
        fs.writeFile('fitnesstracker/userData.json', JSON.stringify(data), (err) => {
            if (err) {
                console.log(err);
            }
        });
        window.location = `login_page.html`;
        return false;
};