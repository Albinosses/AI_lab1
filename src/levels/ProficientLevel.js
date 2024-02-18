import React from "react";
import styles from './Level.module.css'; // Reusing the CSS module from ExpertLevel

const ProficientLevel = ({ handleChange, formData }) => {
    const handleClearForm = () => {
        Object.keys(formData.proficient).forEach(question => handleChange('proficient', question, null));
    };

    return (
        <div className={styles.expertContainer}> {/* Reuse the container style */}
            <h3 className={styles.sectionTitle}>Досвідчений (Proficient)</h3>
            <p className={styles.question}>Чи необхідний вам весь контекст задачі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('proficient', 'q1', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="proficient_1" checked={formData.proficient.q1 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="proficient_1" checked={formData.proficient.q1 === 3}/> В окремих деталях
                </label>
                <label>
                    <input type="radio" value={2} name="proficient_1" checked={formData.proficient.q1 === 2}/> В загальному
                </label>
            </div>

            <p className={styles.question}>Чи переглядаєте ви свої наміри до вирішення задачі?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('proficient', 'q2', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="proficient_2" checked={formData.proficient.q2 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="proficient_2" checked={formData.proficient.q2 === 3}/> Зрідка
                </label>
                <label>
                    <input type="radio" value={2} name="proficient_2" checked={formData.proficient.q2 === 2}/> Коли є потреба
                </label>
            </div>

            <p className={styles.question}>Чи здатні ви навчатись у інших?</p>
            <div className={styles.radioGroup} onChange={(e) => handleChange('proficient', 'q3', parseInt(e.target.value))}>
                <label>
                    <input type="radio" value={5} name="proficient_3" checked={formData.proficient.q3 === 5}/> Так
                </label>
                <label>
                    <input type="radio" value={3} name="proficient_3" checked={formData.proficient.q3 === 3}/> Зрідка
                </label>
                <label>
                    <input type="radio" value={2} name="proficient_3" checked={formData.proficient.q3 === 2}/> Коли є потреба
                </label>
            </div>

            <button onClick={handleClearForm} className={styles.clearButton}>Очистити форму</button>
        </div>
    );
}

export default ProficientLevel;
