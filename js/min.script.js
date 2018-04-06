var modalButton = document.querySelector(".modal-button");
var modalSearch = document.querySelector(".modal-search");

var form = modalSearch.querySelector("form");
var arrivalDate = modalSearch.querySelector(".date-in");
var departureDate = modalSearch.querySelector(".date-out");
var adult = modalSearch.querySelector(".adults");
var children = modalSearch.querySelector(".children");


modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSearch.classList.toggle("modal-close");
  modalSearch.classList.remove("modal-error");
  arrivalDate.focus();
});

form.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value || !adults.value || !children.value) {
    evt.preventDefault();
    modalSearch.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  } 
});
