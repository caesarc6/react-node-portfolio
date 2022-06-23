import React from 'react'
import {Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import '../styles/Footer.css'


function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Instagram />
            <LinkedIn />
            <Twitter />
        </div>
        <p> &copy; 2022 c-blllog.web.app</p>

    </div>
  )
}

export default footer