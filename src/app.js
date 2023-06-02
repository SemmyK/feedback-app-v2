import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
//context
import { FeedbackProvider } from './context/FeedbackContext'
//pages
import About from './pages/About'

export default function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header />
				<main className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<About />} />
					</Routes>

					<AboutIconLink />
				</main>
			</Router>
		</FeedbackProvider>
	)
}
