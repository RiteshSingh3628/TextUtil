import React from 'react'

export default function Contact() {
  return (
    <div className='container'>
        <form action="">
            <label htmlFor="user-name">Username</label>
            <input type="text" name='name' id='user-name' />
            <label htmlFor="user-email">email</label>
            <input type="email" name='email' id='user-email' />
            <label htmlFor="user-number">Phone Number </label>
            <input type="number" name='phone' id='user-number' />
            <label htmlFor="user-query">Your Query</label>
            <textarea name="query" id="user-query" cols="30" rows="10"></textarea>

        </form>
    </div>
  )
}
