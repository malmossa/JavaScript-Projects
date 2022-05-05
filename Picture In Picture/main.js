const videoPlayer = document.querySelector(".video");
const button = document.querySelector(".btn");

async function displayVideo() {
  try {
    const media = await navigator.mediaDevices.getDisplayMedia();
    videoPlayer.srcObject = media;
    videoPlayer.onloadedmetadata = () => {
      videoPlayer.play();
    };
  } catch (error) {
    console.log("This is an error: ", error);
  }
}

button.addEventListener("click", async () => {
  // Disable Button
  button.disabled = true;
  // Start picture in picture
  await videoPlayer.requestPictureInPicture();
  // Reset Button
  button.disabled = false;
});
// On load
displayVideo();
