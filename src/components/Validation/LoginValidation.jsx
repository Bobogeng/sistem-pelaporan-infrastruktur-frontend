function LoginValidation(values) {
  let error = {};
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (values.email === '') {
    error.email = 'Bagian email harus diisi!';
  } else if (!email_pattern.test(values.email)) {
    error.email = 'Email tidak valid!';
  } else {
    error.email = '';
  }

  if (values.password === '') {
    error.password = 'Bagian password harus diisi!';
  } else if (!password_pattern.test(values.password)) {
    error.password = 'Password tidak valid!';
  } else {
    error.password = '';
  }
  return error;
}

export default LoginValidation;
