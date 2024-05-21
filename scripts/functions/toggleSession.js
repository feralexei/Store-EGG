export const userIcon = document.getElementById("user-icon");
export const profileIcon = document.getElementById("profile-icon");

export function toggleSession() {
    const isOnline = sessionStorage.getItem("isOnline") === 'true';
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