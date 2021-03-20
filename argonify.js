const argon2 = require("argon2");
const read = require("read");

read({ prompt: 'Password: ', silent: true }, async function(er, password) {
    if (er) return;

    console.log(await argon2.hash(password));
})