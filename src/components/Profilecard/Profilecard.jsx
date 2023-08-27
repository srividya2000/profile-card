import React from 'react'
import './Profilecard.css'
import profile_icon from '../Assests/art.jpg'

const Profilecard = () => {
  return (
    <div className='pc'>
        <div className='gradiant'></div>
        <div className='Profile-down'>
            <img src={profile_icon} alt=""/>
            <div className='profile-title'>VIDYA</div>
            <div className='profile-description'>I'm designing this profile card to 
            share my hobbies, which include painting, dancing, and cooking. 
            I've created a lot of mandala paintings, and my ultimate goal is to promote them.
            </div>
            <div className='profile-buttton'><a href="vemulasrividya09@gmail.com">Contact Me</a></div>
        </div>
      
    </div>
  )
}

export default Profilecard
