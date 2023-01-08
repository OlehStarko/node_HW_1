const fs = require("fs").promises;

const contactsPath = fs.readFile("./db/contacts.json");

function getContactById(contactId) {
  contactsPath.then((data) =>
    console.table(
      JSON.parse(data.toString()).filter((el) => el.id == contactId)
    )
  );
}

module.exports = { getContactById };
