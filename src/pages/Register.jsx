import styled from 'styled-components';

const StyledRegister = styled.div``;

function Register() {
  <StyledRegister>
    <div className="container">
      <form action="" className="register">
        <div className="form__part">
          <label htmlFor="text">Username</label>
          <input type="text" name="username" />
        </div>
        <div className="form__part">
          <label htmlFor="email">email</label>
          <input type="email" name="email" />
        </div>
        <div className="form__part">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
      </form>
    </div>
  </StyledRegister>;
}

export default Register;
