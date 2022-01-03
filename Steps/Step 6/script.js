// function for adding new contact with 5 parameters
// This function will create a new contact object based on the
// detail that was entered in the form
function addContact(name, email, imageurl, contactnumber, id) {
  // creating object for storing Contact details name email etc ..
  const contactObject = {
    name: document.getElementById("fullName").value,
    email: document.getElementById("myEmail").value,
    imageurl: document.getElementById("imgurl").value,
    contactnumber: document.getElementById("myTel").value,
    id: Date.now(),
  };
  console.log(contactObject);
}

// add a event listner submit to the form
const form = document.querySelector(".js-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  // when the form is submitted addContact function is called
  addContact();
  form.reset();
});
