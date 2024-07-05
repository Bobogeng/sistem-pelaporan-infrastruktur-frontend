import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Rekomendasi from './Rekomendasi';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const StyledDetail = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }

  .detail__atas {
    display: flex;
    justify-content: center;
    margin: 2rem 0 10rem 5rem;
    
  }

  .detail__kiri,
  .detail__kanan {
    margin: 2rem;
  }

  .detail__img {
    width: 25rem;
  }

  .detail__waktu {
    font-size: 0.8rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .detail__back {
    margin-right: auto;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-top: 7rem;
  }

  .detail__link__back {
    font-size: 0.9rem;
    text-decoration: none;
    color: black;
  }

  .detail__back__icon {
    margin-right: 0.3rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
    .detail__atas {
      flex-direction: column;
      align-items: center;
      margin-left: 0;
      text-align: center;
    }
  }
`;

const Detail = () => {
  const {id} = useParams();
  const [berita, setBerita] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/data/${id}`)
      .then((response) => {
        setBerita(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [id]);

  if (!berita) {
    return <p>Loading...</p>;
  }

  return (
    <StyledDetail>
      <div className="container">
        <div className="detail__back">
          <Link to="/" className="detail__link__back">
            <FontAwesomeIcon icon={faArrowLeft} className="detail__back__icon" />
            Kembali
          </Link>
        </div>
        <div className="detail__atas">
          <div className="detail__kiri">
            <img src={`${berita.gambar}`} alt={`${berita.judul}`} className="detail__img" />
          </div>
          <div className="detail__kanan">
            <h2>{berita.judul}</h2>
            <p className="detail__waktu">{berita.waktu}</p>
            <p className="detail__deskripsi">{berita.deskripsi}</p>
          </div>
        </div>
        <div className="detail__bawah">
          <Rekomendasi />
        </div>
      </div>
    </StyledDetail>
  );
};

export default Detail;
