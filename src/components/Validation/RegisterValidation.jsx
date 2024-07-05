function RegisterValidation(values) {
  let error = {};
  const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const username_pattern = /^[a-zA-Z0-9]+$/;

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
    error.password = `Password setidaknya mengandung satu huruf kecil, satu huruf besar, satu angka, dan satu karakter spesial!`;
  } else {
    error.password = '';
  }

  if (values.username === '') {
    error.username = 'Bagian username harus diisi!';
  } else if (!username_pattern.test(values.username)) {
    error.username = 'Username hanya boleh menggunakan huruf dan angka!';
  } else {
    error.username = '';
  }

  return error;
}

export default RegisterValidation;
