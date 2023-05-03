import React from 'react'
import mylogo from "./../assets/Taha.jpg"
import Image from 'next/image'
import {TiSocialTwitter} from 'react-icons/ti'
import {TfiFacebook} from 'react-icons/tfi'
import {RiInstagramLine} from 'react-icons/ri'
import {VscGithub} from 'react-icons/vsc'
import {RxEnvelopeClosed} from 'react-icons/rx'
export const StaticIntro = () => {
  return (
  <>
  <div className="left-sidebar">
   <div className="sidebarheader-wrap">
     <div className="logo">
        <h6>Taha</h6>
     </div>
     <div className="intro-head">
            <h6>FrontEnd Developer</h6>
     </div>
   </div>
<div className="profile-details">
    <div className="logo-img">
      <Image src={mylogo}
      height={211}
      width={250}
      
      />
    </div>
    <div className="details">
        <div className="email">
            <h6>ataha6381@gmail.com</h6>
        </div>
        <div className="city">
            <h6>Base in Karachi,pakistan</h6>
        </div>
        <div className="copyright">
            <h6>© 2023 Taha. All Rights Reserved</h6>
        </div>
    </div>
<div className="socail-icon-wrap">
    <ul>
<li><a href=""><TiSocialTwitter/></a></li>
<li><a href=""><TfiFacebook/></a></li>
<li><a href=""><RiInstagramLine/></a></li>
<li><a href=""><VscGithub/></a></li>
    </ul>

</div>
<div className="themebtn">
<a href=""><RxEnvelopeClosed/>Hire me!</a>

</div>
</div>
  </div>
  
  </>
  )
}
