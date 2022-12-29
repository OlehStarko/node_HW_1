const contacts = require("./contactsList");
const contactById = require("./getById");
const removeContact = require("./removeContact");
const addContact = require("./addContact");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contacts.listContacts();
      break;

    case "get":
      contactById.getContactById(id);
      break;

    case "add":
      addContact.addContact(name, email, phone);
      break;

    case "remove":
      removeContact.removeContact(id);
      break;

    default:
      log(action);
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
