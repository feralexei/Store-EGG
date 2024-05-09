const userIcon = document.getElementById("user-icon");
const profileIcon = document.getElementById("profile-icon");

if(localStorage.getItem('isOnline') === null) {
    localStorage.setItem('isOnline', 'false');
}

function toggleSession() {
    const isOnline = localStorage.getItem("isOnline") === 'true';
    const cartIcon = document.getElementById("cart");
    const favsIcon = document.getElementById("favs");

    if (isOnline) {
        userIcon.classList.add("hidden");
        cartIcon.classList.remove("hidden");
        favsIcon.classList.remove("hidden");
        profileIcon.classList.remove("hidden");
    } else {
        userIcon.classList.remove("hidden");
        cartIcon.classList.add("hidden");
        favsIcon.classList.add("hidden");
        profileIcon.classList.add("hidden");
    }
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