import { FC, useEffect, useState } from 'react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import logo from 'libs/ui-design/src/lib/assets/images/sample-logo.png';

import styles from './navigation.module.scss';
import { Button } from '@ui-design';

import { NavigationBanner } from '@enums';

export interface NavigationProps {
  navLink: string;
  navShow: boolean;
  translateShow: string;
  windowWidth: number;
  btnMenuOpen: boolean;
}

export const Navigation: FC = () => {
  //navigation data
  const navLinkArr = Object.values(NavigationBanner);

  const [navShow, setNavShow] = useState(false);
  const [styleTranslate, setStyletranslate] = useState('translateX(100%)');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // const btnClassName = btnMenuOpen ? 'btnLinesChange' : 'btnLines';

  //toggle button handler
  function toggleBtn() {
    setNavShow((previousValue) => !previousValue);
  }

  useEffect(() => {
    setStyletranslate(navShow || windowWidth > 768 ? 'translateX(0)' : 'translateX(100%)');
  }, [navShow, windowWidth]);

  // when resizing window, getting the width of window
  useEffect(() => {
    function getWindowWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', getWindowWidth);

    return () => {
      window.removeEventListener('resize', getWindowWidth);
    };
  }, []);

  return (
    <nav>
      <div className={styles.navHeaderPanel}>
        <img src={logo} alt="" />

        <div
          style={{ transform: `${styleTranslate}` }}
          className={`${styles.rightSide} ${styles.show}`}
        >
          <ul>
            {navLinkArr.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Button label="Resume" variant="primary" className={styles.btnResume} />
        </div>

        {
          <button onClick={toggleBtn} className={styles.btnToggle}>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
            <span className={navShow ? styles.btnLinesChange : styles.btnLines}></span>
          </button>
        }
      </div>
    </nav>
  );
};
