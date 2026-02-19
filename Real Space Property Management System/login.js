function login(event) {
  event.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const storedPassword = localStorage.getItem(username);

  const messageBox = document.getElementById("loginMessage");

  if (storedPassword === password) {
    messageBox.style.color = "green";
    messageBox.innerText = "Login successful!";
    setTimeout(() => {
      window.location.href = "property.html";
    }, 1000); // Redirect after 1 sec
  } else {
    messageBox.style.color = "red";
    messageBox.innerText = "Invalid username or password!";
  }
}
