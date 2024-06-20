import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const StyledInput = styled.div`
  .container {
    background-color: white;
    padding: 6rem;
  }

  .input {
    display: flex;
    margin: 0 5rem;
  }

  .input__image {
    width: 35%;
    border: 5px solid black;
    border-radius: 8px;
    margin-left: 4rem;
    margin-right: 4rem;
  }

  .description {
    margin: auto 0;
  }

  h3 {
    font-size: 1.3rem;
  }

  .input__button {
    margin-top: 0.5rem;
    color: white;
    background-color: black;
    padding: 0.5rem;
    border-radius: 7px;
    transition: 0.5s ease-in-out;
    font-size: 1.5rem;
  }

  .input__button:hover {
    color: black;
    background-color: white;
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }
`;

function Input() {
  return (
    <StyledInput>
      <div className="container" id="upload">
        <div className="input" id="input">
          <img src="src/img/1.jpg" alt="" className="input__image" />
          <div className="description">
            <h3>Ingin Menambahkan Berita Baru?</h3>
            <Link to="/tambah">
              <button className="input__button">
                Tambahkan Berita <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </StyledInput>
  );
}

export default Input;
