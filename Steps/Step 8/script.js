// This is the array that will hold the contact list items
let contacts = [];
console.log("new ", contacts);

// function for adding new contact with 5 parameters
// This function will create a new contact object based on the
// detail that was entered in the form

function renderContact(contact) {
  //  set item to localStorage to store data
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // selecting the list where we will appending a all node items
  const list = document.querySelector(".Contact_list");

  const item = document.querySelector(`[data-key='${contact.id}']`);

  // creating new element article
  const node = document.createElement("article");
  node.setAttribute("class", "person"); // setting attribute class:"person"
  node.setAttribute("data-key", contact.id);
  // adding a image name and dob in article element
  // we can access the contactObject items with contactObject.objectitem because we rendered a contactObject in renderContact function as a parameter
  node.innerHTML = `
  <img src="${contact.imageurl}">
  <div class="contactdetail">
  <h1><i class="fas fa-user-circle contactIcon"></i> ${contact.name}</h1>
  <p> <i class="fas fa-envelope contactIcon"></i> ${contact.email}</p>
  <p><i class="fas fa-phone-alt contactIcon"></i> ${contact.contactnumber}  </p>
  </div>
      <button class="delete-contact js-delete-contact">
          <svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
          </svg>
      </button>
  `;
  // appending a node in list
  list.append(node);
}

function addContact(name, email, imageurl, contactnumber, id) {
  // creating object for storing Contact details name email etc ..
  const contactObject = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("myEmail").value,
    imageurl: document.getElementById("imgurl").value,
    contactnumber: document.getElementById("myTel").value,
    id: Date.now(),
  };

  // push a contactObject in todoItems array for store a data as a array in localstorage
  contacts.push(contactObject);
  console.log("new contact", contactObject);
  renderContact(contactObject);
  // rendering contactObject in renderContact function as a prameter to access the property of contactObject
}

// add a event listner submit to the form
const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // when the form is submitted addContact function is called
  addContact();
  form.reset();
});

// adding a add event listner when content is loaded and showing stored data array on the screen
document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("contacts");
  if (ref) {
    contacts = JSON.parse(ref);
    contacts.forEach((contact) => {
      renderContact(contact);
    });
  }
});
