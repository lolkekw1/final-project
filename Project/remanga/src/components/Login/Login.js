import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setLoggedInUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mockUsername = 'username';
    const mockPassword = 'password';
    const mockAvatar = 'avatars/avatar5.jpg';

    if (username === mockUsername && password === mockPassword) {
      setLoggedInUser({ username: mockUsername, avatar: mockAvatar });
      alert('Вход выполнен успешно!');
      navigate('/profile');
    } else {
      alert('Неверное имя пользователя или пароль.');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Вход</h2>
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
          <label className="form-label">Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
        </div>
        <div>
          <button type="submit" className="submit-button">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
