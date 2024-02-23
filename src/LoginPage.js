import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'

function LoginPage() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.userName = username
        navigate('/questionnaire');
    };

    const isUsernameEmpty = username.trim() === '';

    return (
        <div className={styles['login-container']}>
            <h2>Авторизація</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Ім'я" className={styles.input}/>
            <button onClick={handleLogin} className={styles.button} disabled={isUsernameEmpty}>Увійти</button>
        </div>
    );
}

export default LoginPage;