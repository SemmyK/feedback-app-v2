import { Link } from 'react-router-dom'
//icon
import { FaQuestion } from 'react-icons/fa'

function AboutIconLink() {
	return (
		<div className='about-link'>
			<Link to='/about'>
				<FaQuestion size={30} />
			</Link>
		</div>
	)
}

export default AboutIconLink
