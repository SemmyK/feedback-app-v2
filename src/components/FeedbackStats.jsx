import React, { useContext } from 'react'

//context
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
	const { feedback } = useContext(FeedbackContext)
	//calculate ratings average
	let average =
		feedback.reduce((accumulator, currentValue) => {
			//sum of all the ratings
			return accumulator + Number(currentValue.rating)
		}, 0) / feedback.length

	average = average.toFixed(1).replace(/[.,]0$/, '')

	return (
		<section className='feedback-stats'>
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
		</section>
	)
}

export default FeedbackStats
