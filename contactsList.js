const fs = require("fs").promises;

const contactsPath = fs.readFile("./db/contacts.json");

function listContacts() {
  contactsPath.then((data) => console.table(JSON.parse(data.toString())));
}

module.exports = { listContacts };
