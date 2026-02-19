
function addProperty(event) {
    event.preventDefault();
    const location = document.getElementById("propLocation").value;
    const status = document.getElementById("propStatus").value;
    const properties = JSON.parse(localStorage.getItem("properties") || "[]");
  
    if (location) {
      properties.push({ location, status });
      localStorage.setItem("properties", JSON.stringify(properties));
  
      alert("Property added successfully!");
      window.location.href = "booking.html"; // Redirect here
    }
  }
  
  function loadProperties() {
    const properties = JSON.parse(localStorage.getItem("properties") || "[]");
    const list = document.getElementById("propertyList");
    list.innerHTML = "";
  
    properties.forEach((p, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${p.location}</strong> - ${p.status}
        <button onclick="deleteProperty(${index})">Delete</button>
      `;
      list.appendChild(li);
    });
  }
  
  function deleteProperty(index) {
    const properties = JSON.parse(localStorage.getItem("properties") || "[]");
    properties.splice(index, 1);
    localStorage.setItem("properties", JSON.stringify(properties));
    loadProperties();
  }
  
  window.onload = loadProperties;
  
