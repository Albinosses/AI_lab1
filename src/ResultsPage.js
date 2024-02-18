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
        labels: ['Question 1', 'Question 2', 'Question 3', 'Question 4'],
        datasets: [
            {
                label: 'Novice level',
                data: Object.values(answers.novice),
                backgroundColor: 'aqua',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data2 = {
        labels: ['Question 1', 'Question 2', 'Question 3'],
        datasets: [
            {
                label: 'Advanced beginner level',
                data: Object.values(answers.advanced_beginner),
                backgroundColor: 'green',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data3 = {
        labels: ['Question 1', 'Question 2', 'Question 3'],
        datasets: [
            {
                label: 'Competent level',
                data: Object.values(answers.competent),
                backgroundColor: 'orange',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data4 = {
        labels: ['Question 1', 'Question 2', 'Question 3'],
        datasets: [
            {
                label: 'Proficient level',
                data: Object.values(answers.proficient),
                backgroundColor: 'pink',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data5 = {
        labels: ['Question 1', 'Question 2', 'Question 3'],
        datasets: [
            {
                label: 'Expert level',
                data: Object.values(answers.expert),
                backgroundColor: 'magenta',
                borderColor: 'black',
                borderWidth: 1
            }
        ]
    }

    const data6 = {
        labels: ['Novice', 'Advanced Beginner', 'Competent', 'Proficient', 'Expert'],
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
            <h2 style={{textAlign: 'center'}}> Results </h2>
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
