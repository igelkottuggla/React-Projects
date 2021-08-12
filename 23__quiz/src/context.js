import axios from 'axios';
import React, { useState, useContext } from 'react';

const table = {
    sports: 21,
    history: 23,
    politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [waiting, setWaiting] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [error, setError] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quiz, setQuiz] = useState({
        amount: 10,
        category: 'sports',
        difficulty: 'easy',
    });

    const fetchQuestions = async (url) => {
        setIsLoading(true);
        setWaiting(false);
        const response = await axios(url).catch((error) => console.log(error));
        if (response) {
            const data = response.data.results;
            if (data.length > 0) {
                setQuestions(data);
                setWaiting(false);
                setIsLoading(false);
                setError(false);
            } else {
                setWaiting(true);
                setError(true);
            }
        } else {
            setWaiting(true);
        }
    };

    const nextQuestion = () => {
        setIndex((oldIndex) => {
            const index = oldIndex + 1;
            if (index > questions.length - 1) {
                openModal();
                return 0;
            } else {
                return index;
            }
        });
    };

    const checkAnswer = (value) => {
        if (value) {
            setCorrect((oldState) => oldState + 1);
        }
        nextQuestion();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setWaiting(true);
        setCorrect(0);
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setQuiz({ ...quiz, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const { amount, category, difficulty } = quiz;

        const url = `${API_ENDPOINT}amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;
        fetchQuestions(url);
    };

    return (
        <AppContext.Provider
            value={{
                waiting,
                isLoading,
                questions,
                index,
                correct,
                error,
                isModalOpen,
                nextQuestion,
                checkAnswer,
                closeModal,
                quiz,
                handleChange,
                handleSubmit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
