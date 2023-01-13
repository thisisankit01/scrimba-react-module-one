import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './projectHeader'
import Content from './projectContent'
import Footer from './projectFooter'

import './projectCSS.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container'>
    <Header />
    <Content />
    <Footer />
  </div>
)
