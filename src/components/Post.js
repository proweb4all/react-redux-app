import React from 'react'

export default ({post}) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{post.title}</h5>
        {/* <p className='catd-text'>{post.text}</p> */}
      </div>
    </div>
  )
}