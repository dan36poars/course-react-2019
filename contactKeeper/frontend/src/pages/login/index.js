import React, { useState, useContext } from 'react';
import AlertContext from '../../context/alert/AlertContext';

const Login = () => {

  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { email, password } = user;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill all fields', 'danger');
    } else {
      console.log('Login submit');
    }
  }

  return (
    <div className="form-container" >
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={handleSubmit}>        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={handleInput} />
        </div>       
        <input type="submit" value="Login" className="btn btn-primary btn-block"/>
      </form>
    </div>
  );
};

export default Login;