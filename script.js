// Form validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert(Thank you, ${name}!);
});

// Toggle message interaction
document.getElementById("toggleMessage").addEventListener("click", function () {
  const msg = document.getElementById("message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});
