import { userIcon, profileIcon, toggleSession } from "./functions/toggleSession.js";
import { logoutUser } from "./auth.js";

if(sessionStorage.getItem('isOnline') === null) {
    sessionStorage.setItem('isOnline', 'false');
}
userIcon.addEventListener('click', function() {
    window.location.href = "login.html";
    // localStorage.setItem('isOnline', 'true');
    // toggleSession();
});
profileIcon.addEventListener('click', function() {
    logoutUser();
    toggleSession();
});
document.addEventListener('DOMContentLoaded', toggleSession);