// Select the element, that contains the profile image.
var profileImageElement = document.querySelector(".profile-image-square");

// Load a higher resolution profile image from XING assets.
var srcImage = profileImageElement.src;
srcImage = srcImage.replace("96x96", "256x256");
profileImageElement.src = srcImage;

// Enlargen profile image on mouseover, and make it smaller on mouseout.
profileImageElement.onmouseover = mouseOverProfileImage;
profileImageElement.onmouseout = mouseOutProfileImage;

function mouseOverProfileImage() {
  profileImageElement.style.width = "15rem";
  profileImageElement.style.height = "15rem";
  profileImageElement.style.position = "relative";
  profileImageElement.style.zIndex = "1";
}

function mouseOutProfileImage() {
  profileImageElement.style.width = "6rem";
  profileImageElement.style.height = "6rem";
  profileImageElement.style.position = "relative";
  profileImageElement.style.zIndex = "1";
}
