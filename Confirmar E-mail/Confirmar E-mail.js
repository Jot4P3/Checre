const form = document.querySelector("form");
const email = document.getElementById("email");
const codigo = document.getElementById("codigo");

codigo.addEventListener("blur", () => {
    checkInputCodigo();
});

document.getElementById('verifyButton').addEventListener('click', function(event) {
    event.preventDefault();
    verificarCodigo();
});

document.getElementById('confirmButton').addEventListener('click', function(event) {
    event.preventDefault();

    document.getElementById('codigo').value = document.getElementById('codigo').value.replace(/\D/g, '');

    if (checkInputEmail()) {
        document.getElementById('codigoInput').style.display = 'block';
    } else {
        alert("Por favor, preencha um e-mail válido antes de prosseguir.");
    }
});

function verificarCodigo() {
    console.log("Verificar código acionado");
    var codigoValue = document.getElementById("codigo").value;
    if (codigoValue === "44") {
        alert("Código verificado com sucesso!");
        window.location.href = "file:///C:/Users/Kazz%20O%20Mago/Desktop/Checre/Esqueci%20a%20Senha/Esqueci%20a%20Senha.html";
    } else {
        errorInput(codigo, "Código incorreto. Tente novamente.");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        errorInput(email, "O E-mail é obrigatório.");
        return false;
    } else if (!isValidEmail(emailValue)) {
        errorInput(email, "E-mail inválido.");
        return false;
    } else {
        clearError(email);
        return true;
    }
}

function checkForm() {
    checkInputCodigo();
}

function checkInputCodigo() {
    const codigoValue = codigo.value.trim();

    if (codigoValue === "") {
        errorInput(codigo, "O código é obrigatório.");
    } else {
        clearError(codigo);
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    formItem.className = "form-content error";
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = message;
}

function clearError(input) {
    const formItem = input.parentElement;
    formItem.className = "form-content";
    const textMessage = formItem.querySelector("a");
    textMessage.innerText = "";
}

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
