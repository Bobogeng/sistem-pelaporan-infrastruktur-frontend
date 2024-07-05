// src/components/Profile.jsx
import {faArrowLeft, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {useAuth} from '../context/AuthContext';

const StyledProfile = styled.div`
  .container {
    margin-top: 5rem;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .profile__active,
  .profile__inactive {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }

  .profile__title {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .profile__icon {
    font-size: 10rem;
    margin-bottom: 1rem;
  }

  .profile__link {
    color: black;
    font-size: 1rem;
  }

  .profile__back {
    margin-right: auto;
    margin-bottom: 1rem;
    margin-left: 3rem;
    margin-top: 7rem;
  }

  .profile__link__back {
    font-size: 0.9rem;
    text-decoration: none;
    color: black;
  }

  .profile__back__icon {
    margin-right: 0.3rem;
  }

  .profile__logout {
    color: white;
    background-color: black;
    padding: 0.6rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    font-weight: 500;
  }

  .profile__logout:hover{
    color: black;
    background-color: white;
    border: 2px solid black;
    padding: 0.6rem;
    border-radius: 10px;
    cursor: pointer;
  }
`;

function Profile() {
  const {isLoggedIn, logout} = useAuth();

  return (
    <StyledProfile>
      <div className="container">
        <div className="profile__back">
          <Link to="/" className="profile__link__back">
            <FontAwesomeIcon icon={faArrowLeft} className="profile__back__icon" />
            Kembali
          </Link>
        </div>
        <div className="profile">
          <h1 className="profile__title">Profil Kamu</h1>
          {!isLoggedIn() ? (
            <div className="profile__inactive">
              <FontAwesomeIcon icon={faUser} className="profile__icon" />
              <h2 className="nama">Nama</h2>
              <h5 className="email">Email</h5>
              <p className="profile__login">
                Kamu belum melakukan login?{' '}
                <Link to="/login" className="profile__link">
                  login disini
                </Link>
              </p>
            </div>
          ) : (
            <>
              <div className="profile__active">
                <FontAwesomeIcon icon={faUser} className="profile__icon" />
                <h2 className="nama">{localStorage.getItem('username')}</h2> {/* Gantilah dengan nama pengguna yang sebenarnya */}
                <h5 className="email">{localStorage.getItem('email')}</h5> {/* Gantilah dengan email pengguna yang sebenarnya */}
              </div>
              <button className="profile__logout" onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </StyledProfile>
  );
}

export default Profile;
