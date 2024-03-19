document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const messageDiv = document.getElementById("message");

    loginBtn.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        authenticate(username, password);
    });

    signupBtn.addEventListener("click", function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        createUser(username, password);
    });

    function authenticate(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username] && users[username].password === password) {
            showMessage("¡Inicio de sesión exitoso!", "success");
        } else {
            showMessage("Credenciales inválidas. Inténtalo de nuevo o crea un usuario.", "error");
        }
    }

    function createUser(username, password) {
        const users = JSON.parse(localStorage.getItem("users")) || {};
        if (users[username]) {
            showMessage("El usuario ya existe. Por favor, elige otro nombre de usuario.", "error");
        } else {
            users[username] = { password };
            localStorage.setItem("users", JSON.stringify(users));
            showMessage("Usuario creado correctamente. Por favor, inicia sesión.", "success");
        }
    }

    function showMessage(message, type) {
        messageDiv.textContent = message;
        if (type === "success") {
            messageDiv.style.color = "green";
        } else if (type === "error") {
            messageDiv.style.color = "red";
        }
    }
});