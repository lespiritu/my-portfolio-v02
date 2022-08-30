import { Tab, TabContent } from '@ui-design';
import React, { FC } from 'react';
import { tabData } from './tab-dummy-data';
import styles from './experience-tab.module.scss';
import cn from 'classnames';

export interface ExperienceTabProps {
  className?: string;
  style?: React.CSSProperties;
}
export const ExperienceTab: FC<ExperienceTabProps> = ({ style, className }) => {
  const tabHeader = tabData.map((item) => item.name);
  const tabContent = tabData.map((item) => <TabContent key={item.id} {...item} />);
  return (
    <div style={style} className={cn(styles.tab, className)}>
      <Tab tabHeader={tabHeader} tabContent={tabContent} />
    </div>
  );
};
