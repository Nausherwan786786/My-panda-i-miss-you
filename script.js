
function checkPassword() {
  var input = document.getElementById("passInput").value;
  if (input === "panda123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("❌ Wrong password! Redirecting...");
    window.location.href = "https://google.com";
  }
}
