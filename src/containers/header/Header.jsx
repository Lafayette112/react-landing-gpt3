import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>The latest milestone in OpenAI’s effort in scaling up deep learning. GPT-3 is a large multimodal model (accepting image and text inputs, emitting text outputs) that, while less capable than humans in many real-world scenarios, exhibits human-level performance on various professional and academic benchmarks.</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>
      
      <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header