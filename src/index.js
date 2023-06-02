import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
//global style file
import './style.css'
//component
import App from './app'

const container = document.getElementById('root')

// Create a root.
const root = ReactDOMClient.createRoot(container)

// Initial render: Render an element to the root.
root.render(<App />)
