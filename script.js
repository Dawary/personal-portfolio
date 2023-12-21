// element toggle

const sidebar = document.querySelector(".sidebar");
const sidebarBtn = document.querySelector(".info_more-btn");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

// tab-lnks
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tab of tablinks) {
    tab.classList.remove("active");
  }
  for (content of tabcontents) {
    content.classList.remove("active");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active");
}

// validation

const Form = document.querySelector(".form");
const formInput = document.querySelectorAll(".form-input");

const formBtn = document.querySelector(".form-btn");

for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("input", function () {
    //
    if (formBtn.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const form = document.querySelector('form')
const fullname = document.getElementById('name')
const email = document.getElementById('email')
const subject = document.getElementById('subject')

function sendEmail(){
  const bodyMessage = `Full Name: ${fullname.value}<br> Email: ${email.value}
  <br> Message: ${subject.value}`
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sachin914bisht@gmail.com",
    Password : "3BF9E670E2F2438EAE67BDAF20949FD0FB24",
    To : 'sachin914bisht@gmail.com',
    From : document.getElementById('email').value,
    Subject : "New contact From Enquiry",
    Body : bodyMessage
}).then(
  message => {
    if(message == 'OK'){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  sendEmail()
})


// 531688C410F331F0C77284F8553D5C46F32D