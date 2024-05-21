// function validateForm() {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   if (!email || !password) {
//     alert("Por favor, complete todos los campos.");
//     return false;
//   }
//   return true;
// }
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}
// Función para iniciar sesión
function loginUser(email, password) {
  let users = getUsers();
  // Verificar si el usuario existe y la contraseña es correcta
  let user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    sessionStorage.setItem("isOnline", true);
    sessionStorage.setItem("userEmail", email);
    return { success: true, message: "Inicio de sesión exitoso." };
  }
  return {
    success: false,
    message: "Correo electrónico o contraseña incorrectos.",
  };
}
// Función para verificar si el usuario está en línea
export function isUserOnline() {
  return sessionStorage.getItem("isOnline") === "true";
}
// Función para cerrar sesión
export function logoutUser() {
  sessionStorage.removeItem("isOnline");
  sessionStorage.removeItem("userEmail");
}

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