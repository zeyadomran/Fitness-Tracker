const fs = require('fs');
const { remote } = require('electron')

let data = JSON.parse(fs.readFileSync('fitnesstracker/userData.json', 'utf8'));
console.log(data);

document.getElementById('signup').addEventListener('click', () => {
    const usm = document.getElementById('username').value;
    const fname = document.getElementById('fname').value;
    const pass = document.getElementById('pass').value;
    const cpass = document.getElementById('cpass').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const goal = document.getElementById('goal').value;

    let tempusm = data.users.find(x => x.username === usm);

    if (tempusm) {
        const errafter = document.getElementById('fname');
        const newElement = '<p>This account already exists!</p>';
        errafter.insertAdjacentHTML('beforebegin', newElement);
        return false;
    }

    if (pass !== cpass) {
        const errafter = document.getElementById('fname');
        const newElement = '<p>The passwords are different!</p>';
        errafter.insertAdjacentHTML('beforebegin', newElement);
        return false;
    }
    event.preventDefault();

    data.users.push({
        id: Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6),
        firstName: fname,
        username: usm,
        password: pass,
        age: age,
        height: height,
        weight: weight,
        goal: goal,
        caloriesLost:[],
        caloriesGained:[]
    });

    fs.writeFile('fitnesstracker/userData.json', JSON.stringify(data), (err) => {
        if (err) {
            console.log(err);
        }
    });
    window.location = `login_page.html`;
    return false;
});