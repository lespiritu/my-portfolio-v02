import { FC } from 'react';
import { ExperienceTab, Intro, Navigation } from '../components';
import { CardList } from '../components';
import styles from './home.module.scss';
import cn from 'classnames';
import { Section } from '@ui-design';
import { FeaturedProjectList } from '../components';

export const Home: FC = () => {
  return (
    <div>
      <header className={styles.header}>
        <Navigation />
      </header>
      <main className={cn(styles.main, styles.fillHeight)}>
        <Intro />

        <Section sectionNumber="01." title="Other Noteworthy Projects" variant="centered">
          <div>
            <CardList />
          </div>
        </Section>

        <Section sectionNumber="02" title="Some Thing I've Built" variant="primary">
          <FeaturedProjectList />
        </Section>

        <Section
          className={styles.sectionExperienceTab}
          sectionNumber="03."
          title="Other Noteworthy Projects"
          variant="primary"
        >
          <ExperienceTab />
        </Section>
      </main>
    </div>
  );
};
