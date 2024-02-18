import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './LoginPage.module.css'

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Перевірка користувача та пароля (імітація)
        if (username === 'admin' && password === 'admin') {
            navigate('/questionnaire');
        } else {
            alert('Неправильний логін або пароль');
        }
    };

    return (
        <div className={styles['login-container']}>
            <h2>Авторизація</h2>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Логін" className={styles.input}/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" className={styles.input}/>
            <button onClick={handleLogin} className={styles.button}>Увійти</button>
        </div>
    );
}

export default LoginPage;