import React from 'react'
import "./login.css"
import { Link, useHistory } from 'react-router-dom';
function Login() {
  const history = useHistory();
  function attemptLogin(e) {
    e.preventDefault();

    console.log('LOgin Attempt');

    let authFails = false;
    if (authFails) {
      console.log('back to login');
      // return <Redirect to='/login'  />
      history.push('/login');
    }
    // return <Redirect to='/signup'  />
    history.push('/');
  }

  return (
    <div className='main'>
      <div className='sub-main'>
        <div className='image'>

          <div>
            <h1 id='login'>LOG IN</h1>

            <form>
              <div class='form-group'>
                {/* <label for="exampleInputEmail1">Email</label> */}
                <input
                  type='email'
                  class='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                  className='textfield'
                />
              </div>
              <div class='form-group'>
                {/* <label for="exampleInputPassword1">Password</label> */}
                <input
                  type='password'
                  class='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                  className='textfield'
                />
              </div>

              <div className='row'>
                <div className='col-md-6'>
                  <div class='form-check'>
                    <label
                      class='form-check-label'
                      for='exampleCheck1'
                      id='remember'login
                    >
                      {' '}
                      <input
                        type='checkbox'
                        class='form-check-input'
                        id='exampleCheck1'
                      />{' '}
                      Remember
                    </label>
                  </div>
                </div>

                <div className='col-md-6'>
                  <h4 id='forgotpass'>
                    {' '}
                    <Link to='/signup'>Forgot your password?</Link>{' '}
                  </h4>
                </div>
              </div>
              <button
                type='submit'
                class='btn btn-light'
                className='login-button'
                onClick={attemptLogin}
              >
                Log In
              </button>
            </form>
            <div>
              <h4 id='newmbr'>
                {' '}
                New member?{' '}
                <Link to='/signup' id='create-acc'>
                  {' '}
                  Create Account
                </Link>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;