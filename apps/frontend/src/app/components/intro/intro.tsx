import { Typography } from '@ui-design';
import styles from './intro.module.scss';

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <Typography className={styles.greet} variant="header4">
        Hi, my name is
      </Typography>
      <Typography className={styles.name} variant="header1">
        Zeke Sebulino
      </Typography>
      <Typography className={styles.title} variant="header1">
        fullstack software engineer / devops
      </Typography>
      <Typography className={styles.story} variant="paragraph">
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at
      </Typography>
    </section>
  );
};
