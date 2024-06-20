import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

const StyledNavbar = styled.nav`
  .container {
    background-color: black;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .navbar {
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  .navbar__judul {
    text-decoration: none;
    color: white;
  }

  h1 {
    margin: 1rem;
    font-size: 1.8rem;
  }

  .navbar__list {
    display: flex;
    list-style: none;
    margin-right: 1rem;
  }

  .navbar__link {
    text-decoration: none;
    color: white;
    margin: 1rem;
    transition: 0.5s ease-in-out;
  }

  .navbar__link:hover {
    background-color: white;
    color: black;
    border-radius: 3px;
    padding: 0.2rem;
    transition: 0.5s ease-in-out;
  }
`;

function Navbar() {
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.target.tagName === 'A' && event.target.hash) {
        const targetId = event.target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          event.preventDefault();
          const offset = -70; // Sesuaikan offset sesuai kebutuhan
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset + offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleScroll);

    return () => {
      document.removeEventListener('click', handleScroll);
    };
  }, []);

  const handleTitleClick = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <StyledNavbar>
      <div className="container" id="navbar">
        <nav className="navbar">
          <Link to="/" className="navbar__judul" onClick={handleTitleClick}>
            <h1>Pelaporan Infrastruktur</h1>
          </Link>
          <div>
            <ul className="navbar__list">
              <li className="navbar__item">
                <Link to="/#about" className="navbar__link">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/#berita" className="navbar__link">
                  Berita
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/#upload" className="navbar__link">
                  Upload Berita
                </Link>
              </li>
              <li className="navbar__item">
                <Link to="/login" className="navbar__link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
