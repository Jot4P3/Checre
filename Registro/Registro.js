const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const serial = document.getElementById("serial");
const area = document.getElementById("area");
const phone = document.getElementById("phone");
const smsCode = document.getElementById("smsCode");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  checkForm();
});

email.addEventListener("blur", () => {
  checkInputEmail();
});

username.addEventListener("blur", () => {
  checkInputUsername();
});

area.addEventListener("change", () => {
  checkInputSerial();
  checkInputArea();
});

password.addEventListener("blur", () => {
  checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
  checkInputPasswordConfirmation();
});

phone.addEventListener("blur", () => {
  checkInputPhone();
});

smsCode.addEventListener("blur", () => {
  checkInputSMScode();
});

function checkInputUsername() {
  const usernameValue = username.value.trim();

  if (usernameValue === "") {
    errorInput(username, "Preencha com o nome de um usuário.");
  } else {
    clearError(username);
  }
}

function checkInputEmail() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    errorInput(email, "O E-mail é obrigatório.");
  } else if (!isValidEmail(emailValue)) {
    errorInput(email, "E-mail inválido.");
  } else {
    clearError(email);
  }
}

function checkInputPassword() {
  const passwordValue = password.value.trim();

  if (passwordValue === "") {
    errorInput(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    clearError(password);
  }
}

function checkInputPhone() {
  const phoneValue = phone.value.trim();

  if (phoneValue === "") {
    errorInput(phone, "O número do celular é obrigatório.");
  } else if (!isValidPhoneNumber(phoneValue)) {
    errorInput(phone, "Número do celular é inválido.");
  } else {
    clearError(phone);
  }
}

function isValidPhoneNumber(phone) {
  const phonePattern = /^\(\d{2}\)\d{5}-\d{4}$/;
  return phonePattern.test(phone);
}

function checkInputsmsCode() {
  const smsCodeValue = smsCode.value.trim();

  if (smsCodeValue === "") {
    errorInput(smsCode, "O código SMS é obrigatório.");
  } else {
    clearError(smsCode);
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value.trim();
  const confirmationPasswordValue = passwordConfirmation.value.trim();

  if (confirmationPasswordValue === "") {
    errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (confirmationPasswordValue !== passwordValue) {
    errorInput(passwordConfirmation, "As senhas não são iguais.");
  } else {
    clearError(passwordConfirmation);
  }
}

function validarNumeroCelular(input) {
  input.value = input.value.replace(/[^0-9()+\-]/g, '');
  clearError(input);
}

function formatarNumeroTelefone(input) {
  let numero = input.value.replace(/\D/g, '');

  if (numero.length >= 2) {
    const ddd = numero.substring(0, 2);
    const parteNumerica = numero.substring(2);
    numero = `(${ddd})${parteNumerica.substring(0, 5)}-${parteNumerica.substring(5)}`;
  }

  input.value = numero;
}

function enviarCodigoSMS() {
  document.getElementById("smsCodeContainer").style.display = "block";
}

function validarNumeroSMS(input) {
  input.value = input.value.replace(/\D/g, '');
}

function checkInputSMScode() {
  const smsCodeValue = smsCode.value.trim();

  if (smsCodeValue === "") {
    errorInput(smsCode, "O código SMS é obrigatório.");
  } else {
    clearError(smsCode);
  }
}

function checkInputSerial() {
  const serialValue = serial.value.trim();
  const areaValue = area.value.trim();

  if (areaValue !== "PaisAlunos" && areaValue !== "" && serialValue === "") {
    errorInput(serial, "O campo serial é obrigatório para a opção selecionada.");
  } else if (areaValue !== "PaisAlunos" && serialValue.length !== 11) {
    errorInput(serial, "O serial precisa ter 11 dígitos.");
  } else {
    clearError(serial);
  }
}

function checkForm() {
  checkInputUsername();
  checkInputEmail();
  checkInputPassword();
  checkInputPasswordConfirmation();
  checkInputSerial();
  checkInputArea();
  checkInputPhone();
  checkInputsmsCode();

  const formItems = form.querySelectorAll(".form-content");

  const isValid = [...formItems].every((item) => {
    return item.className === "form-content";
  });

  if (isValid) {
    alert("CADASTRADO COM SUCESSO!");
  }
}

function errorInput(input, message) {
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a");

  textMessage.innerText = message;
  formItem.className = "form-content error";
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

function mostrarCampoTexto() {
  const select = document.getElementById("area");
  const selectValue = select.value;
  const serialInputField = document.getElementById("serial-input");

  if (
    selectValue === "Diretor" ||
    selectValue === "Coordenador" ||
    selectValue === "Nutricionista" ||
    selectValue === "Professor" ||
    selectValue === "Secretário"
  ) {
    serialInputField.style.display = "block";
    clearError(area);
  } else {
    serialInputField.style.display = "none";
  }
}

function checkInputArea() {
  const areaValue = area.value.trim();

  if (areaValue === "") {
    errorInput(area, "A escolha de uma opção é obrigatória!");
  } else {
    const formItem = area.parentElement;
    formItem.className = "form-content";
  }
}