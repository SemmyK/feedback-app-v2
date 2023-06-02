import { createContext, useState, useEffect } from 'react'

//data
import FeedbackData from '../data/FeedbackData'
//create context
const FeedbackContext = createContext()

//create provider so that components can get acces to state and context
export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState(FeedbackData)
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	})

	//get data from json server
	useEffect(() => {
		fetchFeedback()
	}, [])

	//get data
	const fetchFeedback = async () => {
		//make get request
		const response = await fetch('/feedback?_sort=id&_order=desc')
		//get data
		const data = await response.json()

		//update UI
		if (response.status === 200) {
			setIsLoading(false)
			setFeedback(data)
		}
		return data
	}

	//delete feedback
	const deleteFeedback = async id => {
		if (window.confirm('Are you sure you want to delete feedback?')) {
			//make delete request
			await fetch(`/feedback/${id}`, { method: 'DELETE' })

			//update UI
			setFeedback(prevFeedback => prevFeedback.filter(item => item.id !== id))
		}
	}

	//add feedback
	const addFeedback = async newFeedback => {
		//make post request
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})
		//get data from response
		const data = await response.json()
		//add data to UI
		setFeedback(prevFeedback => [data, ...prevFeedback])
	}

	//set item to be updated
	const editFeedback = item => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}

	//update feedback item
	const updateFeedback = async (id, updatedItem) => {
		//make put request
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(updatedItem),
		})
		//get data from response
		const data = await response.json()
		//update UI
		setFeedback(
			feedback.map(item => (item.id === id ? { ...item, ...data } : item))
		)
	}

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
