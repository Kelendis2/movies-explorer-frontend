const isNameValid = formValue.name.length >= 2 && formValue.name.length <= 20;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(formValue.email);
  const isPasswordValid = formValue.password.length >= 8;

  // Проверка, что все поля обязательны и не пусты
  const isNameNotEmpty = formValue.name.trim() !== "";
  const isEmailNotEmpty = formValue.email.trim() !== "";
  const isPasswordNotEmpty = formValue.password.trim() !== "";

  export {isNameValid, isEmailValid, isPasswordValid, isNameNotEmpty, isEmailNotEmpty, isPasswordNotEmpty   }
