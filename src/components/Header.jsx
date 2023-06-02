import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header({ text, bgColor, textColor }) {
	const headerStyles = {
		backgroundColor: bgColor,
		color: textColor,
	}

	return (
		<header style={headerStyles}>
			<div className='container'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h2>{text}</h2>
				</Link>
			</div>
		</header>
	)
}

//set up default props
Header.defaultProps = {
	text: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
}
//set up default prop type
Header.propTypes = {
	text: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
}
