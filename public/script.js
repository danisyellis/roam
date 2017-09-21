//get elements
const editProfileButton = document.querySelector(".edit-profile-button");
const editProfileModal = document.querySelector(".edit-profile-modal");

//add event listeners
editProfileButton.addEventListener('click', () => {
  editProfileModal.style.display = "block";
});
