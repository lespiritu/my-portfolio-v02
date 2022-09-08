import { SocialMedia, Typography } from '@ui-design';
import { sociaMediaData } from './social-media-dummy-data';
import styles from './footer.module.scss';
export const Footer = () => {
  return (
    <div className={styles.footer}>
      <SocialMedia {...sociaMediaData} />
      <div className={styles.footerBody} onClick={() => window.open('https://www.google.com/')}>
        <Typography variant="paragraph">{`Designed & Built by Kong Kwela`}</Typography>
      </div>
    </div>
  );
};
