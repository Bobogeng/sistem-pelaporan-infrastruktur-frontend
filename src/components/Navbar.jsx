import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {faBars, faUser, faXmark} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const StyledNavbar = styled.nav`
  .container {
    background-color: black;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;
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

  .navbar__profile {
    text-decoration: none;
    color: white;
    margin: 1rem;
    transition: 0.5s ease-in-out;
    border-radius: 100px;
  }

  .navbar__profile:hover {
    background-color: white;
    color: black;
    border-radius: 100px;
    padding: 0.2rem;
    transition: 0.5s ease-in-out;
  }

  .navbar__link:hover {
    background-color: white;
    color: black;
    border-radius: 3px;
    padding: 0.2rem;
    transition: 0.5s ease-in-out;
  }

  .navbar__icon {
    display: none;
    font-size: 2rem;
    cursor: pointer;
  }

  /* Small Screen */
  @media (max-width: 768px) {
    .navbar__list {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 60px;
      right: 0;
      width: 105%;
      height: calc(100% - 60px);
      background-color: black;
      text-align: center;
      transform: translateX(110%);
      transition: transform 0.3s ease-in-out;
      z-index: 998;
    }

    .navbar__list.open {
      transform: translateX(4%);
    }

    .navbar__item {
      margin: 2rem 0;
    }

    .navbar__icon {
      display: block;
    }
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <div className="navbar__icon" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
          </div>
          <ul className={`navbar__list ${isOpen ? 'open' : ''}`}>
            <li className="navbar__item">
              <Link to="/#about" className="navbar__link" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/#berita" className="navbar__link" onClick={toggleMenu}>
                Berita
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/#upload" className="navbar__link" onClick={toggleMenu}>
                Upload Berita
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/profile" className="navbar__profile" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
