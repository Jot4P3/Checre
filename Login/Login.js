const username = document.getElementById("username");
const password = document.getElementById("password");

    function validateForm(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        checkInputUsername();
        checkInputPassword();

        const formItems = document.querySelectorAll(".form-content");

        const isValid = [...formItems].every((item) => {
            return !item.classList.contains("error");
        });

        if (isValid) {
            alert("Login Feito Com Sucesso!");
        }
    }

    function errorInput(input, message) {
        const formItem = input.parentElement;
        const textMessage = formItem.querySelector(".error-message");

        textMessage.innerText = message;
        formItem.classList.add("error");
    }

    function clearError(inputId) {
        const input = document.getElementById(inputId);
        const formItem = input.parentElement;
        formItem.classList.remove("error");
        const textMessage = formItem.querySelector(".error-message");
        textMessage.innerText = "";
    }

    function checkInputUsername() {
        const usernameValue = username.value.trim();

        if (usernameValue === "") {
            errorInput(username, "Preencha com o nome de usuário.");
        } else {
            clearError("username");
        }
    }

    function checkInputPassword() {
        const passwordValue = password.value.trim();

        if (passwordValue === "") {
            errorInput(password, "A senha é obrigatória.");
        } else if (passwordValue.length < 8) {
            errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
        } else {
            clearError("password");
        }
    }

    function forgotPassword() {
        // Redirecionar para a página de redefinição de senha
        window.location.href = "file:///C:/Users/Kazz%20O%20Mago/Desktop/Checre/Confirmar%20E-mail/Confirmar%20E-mail.html";
    }