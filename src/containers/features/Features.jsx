import React from 'react'
import './features.css'
import { Feature } from '../../components'


const featuresData = [
  {
    title: 'History of GPT-3',
    text: 'OpenAI developed GPT-3 as one of its research projects. It aimed to tackle the larger goals of promoting and developing "friendly AI" in a way that benefits humanity as a whole.'
  },
  {
    title: 'Benefits of GPT-3',
    text: 'Whenever a large amount of text needs to be generated from a machine based on some small amount of text input, GPT-3 provides a good solution. Large language models, like GPT-3, are able to provide decent outputs given a handful of training examples.'
  },
  {
    title: 'Dall-E',
    text: 'Dall-E is an AI image generating neural network built on a 12 billion-parameter version of GPT-3. Dall-E was trained on a data set of text-image pairs and can generate images from user-submitted text prompts. ChatGPT and Dall-E were developed by OpenAI.'
  },
  {
    title: 'Future of GPT-3',
    text: "There are a number of open source efforts in play to provide a free and nonlicensed model as a counterweight to Microsoft's exclusive ownership. OpenAI is planning larger and more domain-specific versions of its models trained on different and more diverse kinds of text."
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>

      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div>
  )
}

export default Features