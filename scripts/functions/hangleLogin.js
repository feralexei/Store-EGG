import { loginUser, isUserOnline} from "../auth.js";

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const result = loginUser(email, password);
    if (result.success) {
      alert(result.message);
      isUserOnline;
      window.location.href = "index.html";
    } else {
      alert(result.message);
    }
  }
window.handleLogin = handleLogin;
