import React from "react";
import styles from './Level.module.css'; // Reusing the CSS module from ExpertLevel

const NoviceLevel = ({ handleChange, formData }) => {
    const handleClearForm = () => {
        Object.keys(formData.novice).forEach(question => handleChange('novice', question, null));
    };

    return (
        <div className={styles.expertContainer}> {/* Reuse the container style */}
            <h3 className={styles.sectionTitle}>Новачок (Novice)</h3>
            <p className={styles.question}>Переживаєте за успіх в роботі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('novice', 'q1', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="novice_1" checked={formData.novice.q1 === 5}/> Сильно
                </label>
                <label>
                    <input type="radio" value={3} name="novice_1" checked={formData.novice.q1 === 3}/> Не дуже
                </label>
                <label>
                    <input type="radio" value={2} name="novice_1" checked={formData.novice.q1 === 2}/> Спокійний
                </label>
            </div>

            <p className={styles.question}>Прагнете досягти швидко результату?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('novice', 'q2', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={2} name="novice_2" checked={formData.novice.q2 === 2}/> Поступово
                </label>
                <label>
                    <input type="radio" value={3} name="novice_2" checked={formData.novice.q2 === 3}/> Якомога швидше
                </label>
                <label>
                    <input type="radio" value={5} name="novice_2" checked={formData.novice.q2 === 5}/> Дуже
                </label>
            </div>

            <p className={styles.question}>Легко попадаєте в тупик при проблемах в роботі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('novice', 'q3', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="novice_3" checked={formData.novice.q3 === 5}/> Неодмінно
                </label>
                <label>
                    <input type="radio" value={3} name="novice_3" checked={formData.novice.q3 === 3}/> Поступово
                </label>
                <label>
                    <input type="radio" value={2} name="novice_3" checked={formData.novice.q3 === 2}/> Зрідка
                </label>
            </div>

            <p className={styles.question}>Чи потрібен чіткий алгоритм для вирішення задач?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('novice', 'q4', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="novice_4" checked={formData.novice.q4 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="novice_4" checked={formData.novice.q4 === 3}/> В окремих випадках
                </label>
                <label>
                    <input type="radio" value={2} name="novice_4" checked={formData.novice.q4 === 2}/> Не потрібен
                </label>
            </div>

            <button onClick={handleClearForm} className={styles.clearButton}>Очистити форму</button>
        </div>
    );
}

export default NoviceLevel;
