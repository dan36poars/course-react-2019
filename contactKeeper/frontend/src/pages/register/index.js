import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';

const Register = ({ history }) => {

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { clearErrors, register, error, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/');
    }

    if (error === 'User already exists.') {
      setAlert(error, 'dander');
      clearErrors();      
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = user;

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields', 'danger');
    } else if ( password !== password2 ) {
      setAlert('Passwords do not match')
    } else {
      register({
        name,
        email,
        password
      });
    }
  }

  return (
    <div className="form-container" >
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} required onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} required onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} required minLength="6" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Repeat Password</label>
          <input type="password" name="password2" value={password2} required minLength="6" onChange={handleInput} />
        </div>
        <input type="submit" value="Register" className="btn btn-primary btn-block"/>
      </form>
    </div>
  );
};

export default Register;