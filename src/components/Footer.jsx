import styled from 'styled-components';

const StyledFooter = styled.div`
  .container {
    background-color: black;
    color: white;
    text-align: center;
    padding: 1rem;
  }

  a,
  p {
    text-decoration: none;
    color: white;
    font-size: 0.8rem;
    transition: 0.5s ease-in-out;
    margin-top: 0.3rem;
  }

  a:hover {
    background-color: white;
    color: black;
    border-radius: 3px;
    transition: 0.5s ease-in-out;
    padding: 0.2rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="container">
        <footer className="footer">
          <h2>Sistem Pelaporan Infrastruktur</h2>
          <p>
            Created by <a href="https://www.instagram.com/fatih_1344/">Muhammad Al Fatih</a> and <a href="https://www.instagram.com/triaamsss/">Tria Maulida Sari</a>
          </p>
        </footer>
      </div>
    </StyledFooter>
  );
}

export default Footer;
