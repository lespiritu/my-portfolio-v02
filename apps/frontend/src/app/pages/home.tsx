import { FC } from 'react';
import { Intro, Navigation } from '../components';
import { CardList } from '../components';
import styles from './home.module.scss';
import cn from 'classnames';

export const Home: FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={cn(styles.main, styles.fillHeight)}>
        <Intro />
        <CardList />
      </main>
    </div>
  );
};
