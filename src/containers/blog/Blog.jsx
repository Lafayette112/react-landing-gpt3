import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05, } from './imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date="Jul 09, 2023" title="Successful generative AI examples worth noting." />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date="Jul 01, 2023" title="Assessing different types of generative AI applications." />
          <Article imgUrl={blog03} date="Jul 03, 2023" title="The creative thief: AI tools creating generated art." />
          <Article imgUrl={blog04} date="Jul 05, 2023" title="Explore the foundations of artificial neural network modeling." />
          <Article imgUrl={blog05} date="Jul 07, 2023" title="Artificial intelligence glossary: 60+ terms to know." />
        </div>
      </div>

      
    </div>
  )
}

export default Blog