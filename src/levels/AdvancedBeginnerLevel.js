import React from "react";
import styles from './Level.module.css'; // Reusing the CSS module from ExpertLevel

const AdvancedBeginnerLevel = ({ handleChange, formData }) => {
    const handleClearForm = () => {
        Object.keys(formData.advanced_beginner).forEach(question => handleChange('advanced_beginner', question, null));
    };

    return (
        <div className={styles.expertContainer}> {/* Reuse the container style */}
            <h3 className={styles.sectionTitle}>Твердий початківець (Advanced beginner)</h3>
            <p className={styles.question}>Чи використовуєте власний досвід при вирішенні задач?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('advanced_beginner', 'q1', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="advanced_beginner_1" checked={formData.advanced_beginner.q1 === 5}/> Зрідка
                </label>
                <label>
                    <input type="radio" value={3} name="advanced_beginner_1" checked={formData.advanced_beginner.q1 === 3}/> Частково
                </label>
                <label>
                    <input type="radio" value={2} name="advanced_beginner_1" checked={formData.advanced_beginner.q1 === 2}/> Ні
                </label>
            </div>

            <p className={styles.question}>Чи користуєтесь фіксованими правилами для вирішення задач?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('advanced_beginner', 'q2', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={2} name="advanced_beginner_2" checked={formData.advanced_beginner.q2 === 2}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="advanced_beginner_2" checked={formData.advanced_beginner.q2 === 3}/> В окремих випадках
                </label>
                <label>
                    <input type="radio" value={5} name="advanced_beginner_2" checked={formData.advanced_beginner.q2 === 5}/> Не потрібні
                </label>
            </div>

            <p className={styles.question}>Чи відчуваєте ви загальний контекст вирішення задачі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('advanced_beginner', 'q3', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={2} name="advanced_beginner_3" checked={formData.advanced_beginner.q3 === 2}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="advanced_beginner_3" checked={formData.advanced_beginner.q3 === 3}/> Частково
                </label>
                <label>
                    <input type="radio" value={5} name="advanced_beginner_3" checked={formData.advanced_beginner.q3 === 5}/> В окремих випадках
                </label>
            </div>

            <button onClick={handleClearForm} className={styles.clearButton}>Очистити форму</button>
        </div>
    );
}

export default AdvancedBeginnerLevel;
