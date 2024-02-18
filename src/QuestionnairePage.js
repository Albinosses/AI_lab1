import React, { useEffect, useState } from 'react';
import NoviceLevel from "./levels/NoviceLevel";
import AdvancedBeginnerLevel from "./levels/AdvancedBeginnerLevel";
import CompetentLevel from "./levels/CompetentLevel";
import ProficientLevel from "./levels/ProficientLevel";
import ExpertLevel from "./levels/ExpertLevel";
import { useNavigate } from "react-router-dom";
import styles from './QuestionnairePage.module.css';

const QuestionnairePage = ({ answers, handleChange }) => {
    const [currentLevel, setCurrentLevel] = useState('novice');
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const isAnyNull = Object.values(answers).some(level =>
            Object.values(level).some(value => value === null)
        );
        setIsFormValid(!isAnyNull);
    }, [answers, currentLevel]);

    const handleSubmit = () => {
        console.log('Відповіді:', answers);
        navigate("/results")
    };

    const handleLevelChange = (level) => {
        setCurrentLevel(level);
        console.log(answers)
    };

    return (
        <div className={styles.container}>
            <div className={styles.levelButtons}>
                <button onClick={() => handleLevelChange('novice')}>Новачок</button>
                <button onClick={() => handleLevelChange('advanced_beginner')}>Твердий початківець</button>
                <button onClick={() => handleLevelChange('competent')}>Компетентний</button>
                <button onClick={() => handleLevelChange('proficient')}>Досвідчений</button>
                <button onClick={() => handleLevelChange('expert')}>Експерт</button>
            </div>

            {currentLevel === 'novice' && <NoviceLevel handleChange={handleChange} formData={answers} />}
            {currentLevel === 'advanced_beginner' && <AdvancedBeginnerLevel handleChange={handleChange} formData={answers}/>}
            {currentLevel === 'competent' && <CompetentLevel handleChange={handleChange} formData={answers} />}
            {currentLevel === 'proficient' && <ProficientLevel handleChange={handleChange} formData={answers} />}
            {currentLevel === 'expert' && <ExpertLevel handleChange={handleChange} formData={answers} />}

            <button onClick={handleSubmit} disabled={!isFormValid} className={styles.submitButton}>Завершити анкетування</button>
        </div>
    );
};

export default QuestionnairePage;
