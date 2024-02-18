import React from "react";
import styles from './Level.module.css'; // Reusing the CSS module from ExpertLevel

const CompetentLevel = ({ handleChange, formData }) => {
    const handleClearForm = () => {
        Object.keys(formData.competent).forEach(question => handleChange('competent', question, null));
    };

    return (
        <div className={styles.expertContainer}> {/* Reuse the container style */}
            <h3 className={styles.sectionTitle}>Компетентний (Competent)</h3>
            <p className={styles.question}>Чи можете ви побудувати модель вирішуваної задачі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('competent', 'q1', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="competent_1" checked={formData.competent.q1 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="competent_1" checked={formData.competent.q1 === 3}/> Не повністю
                </label>
                <label>
                    <input type="radio" value={2} name="competent_1" checked={formData.competent.q1 === 2}/> В окремих випадках
                </label>
            </div>

            <p className={styles.question}>Чи вистачає вам ініціативи при вирішенні задач?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('competent', 'q2', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="competent_2" checked={formData.competent.q2 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="competent_2" checked={formData.competent.q2 === 3}/> Зрідка
                </label>
                <label>
                    <input type="radio" value={2} name="competent_2" checked={formData.competent.q2 === 2}/> Потрібне натхнення
                </label>
            </div>

            <p className={styles.question}>Чи можете вирішувати проблеми, з якими ще не стикались?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('competent', 'q3', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={2} name="competent_3" checked={formData.competent.q3 === 2}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="competent_3" checked={formData.competent.q3 === 3}/> В окремих випадках
                </label>
                <label>
                    <input type="radio" value={5} name="competent_3" checked={formData.competent.q3 === 5}/> Ні
                </label>
            </div>

            <button onClick={handleClearForm} className={styles.clearButton}>Очистити форму</button>
        </div>
    );
}

export default CompetentLevel;
