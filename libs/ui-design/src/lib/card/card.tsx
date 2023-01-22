/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import { BsFolder2Open as IconOpenFolder } from 'react-icons/bs';
import { ImGithub as IconGithub } from 'react-icons/im';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FaGitlab as IconGitlab } from 'react-icons/fa';
import styles from './card.module.scss';
import { Typography } from '@ui-design';
import { motion } from 'framer-motion';
import { useAnimate } from '@ui-design';

export interface CardProps {
  id: number;
  title: string;
  content: string;
  footer: string[];
  externalLink: string;
  githubLink?: string;
  gitlabLink?: string;
  isActive: boolean;
  activeHandler: (id: number) => void;

  index: number;
}

export const Card: FC<CardProps> = (props) => {
  const openLink = (e: any, link?: string): void => {
    window.open(link);
    e.stopPropagation();
  };

  const {
    id,
    activeHandler,
    externalLink,
    githubLink,
    gitlabLink,
    title,
    isActive,
    content,
    footer,
  } = props;
  const onClickHandler = (e: any) => {
    activeHandler(id);
    openLink(e, externalLink);
  };

  const renderCardHeader = () => {
    return (
      <div className={styles.cardHeader}>
        <ul className={styles.headerIcon}>
          <li className={styles.folderIcon}>
            <IconOpenFolder />
          </li>
          {githubLink && (
            <li onClick={(e) => openLink(e, githubLink)} className={styles.gitHubLink}>
              <IconGithub />
            </li>
          )}

          {gitlabLink && (
            <IconGitlab onClick={(e) => openLink(e, gitlabLink)} className={styles.iconGitlab} />
          )}

          <li onClick={(e) => openLink(e, externalLink)} className={styles.externalLink}>
            <HiOutlineExternalLink />
          </li>
        </ul>
      </div>
    );
  };

  const renderCardContent = () => (
    <div className={styles.cardContent}>
      <span className={isActive ? styles.contentTitleActive : styles.contentTitle}>
        <Typography variant="header2">{title}</Typography>
      </span>
      {
        <Typography variant="paragraph" className={styles.contentBody}>
          {content}
        </Typography>
      }
    </div>
  );

  const renderCardFooter = () => (
    <div className={styles.cardFooter}>
      <ul>
        {footer.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  // this code is for animation using framer motion
  const [delayNum, setDelayNum] = useState(props.index);
  delayNum > 5 && setDelayNum((previous) => previous - 6);

  return (
    <motion.div
      variants={useAnimate(delayNum, 0.2)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      onClick={onClickHandler}
      className={styles.card}
    >
      {renderCardHeader()}
      {renderCardContent()}
      {renderCardFooter()}
    </motion.div>
  );
};
