var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

swal({
  title: "Created by Fatin",
  text: "What's your name?",
  content:  {
    element: "input",
    attributes: {
      placeholder: "Type your name",
      type: "text",
    },
  },
  dangerMode: true,
  buttons: true,
})
.then((value) => {
  swal(`Thank you ${value} for visiting.`);
});