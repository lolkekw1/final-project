import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || password !== confirmPassword) {
      alert('Пожалуйста, заполните все поля и убедитесь, что пароли совпадают.');
      return;
    }

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Регистрация</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Имя пользователя:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Подтвердите пароль:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
