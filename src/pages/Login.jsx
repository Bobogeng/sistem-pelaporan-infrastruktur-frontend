import styled, {createGlobalStyle} from 'styled-components';
import {Link, useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import LoginValidation from '../components/Validation/LoginValidation';
import axios from 'axios';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

const StyledLogin = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .container {
    background-color: black;
    color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: white;
    padding: 2rem 4rem;
    border: 1px solid white;
    border-radius: 10px;
  }

  .login__back {
    margin-right: auto;
    margin-bottom: 1rem;
  }

  .login__link__back {
    color: black;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .login__back__icon {
    margin-right: 0.3rem;
  }

  .h1 {
    font-size: 5rem;
    text-align: center;
    margin: 2rem;
    margin-top: -2rem;
  }

  .form__part {
    margin: 0.6rem 0;
  }

  label {
    font-size: 1rem;
    color: black;
  }

  input {
    padding: 0.4rem;
    width: 25rem;
    border: 2px solid black;
    border-radius: 20px;
  }

  .login__p,
  .login__register {
    color: black;
    font-size: 0.7rem;
    margin-left: auto;
  }

  .button {
    margin-top: 1rem;
    padding: 0.4rem;
    width: 6rem;
    border: 2px solid black;
    border-radius: 15px;
  }

  .button:hover {
    color: white;
    background-color: black;
  }

  .login__error {
    color: red;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 0.7rem;
  }

  /* Small Screen */
  @media (min-width: 576px) {
  }
`;

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({...prev, [event.target.name]: [event.target.value]}));
  };

  const handleSubmit = (event) => {
    // console.log('test klik login');
    event.preventDefault();
    const validatoinErrors = LoginValidation(values);
    setErrors(validatoinErrors);
    if (validatoinErrors.email == '' && validatoinErrors.password == '') {
      axios
        .post('http://localhost:8080/login', {
          email: values.email,
          password: values.password,
        })
        .then((res) => {
          localStorage.setItem('authToken', res.data.token);
          localStorage.setItem('username', res.data.username);
          localStorage.setItem('email', res.data.email);
          navigate('/profile');
          navigate(0);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <GlobalStyle />
      <StyledLogin>
        <div className="container">
          <h1 className="h1">Login</h1>
          <form action="" className="login" id="login" onSubmit={handleSubmit}>
            <div className="login__back">
              <Link to="/" className="login__link__back">
                <FontAwesomeIcon icon={faArrowLeft} className="login__back__icon" />
                Kembali
              </Link>
            </div>
            <div className="form__part">
              <label htmlFor="email" className="login__label">
                Email
              </label>
              <br />
              <input type="email" name="email" className="email" onChange={handleInput} />
              <br />
              {errors.email && <span className="login__error">{errors.email}</span>}
            </div>
            <div className="form__part">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" className="password" onChange={handleInput} />
              <br />
              {errors.password && <span className="login__error">{errors.password}</span>}
            </div>
            <p className="login__p">
              Belum Punya Akun?{' '}
              <Link to="/register" className="login__register">
                Daftar disini
              </Link>
            </p>
            <button type="submit" className="button">
              Login
            </button>
          </form>
        </div>
      </StyledLogin>
    </>
  );
}

export default Login;
