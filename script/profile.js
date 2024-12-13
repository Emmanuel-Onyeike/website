// When the page is loaded, check if there's a saved profile image in localStorage
window.onload = function () {
    const profileImage = document.getElementById("profile-image");
  
    // Check if a saved image exists in localStorage
    const storedImage = localStorage.getItem("profileImage");
    if (storedImage) {
      profileImage.src = storedImage;  // Set the saved image as the profile image
    }
  
    // Get the file input element
    const profileUpload = document.getElementById("profile-upload");
  
    // Add an event listener to handle the file selection
    profileUpload.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
  
        // When the file is read, update the profile image and save it to localStorage
        reader.onload = function (e) {
          const imageUrl = e.target.result;
          profileImage.src = imageUrl;  // Update the profile image
          localStorage.setItem("profileImage", imageUrl);  // Save the image URL in localStorage
        };
  
        // Read the selected file as a data URL (base64 string)
        reader.readAsDataURL(file);
      }
    });
  };
  document.getElementById('follow-btn').addEventListener('click', function() {
    const button = this;
    const icon = document.getElementById('follow-icon');
  
    // Toggle between Follow and Unfollow states
    if (button.classList.contains('unfollow')) {
      // Change to follow state
      button.classList.remove('unfollow');
      button.innerHTML = '<i class="fas fa-plus"></i> Follow';  // Change text and icon
    } else {
      // Change to unfollow state
      button.classList.add('unfollow');
      button.innerHTML = '<i class="fas fa-minus"></i> Unfollow';  // Change text and icon
    }
  });
  