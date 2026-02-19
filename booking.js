
function bookProperty(event) {
    event.preventDefault();
    const location = document.getElementById("bookLocation").value;
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const properties = JSON.parse(localStorage.getItem("properties") || "[]");
  
    const propertyIndex = properties.findIndex(p => p.location === location && p.status === "available");
  
    const message = "Property booked successfully!";
    
    if (propertyIndex !== -1) {
      bookings.push({
        location,
        date: new Date().toLocaleDateString()
      });
  
      properties[propertyIndex].status = "booked";
  
      localStorage.setItem("bookings", JSON.stringify(bookings));
      localStorage.setItem("properties", JSON.stringify(properties));
      document.getElementById("bookLocation").value = "";
  
      alert(message);
      window.location.href = "finance.html"; // ✅ Redirect here
    } else {
      alert("Property not available or already booked.");
    }
  }
  
  function loadBookings() {
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const list = document.getElementById("bookingList");
    list.innerHTML = "";
  
    bookings.forEach(b => {
      const li = document.createElement("li");
      li.textContent = `${b.location} - Booked on ${b.date}`;
      list.appendChild(li);
    });
  }
  
  window.onload = loadBookings;
  
