// Select the element, that contains the profile image.
var myElement = document.querySelector(".profile-image-square");

// If the image size wasn't changed, load a higher resolution profile image from XING assets.
if (myElement.width != "256") {
  var srcImage = myElement.src;
  srcImage = srcImage.replace("96x96", "256x256");
  myElement.src = srcImage;
  myElement.width = "256";
  myElement.height = "256";
}

// Switch zoom on or off in the simplest of all ways.
if (myElement.style.width === "15rem") {
  myElement.style.width = "6rem";
  myElement.style.height = "6rem";
  myElement.style.position = "relative";
  myElement.style.zIndex = "1";  
}
else {
  myElement.style.width = "15rem";
  myElement.style.height = "15rem";
  myElement.style.position = "relative";
  myElement.style.zIndex = "1";
}

void(0);
