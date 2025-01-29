import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      {/* Left Section */}
      <div className="main"></div>

      {/* Right Section - Authentication Card */}
      <div className="authpage">
        <div className="auth-card">
          <h2>Login</h2>
          <form>
            <input type="text" placeholder="Enter your name" className="input-field" />
            <input type="email" placeholder="Enter your Email" className="input-field" />
            <input type="password" placeholder="Enter your Password" className="input-field" />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
