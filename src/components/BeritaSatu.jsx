import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledBeritaSatu = styled.div`
  .berita-satu {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1rem;
  }

  .berita__img {
    width: 16rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
  }
`;

function BeritaSatu({berita}) {
  const formatWaktu = (isoString) => {
    const date = new Date(isoString);
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
  };

  return (
    <StyledBeritaSatu>
      <div className="container">
        <div className="berita-satu">
          <img src={`${berita.gambar}`} alt="" className="berita__img" />
          <Link className="berita__title" to={`/berita/${berita.id}`}>
            {berita.judul}
          </Link>
          <h6 className="berita__time">{formatWaktu(berita.waktu)}</h6>
        </div>
      </div>
    </StyledBeritaSatu>
  );
}

export default BeritaSatu;
