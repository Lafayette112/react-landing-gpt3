import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>

      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Automate conversational tasks, responding to any text that a person types into the computer with a new piece of text appropriate to the context. <br />
        Translate text into programmatic commands. <br />
        Translate programmatic commands into text. <br />
        Extract information from contracts.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>

    </div>
  )
}

export default Possibility