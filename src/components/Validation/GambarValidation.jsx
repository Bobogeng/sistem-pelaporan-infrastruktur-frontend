function GambarValidation(values) {
  let error = {};
  if (values.judul === '') {
    error.judul = 'Bagian judul harus diisi!';
  } else {
    error.judul = '';
  }

  if (values.deskripsi === '') {
    error.deskripsi = 'Bagian deskripsi harus diisi!';
  } else {
    error.deskripsi = '';
  }

  if (values.gambar === '') {
    error.gambar = 'Bagian gambar harus diisi!';
  } else {
    error.gambar = '';
  }

  return error;
}

export default GambarValidation;
