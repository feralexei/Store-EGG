import { userIcon, profileIcon, toggleSession } from "./functions/toggleSession.js";

if(localStorage.getItem('isOnline') === null) {
    localStorage.setItem('isOnline', 'false');
}
userIcon.addEventListener('click', function() {
    localStorage.setItem('isOnline', 'true');
    toggleSession();
});
profileIcon.addEventListener('click', function() {
    localStorage.setItem('isOnline', 'false');
    toggleSession();
});
document.addEventListener('DOMContentLoaded', toggleSession);