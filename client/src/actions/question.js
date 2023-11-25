import React from 'react'
import * as api from '../api'

export const fetchAllQuestions = () => async (dispatch) => {
    try {
        console.log("fetching")
        const { data } = await api.getAllQuestions()
        dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const askQuestion = (questionData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.postQuestion(questionData)
        dispatch({ type: 'POST_QUESTION', payload: data})
        alert('Question posted successfully!')
        dispatch(fetchAllQuestions())
        navigate('/')
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
    try {
        const { data } = await api.voteQuestion(id, value, userId)
        dispatch(fetchAllQuestions())
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}

export const postAnswer = (answerData) => async (dispatch) => {
    
    try {
        const { id, noOfAnswers, answerBody, userAnswered, userId } = answerData
        const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId)
        dispatch({ type: 'POST_ANSWER', payload: data })
        alert('Answer posted successfully!')
        dispatch(fetchAllQuestions())
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}

export const deleteQuestion = (id, navigate) => async (dispatch) => {
    try {
        const { data } = await api.deleteQuestion(id)
        dispatch(fetchAllQuestions()) 
        alert('Question deleted successfully!')
        navigate('/')
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}

export const deleteAnswer = (id, answerId, noOfAnswers, userId) => async (dispatch) => {
    try {
        const { data } = await api.deleteAnswer(id, answerId, noOfAnswers, userId)
        dispatch(fetchAllQuestions())
        alert('Answer deleted successfully!')
    } catch (error) {
        alert('Error occurred. Please try again.')
        console.log(error)
    }
}

