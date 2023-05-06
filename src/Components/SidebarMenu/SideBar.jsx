import React, { useEffect, useState,useMemo } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {RxPerson} from 'react-icons/rx'
import {RiBriefcaseLine} from 'react-icons/ri'
import {FaShapes} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {CgComment} from 'react-icons/cg'
import {BsEnvelope} from 'react-icons/bs'
import {FaStream} from 'react-icons/fa'
import {SiGithub} from 'react-icons/si'
import {TbBrandInstagram} from 'react-icons/tb'
import {SiLinkedin} from 'react-icons/si'
import Link from 'next/link';
import "./MyComponent.module.css"
const Sidebar = () => {
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [open,setOpen]=useState(false)
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const toggleMenu = () => {
    setTimeout(() => {
      setOpen(!open);
    }, 100); // adjust delay as needed
  };
  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const fetchSidebarData = async () => {
      try {
        const response = await fetch("https://cdn.contentful.com/spaces/kaycm8ritkli/environments/master/entries/6D7lC0ltHfN5MxXjQf5Mzs?access_token=KtDKcjJxhcgdzJuzEvf21tWpCd-BLjijjzDu9J8cmro");
        const data = await response.json();
        setSidebarLinks(data.fields.sidebarLinks);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSidebarData();
  }, []);
const myBardata = useMemo(()=>{
return sidebarLinks
},[sidebarLinks])

  return (
    <>
   <div className="icon-menu" onClick={toggleMenu}>
    <span className='bar'></span>
    <span className='bar'></span>
   </div>
   <div className={`responsive-sidebar-menu ${open ? `show-sidebar`:''}`}>
    <div className="overlay" onClick={closeMenu}></div>
    <div className={`sidebar-menu-inner ${open ? `show-sidebar`:''}`}>
      <div className="menu-wrap">
        <p>Menu</p>
        <ul className="menu-item">
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#home">
            <i className='home'><AiOutlineHome/></i>
            <span>{myBardata[0]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#About">
            <i className='home'><RxPerson/></i>
            <span>{myBardata[1]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#Resume">
            <i className='home'><RiBriefcaseLine/></i>
            <span>{myBardata[2]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#services">
            <i className='home'><FaStream/></i>
            <span>{myBardata[3]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#skills">
            <i className='home'><FaShapes/></i>
            <span>{myBardata[4]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#portfolio">
            <i className='home'><FaGripVertical/></i>
            <span>{myBardata[5]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#testimonial">
            <i className='home'><CgComment/></i>
            <span>{myBardata[6]}</span>
            </a>
          </li>
          <li onClickonClick={() => {setActiveMenuItem('item2'); handleMenuClose();}}>
            <a href="#contact">
            <i className='home'><BsEnvelope/></i>
            <span>{myBardata[7]}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-socail-wrap">
        <p>Social</p>
<ul className='socail-icon'>
<li>
  <a href="https://www.linkedin.com/in/taha-ahmed-707716195/">
    <i><SiLinkedin/></i>
  </a>
</li>
<li>
  <a href="https://github.com/TahaAhmed63">
    <i><SiGithub/></i>
  </a>
</li>
<li>
  <a href="https://www.facebook.com/profile.php?id=100072537464535">
    <i><TbBrandInstagram/></i>
  </a>
</li>
</ul>
      </div>
    </div>
   </div>
   <ul className="menu-scroll">
  <li>
    <a  onClick={() => setActiveMenuItem('item1')} className={activeMenuItem === 'item1' ? 'active' : ''} href="#home">
        <i className='home'><AiOutlineHome/></i>
        </a>
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item2')} className={activeMenuItem === 'item2' ? 'active' : ''} href="#About">
        <i className='home'><RxPerson/></i>
        </a>
      
  </li>
  <li >
    <a  onClick={() => setActiveMenuItem('item3')} className={activeMenuItem === 'item3' ? 'active' : ''} href="#Resume">
        <i className='home'><RiBriefcaseLine/></i>
        </a>
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item4')} className={activeMenuItem === 'item4' ? 'active' : ''} href="#services">
    
        <i className='home'><FaStream/></i>
        </a>
      
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item5')} className={activeMenuItem === 'item5' ? 'active' : ''} href="#skills">
    
        <i className='home'><FaShapes/></i>
        </a>

  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item6')} className={activeMenuItem === 'item6' ? 'active' : ''} href="#portfolio">
        <i className='home'><FaGripVertical/></i>
        </a>
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item7')} className={activeMenuItem === 'item7' ? 'active' : ''} href="#testimonial">
    
        <i className='home'><CgComment/></i>
        </a>
      
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item8')} className={activeMenuItem === 'item8' ? 'active' : ''} href="#contact">
        <i className='home'><BsEnvelope/></i>
      </a>
  </li>
</ul>

  </>
  )
}
export default Sidebar