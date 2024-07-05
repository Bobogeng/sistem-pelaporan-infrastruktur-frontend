import {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import GambarValidation from '../components/Validation/GambarValidation';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

const StyledTambah = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto; /* Enable scrolling on overflow */

  .container {
    background-color: black;
    color: white;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    box-sizing: border-box;
    overflow-y: auto; /* Enable vertical scrolling */
  }

  .tambah {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: white;
    padding: 2rem 4rem;
    border: 1px solid white;
    border-radius: 10px;
    margin: 1rem 0;
  }

  .tambah__back {
    margin-right: auto;
    margin-bottom: 1rem;
  }

  .tambah__link__back {
    color: black;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .tambah__back__icon {
    margin-right: 0.3rem;
  }

  .h1 {
    font-size: 5rem;
    text-align: center;
    margin: 2rem;
  }

  .form__part {
    margin: 0.6rem 0;
  }

  label {
    font-size: 1rem;
    color: black;
  }

  .judul {
    padding: 0.4rem;
    width: 25rem;
    border: 2px solid black;
    border-radius: 20px;
  }

  textarea {
    padding: 0.4rem;
    width: 25rem;
    border: 2px solid black;
    border-radius: 20px;
  }

  .gambar__btn {
    background-color: black;
    border: 2px solid black;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .gambar__btn:hover {
    background-color: white;
    color: black;
  }

  .gambar {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .gambar__p {
    font-size: 0.7rem;
    margin: 0.3rem 0.3rem;
  }

  .gambar-preview {
    margin-top: 1rem;
    max-width: 100%;
    max-height: 200px;
    border: 2px solid black;
    border-radius: 10px;
  }

  .button {
    margin-top: 2rem;
    padding: 0.4rem;
    width: 6rem;
    border: 2px solid black;
    border-radius: 15px;
  }

  .button:hover {
    color: white;
    background-color: black;
  }

  .tambah__error {
    color: red;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 0.7rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
    .h1 {
      margin-top: 10rem;
    }
  }
`;

function Tambah() {
  const [gambarPreview, setGambarPreview] = useState(null);
  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [gambar, setGambar] = useState('');

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleGambarChange = (event) => {
    const file = event.target.files[0];
    setGambar(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGambarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setGambarPreview(null);
    }
  };

  const handleSubmit = (event) => {
    const values = {
      judul: judul,
      deskripsi: deskripsi,
      gambar: gambar,
    };

    const formData = new FormData();
    formData.append('gambar', gambar);
    formData.append('judul', judul);
    formData.append('deskripsi', deskripsi);

    event.preventDefault();
    const validationErrors = GambarValidation(values);
    setErrors(validationErrors);
    console.log(values, 'klik registers');
    setIsSubmitted(true);
    if (validationErrors.deskripsi === '' && validationErrors.gambar === '' && validationErrors.judul === '') {
      axios
        .post('http://localhost:8080/tambahberita', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        })
        .then((res) => {
          console.log(res, 'testing');
          alert('Berita Berhasil Diunggah'); // Menampilkan alert
          navigate('/'); // Arahkan ke halaman utama atau ke halaman berita
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledTambah>
        <div className="container">
          <h1 className="h1">Tambah Berita</h1>
          <form action="" className="tambah" id="tambah" onSubmit={handleSubmit}>
            <div className="tambah__back">
              <Link to="/" className="tambah__link__back">
                <FontAwesomeIcon icon={faArrowLeft} className="tambah__back__icon" />
                Kembali
              </Link>
            </div>
            <div className="form__part">
              <label htmlFor="judul" className="tambah__label">
                Judul Berita
              </label>
              <br />
              <input type="text" name="judul" className="judul" placeholder="Judul Berita" onChange={(e) => setJudul(e.target.value)} />
              <br />
              {isSubmitted && errors.judul && <span className="tambah__error">{errors.judul}</span>}
            </div>
            <div className="form__part">
              <label htmlFor="deskripsi">Deskripsi Berita</label>
              <br />
              <textarea name="deskripsi" id="deskripsi" placeholder="Deskripsikan Berita Disini" onChange={(e) => setDeskripsi(e.target.value)}></textarea>
              <br />
              {isSubmitted && errors.deskripsi && <span className="tambah__error">{errors.deskripsi}</span>}
            </div>
            <div className="form__part">
              <label htmlFor="gambar">Gambar Berita</label>
              <br />
              <div className="gambar__btn">
                <p className="gambar__p">Masukan Gambar</p>
                <input type="file" name="gambar" className="gambar" onChange={handleGambarChange} />
              </div>
              {gambarPreview && <img src={gambarPreview} alt="Gambar Preview" className="gambar-preview" />}
              <br />
              {isSubmitted && errors.gambar && <span className="tambah__error">{errors.gambar}</span>}
            </div>
            <button type="submit" className="button">
              Tambah
            </button>
          </form>
        </div>
      </StyledTambah>
    </>
  );
}

export default Tambah;
