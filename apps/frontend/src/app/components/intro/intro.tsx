import { FC, useEffect, useState } from 'react';
import styles from './intro.module.scss';

export interface IntroProps {
    introOpen: string;
    introBackdrop:string;
  }

export const Intro: FC = ()=>{

    const [introOpen, setIntroOpen] = useState('open');

    useEffect(()=>{
       const timer =  setTimeout(()=>setIntroOpen('hide') , 2000);
       const timerClose = setTimeout(()=>setIntroOpen('close'), 3000);
       
        return ()=>{
            clearTimeout(timer)
            clearTimeout(timerClose)
        }
    },[]);

   const introBackdrop =  introOpen === 'open' ? styles.introOpen : introOpen === 'hide' ? styles.introHide : styles.introClose;
   
    return(
        <div className={introBackdrop}>
            <div className={styles.ldsRipple}><div></div><div></div></div>
        </div>
        
        
    )
}