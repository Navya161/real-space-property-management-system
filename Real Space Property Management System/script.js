function register() {
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  if (username && password) {
    localStorage.setItem(username, password);
    document.getElementById("registerMessage").innerText = "Registered successfully!";
  } else {
    document.getElementById("registerMessage").innerText = "Please enter username and password.";
  }
}
