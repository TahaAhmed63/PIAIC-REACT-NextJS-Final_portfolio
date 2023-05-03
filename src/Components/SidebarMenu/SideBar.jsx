import React, { useEffect, useState } from 'react'
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
import {TiSocialTwitter} from 'react-icons/ti'
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
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><AiOutlineHome/></i>
            <span>{sidebarLinks[0]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><RxPerson/></i>
            <span>{sidebarLinks[1]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><RiBriefcaseLine/></i>
            <span>{sidebarLinks[2]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><FaStream/></i>
            <span>{sidebarLinks[3]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><FaShapes/></i>
            <span>{sidebarLinks[4]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><FaGripVertical/></i>
            <span>{sidebarLinks[5]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><CgComment/></i>
            <span>{sidebarLinks[6]}</span>
            </a>
          </li>
          <li onClick={closeMenu}>
            <a href="#">
            <i className='home'><BsEnvelope/></i>
            <span>{sidebarLinks[7]}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-socail-wrap">
        <p>Social</p>
<ul className='socail-icon'>
<li>
  <a href="">
    <i><TiSocialTwitter/></i>
  </a>
</li>
<li>
  <a href="">
    <i><SiGithub/></i>
  </a>
</li>
<li>
  <a href="">
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
    <a  onClick={() => setActiveMenuItem('item4')} className={activeMenuItem === 'item4' ? 'active' : ''} href="#">
    
        <i className='home'><FaStream/></i>
        </a>
      
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item5')} className={activeMenuItem === 'item5' ? 'active' : ''} href="#">
    
        <i className='home'><FaShapes/></i>
        </a>

  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item6')} className={activeMenuItem === 'item6' ? 'active' : ''} href="#">
        <i className='home'><FaGripVertical/></i>
        </a>
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item7')} className={activeMenuItem === 'item7' ? 'active' : ''} href="#">
    
        <i className='home'><CgComment/></i>
        </a>
      
  </li>
  <li>
    <a  onClick={() => setActiveMenuItem('item8')} className={activeMenuItem === 'item8' ? 'active' : ''} href="#">
        <i className='home'><BsEnvelope/></i>
      </a>
  </li>
</ul>

  </>
  )
}
export default Sidebar