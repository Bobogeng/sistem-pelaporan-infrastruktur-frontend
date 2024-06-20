import styled from 'styled-components';

const StyledLogin = styled.div``;

function Login() {
  return (
    <StyledLogin>
      <div className="container">
        <form action="" className="login" id="login">
          <div className="form__part">
            <label htmlFor="email">email</label>
            <input type="email" />
          </div>
          <div className="form__part">
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </StyledLogin>
  );
}

export default Login;
