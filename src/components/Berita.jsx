import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledBerita = styled.div`
  .container {
    background-color: black;
    color: white;
    padding-top: 5%;
  }

  .berita {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 1.5rem;
  }

  .berita__judul {
    color: white;
    font-size: 1.3rem;
    text-align: center;
  }

  .berita__info {
    font-size: 0.6rem;
    font-weight: 200;
  }

  .berita__img {
    height: 10rem;
    border-radius: 10px;
  }

  .berita__title {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .berita__time {
    font-weight: 400;
  }

  .card {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 2rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
  }
`;

function Berita() {
  return (
    <StyledBerita>
      <div className="container" id="berita">
        <h3 className="berita__judul">Berita Terkini</h3>
        <p className="berita__info">*klik judul berita untuk melihat detail</p>
        <div className="berita">
          <div className="card">
            <img src="../src/img/1.jpg" alt="" className="berita__img" />
            <Link className="berita__title">Judul</Link>
            <h6 className="berita__time">Waktu</h6>
          </div>
          <div className="card">
            <img src="../src/img/1.jpg" alt="" className="berita__img" />
            <Link className="berita__title">Judul</Link>
            <h6 className="berita__time">Waktu</h6>
          </div>
          <div className="card">
            <img src="../src/img/1.jpg" alt="" className="berita__img" />
            <Link className="berita__title">Judul</Link>
            <h6 className="berita__time">Waktu</h6>
          </div>
          <div className="card">
            <img src="../src/img/1.jpg" alt="" className="berita__img" />
            <Link className="berita__title">Judul</Link>
            <h6 className="berita__time">Waktu</h6>
          </div>
          <div className="card">
            <img src="../src/img/1.jpg" alt="" className="berita__img" />
            <Link className="berita__title">Judul</Link>
            <h6 className="berita__time">Waktu</h6>
          </div>
          {/* {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))} */}
        </div>
      </div>
    </StyledBerita>
  );
}

export default Berita;
