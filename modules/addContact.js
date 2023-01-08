const fs = require("fs").promises;

const contactsPath = fs.readFile("./db/contacts.json");

function addContact(name, email, phone) {
  contactsPath.then((data) => {
    const array = JSON.parse(data.toString());
    const id = (JSON.parse(data.toString()).length += 1);
    const contact = {
      id: id.toString(),
      name,
      email,
      phone,
    };
    array.push(contact);
    console.table(array);
    fs.writeFile("contacts.json", JSON.stringify(array));
  });
}

module.exports = { addContact };
