function submitFeedback(event) {
    event.preventDefault();
    const location = document.getElementById("feedbackLocation").value;
    const message = document.getElementById("feedbackMessage").value;
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
  
    if (location && message) {
      feedbacks.push({
        location,
        message,
        date: new Date().toLocaleString()
      });
  
      localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
      document.getElementById("feedbackLocation").value = "";
      document.getElementById("feedbackMessage").value = "";
      loadFeedback();
    }
  }
  
  function loadFeedback() {
    const feedbacks = JSON.parse(localStorage.getItem("feedbacks") || "[]");
    const list = document.getElementById("feedbackList");
    list.innerHTML = "";
  
    feedbacks.forEach(f => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${f.location}</strong><br>${f.message}<br><small>${f.date}</small>`;
      list.appendChild(li);
    });
  }
  
  window.onload = loadFeedback;
  