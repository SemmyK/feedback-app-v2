import React from 'react'
import PropTypes from 'prop-types'

function Card({ children, reverse }) {
	return (
		//conditional class
		<article className={`card ${reverse && 'reverse'}`}>{children}</article>

		//conditional style
		// <article
		// 	className="card"
		// 	style={{
		// 		backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
		// 		color: reverse ? '#fff' : 'rgba(0,0,0,0.4)',
		// 	}}
		// >
		// 	{children}
		// </article>
	)
}

//set up default props
Card.defaultProps = {
	reverse: false,
}

//set up default prop types
Card.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
}

export default Card
