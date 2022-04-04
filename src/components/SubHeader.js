import React from 'react'

export default function Header(props) {
  return (
    <div className='d-flex justify-content-center my-5 m-auto'>
        <h2 className="border-bottom border-2 border-dark">{props.title}</h2>
    </div>
  )
}
