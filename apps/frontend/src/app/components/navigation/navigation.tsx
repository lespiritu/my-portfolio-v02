
import { FC, useEffect, useState } from 'react';
import logo from './sample-logo.png';

import styles from "./navigation.module.scss";


export interface NavigationProps {
  navLink: string;
  navShow:boolean;
  translateShow: string;
  windowWidth:number;
  btnMenuOpen:boolean;
}

export const Navigation: FC = () => {

  //navigation data
  const navLinkArr = ['About', 'Experience', 'Work', 'Contact'];
  const navLink = navLinkArr.map((item,index)=><li key={index}>{item}</li>);

 
  const [navShow, setNavShow] = useState(false);
  const [styleTranslate, setStyletranslate] = useState('translateX(100%)');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnMenuOpen, setbtnMenuOpen] = useState(false);
  // const btnClassName = btnMenuOpen ? 'btnLinesChange' : 'btnLines';

   //toggle button handler
  function toggleBtn(){
    setNavShow(previousValue=>!previousValue);
    setbtnMenuOpen(previousVal=>!previousVal);
  }

 
  useEffect(()=>{
  setStyletranslate(navShow || windowWidth > 768 ? 'translateX(0)' : 'translateX(100%)')
 },[navShow, windowWidth])

  

  // when resizing window, getting the width of window
   useEffect(() => {
    function getWindowWidth(){
      setWindowWidth(window.innerWidth)
    }

      window.addEventListener('resize', getWindowWidth)

      return ()=>{
        window.removeEventListener('resize', getWindowWidth);
      }
  },[]);
  


  return (
    
    <div className={styles.headerPanel}>
        <img src={logo} alt="" />
        
        
        <div style={{transform:`${styleTranslate}`}} className={`${styles.rightSide} ${styles.show}`}>
          <ul>{navLink}</ul>
          <button className={styles.btnResume}>Resume</button>
        </div>

       { <button onClick={toggleBtn}  className={styles.btnToggle}>
            <span className={btnMenuOpen ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={btnMenuOpen ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={btnMenuOpen ? styles.btnLinesChange : styles.btnLines}></span>
        </button>}
    </div>
  );
};
