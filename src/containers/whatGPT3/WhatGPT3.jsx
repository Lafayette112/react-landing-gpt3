import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="GPT-3, or the third-generation Generative Pre-trained Transformer, is a neural network machine learning model trained using internet data to generate any type of text. Developed by OpenAI, it requires a small amount of input text to generate large volumes of relevant and sophisticated machine-generated text." />
      </div>

      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="GPT-3 processes text input to perform a variety of natural language tasks. It uses both natural language generation and natural language processing to understand and generate natural human language text." />
        <Feature title="Knowledgebase" text="Generating content understandable to humans has historically been a challenge for machines that don't know the complexities and nuances of language, but GPT-3 is trained to generate realistic human text." />
        <Feature title="Education" text="GPT-3 is first trained through a supervised testing phase and then a reinforcement phase. When training ChatGPT, a team of trainers ask the language model a question with a correct output in mind. If the model answers incorrectly, the trainers tweak the model to teach it the right answer." />
      </div>
    </div>
  )
}

export default WhatGPT3