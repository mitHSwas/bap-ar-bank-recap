document.getElementById("btn-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    if (email === "sontan@gmail.com" && password === "kulangarSontan") {
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    } else {
        alert("Tui password vuila gesos. Kulangar sontan kotakar......")
    }
})