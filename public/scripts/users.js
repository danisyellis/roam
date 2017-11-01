//get elements
const editProfileButton = document.querySelector(".edit-profile-button");
const editProfileModal = document.querySelector(".edit-profile-modal");
const closeModalButton = document.querySelector(".close-modal");

//add event listeners
editProfileButton.addEventListener('click', () => {
  editProfileModal.style.display = "block";
});

closeModalButton.addEventListener('click', () => {
  editProfileModal.style.display = "none";
});
editProfileModal.addEventListener('click', () => {
  if(event.target === editProfileModal) {
    editProfileModal.style.display = "none";
  }
});
