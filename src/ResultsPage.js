import React, { useEffect, useRef } from 'react';
import styles from './ResultsPage.module.css'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
} from "chart.js"

import { Bar } from "react-chartjs-2"

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Legend
)

const ResultsPage = ({ answers }) => {
    const data1 = {
        labels: ['Питання 1', 'Питання 2', 'Питання 3', 'Питання 4'],
        datasets: [
            {
                label: 'Новачок',
                data: Object.values(answers.novice),
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data2 = {
        labels: ['Питання 1', 'Питання 2', 'Питання 3'],
        datasets: [
            {
                label: 'Твердий початківець',
                data: Object.values(answers.advanced_beginner),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data3 = {
        labels: ['Питання 1', 'Питання 2', 'Питання 3'],
        datasets: [
            {
                label: 'Компетентний',
                data: Object.values(answers.competent),
                backgroundColor: 'orange',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data4 = {
        labels: ['Питання 1', 'Питання 2', 'Питання 3'],
        datasets: [
            {
                label: 'Досвідчений',
                data: Object.values(answers.proficient),
                backgroundColor: 'pink',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data5 = {
        labels: ['Питання 1', 'Питання 2', 'Питання 3'],
        datasets: [
            {
                label: 'Експерт',
                data: Object.values(answers.expert),
                backgroundColor: 'magenta',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data6 = {
        labels: ['Новачок', 'Твердий початківець', 'Компетентний', 'Досвідчений', 'Експерт'],
        datasets: [
            {
                label: 'Expert level',
                data: Object.keys(answers).map(category =>
                    Object.values(answers[category]).reduce((acc, curr) => acc + (curr || 0), 0)
                ),
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const options = {

    }

    console.log(answers)

    return(
        <div>
            <h2 style={{textAlign: 'center'}}> Результати опитування {localStorage.userName} </h2>
            <div className={styles.resultsPlate}>
                <h4> Новачок: {Object.values(answers.novice).reduce((acc, currentValue) => acc + currentValue, 0)} /
                    20 </h4>
                <h4> Твердий
                    початківець: {Object.values(answers.advanced_beginner).reduce((acc, currentValue) => acc + currentValue, 0)} /
                    15 </h4>
                <h4> Компетентний: {Object.values(answers.competent).reduce((acc, currentValue) => acc + currentValue, 0)} /
                    15 </h4>
                <h4> Досвідчений: {Object.values(answers.proficient).reduce((acc, currentValue) => acc + currentValue, 0)} /
                    15 </h4>
                <h4> Експерт: {Object.values(answers.expert).reduce((acc, currentValue) => acc + currentValue, 0)} /
                    15 </h4>
            </div>

            <div className={styles.resultsContainer}>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data1}
                        options={options}
                    ></Bar>
                </div>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data2}
                        options={options}
                    ></Bar>
                </div>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data3}
                        options={options}
                    ></Bar>
                </div>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data4}
                        options={options}
                    ></Bar>
                </div>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data5}
                        options={options}
                    ></Bar>
                </div>
                <div className={styles.chartContainer}>
                    <Bar
                        data={data6}
                        options={options}
                    ></Bar>
                </div>
            </div>
        </div>
    )
}

export default ResultsPage
