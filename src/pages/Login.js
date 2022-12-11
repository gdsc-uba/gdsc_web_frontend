import newsvg from "../assets/svgs/lines 5.svg"

const Login = () => {
  return (
    <div className="row py-5" id="lmain">
      <div id="limg" className="container col-md-6">
        <img className="limg" src={require('../assets/images/Tech Life Remote Life.png')} />
        <img className="limg" src={newsvg} alt="Your SVG" />
      </div>

      <div id="lform" className="container col-md-6" >

        <form className="login-form-box">
          <div className="mb-5">
            <h1 style={{ color: "rgb(208, 243, 243)" }}>Login</h1>
            <h2> <span>Welcome back!</span></h2>
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>

  );
}

export default Login;