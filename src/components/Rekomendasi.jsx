import axios from 'axios';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import BeritaSatu from './BeritaSatu';

const StyledRekomendasi = styled.div`
  .container {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .rekomendasi__judul {
    text-align: center;
  }

  .rekomendasi__berita {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2rem;
    border-radius: 10px;
  }

  .berita__img {
    height: 10rem;
    border-radius: 10px;
  }

  .berita__title {
    color: black;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
  }

  .berita__title:hover {
    text-decoration: underline;
  }

  /* Small Screen */
  @media (max-width: 768px) {
    .rekomendasi__berita {
        display: flex;
        flex-wrap: wrap;
    }
  }
`;

function Rekomendasi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <StyledRekomendasi>
      <div className="container">
        <h1 className="rekomendasi__judul">Rekomendasi Berita</h1>
        <div className="rekomendasi__berita">
          {data.map((berita) => (
            <BeritaSatu key={berita.id} berita={berita} />
          ))}
        </div>
      </div>
    </StyledRekomendasi>
  );
}

export default Rekomendasi;
