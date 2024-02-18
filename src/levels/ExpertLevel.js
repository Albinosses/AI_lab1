import React from "react";
import styles from './Level.module.css'; // Import the CSS module

const ExpertLevel = ({ handleChange, formData }) => {
    const handleClearForm = () => {
        Object.keys(formData.expert).forEach(question => handleChange('expert', question, null));
    };

    return (
        <div className={styles.expertContainer}>
            <h3 className={styles.sectionTitle}>Експерт (Expert)</h3>
            <p className={styles.question}>Чи обираєте ви нові методи своєї роботи?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('expert', 'q1', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="expert_1" checked={formData.expert.q1 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="expert_1" checked={formData.expert.q1 === 3}/> Вибірково
                </label>
                <label>
                    <input type="radio" value={2} name="expert_1" checked={formData.expert.q1 === 2}/> Вистачає досвіду
                </label>
            </div>

            <p className={styles.question}>Чи допомагає власна інтуїція при вирішенні задач?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('expert', 'q2', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="expert_2" checked={formData.expert.q2 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="expert_2" checked={formData.expert.q2 === 3}/> Частково
                </label>
                <label>
                    <input type="radio" value={2} name="expert_2" checked={formData.expert.q2 === 2}/> При емоційному напруженні
                </label>
            </div>

            <p className={styles.question}>Чи застовуєте рішення задач за аналогією?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('expert', 'q3', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="expert_3" checked={formData.expert.q3 === 5}/> Часто
                </label>
                <label>
                    <input type="radio" value={3} name="expert_3" checked={formData.expert.q3 === 3}/> Зрідка
                </label>
                <label>
                    <input type="radio" value={2} name="expert_3" checked={formData.expert.q3 === 2}/> Тільки власний варіант
                </label>
            </div>

            <button onClick={handleClearForm} className={styles.clearButton}>Очистити форму</button>
        </div>
    );
}

export default ExpertLevel;
