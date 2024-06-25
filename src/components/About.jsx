import styled from 'styled-components';

const StyledAbout = styled.div`
  .container {
    background-color: white;
    padding: 6rem;
    margin-top: 4rem;
  }

  .about {
    display: flex;
    margin: 0 5rem;
  }

  .about__image {
    width: 35%;
    border: 5px solid black;
    border-radius: 8px;
    margin-left: 6rem;
    margin-right: 6rem;
  }

  .description {
    text-align: right;
    margin: auto 0;
  }

  h3 {
    font-size: 1.3rem;
  }

  p {
    font-size: 0.7rem;
  }

  /* Small Screen */
  @media (max-width: 768px) {
    .about {
      flex-direction: column-reverse;
    }

    .about__image {
      margin: auto;
      width: 50%;
      margin-bottom: 2rem;
    }

    .description {
      text-align: center;
    }
  }
`;

function About() {
  return (
    <StyledAbout>
      <div className="container" id="about">
        <div className="about">
          <div className="description">
            <h3>Sistem Pelaporan Infrastruktur Kota</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae debitis sunt praesentium, sit vero soluta est voluptatem inventore aut alias error quam. Doloremque iusto iste explicabo! Velit quas natus vitae nobis repellat
              tenetur, officia iure voluptatibus quaerat repudiandae voluptas similique quasi exercitationem quod reprehenderit maiores dolore maxime. Quo, sint omnis.
            </p>
          </div>
          <img src="src/img/1.jpg" alt="" className="about__image" />
        </div>
      </div>
    </StyledAbout>
  );
}

export default About;
