import { FC } from 'react';
import { BsFolder2Open as IconOpenFolder } from 'react-icons/bs';
import { ImGithub as IconGithub } from 'react-icons/im';
import { HiOutlineExternalLink } from 'react-icons/hi';
import styles from './card.module.scss';
import { Typography } from '@ui-design';

export interface CardProps {
  id: number;
  title: string;
  content: string;
  footer: string[];
  externalLink: string;
  gitHubLink?: string;
  isActive: boolean;
  activeHandler: (id: number) => void;
}

export const Card: FC<CardProps> = (props) => {
  const openLink = (link?: string) => window.open(link);

  const { id, activeHandler, externalLink, gitHubLink, title, isActive, content, footer } = props;
  const onClickHandler = () => {
    activeHandler(id);
    openLink(externalLink);
  };

 
  
  const renderCardHeader = () => {
    return (
      <div className={styles.cardHeader}>
        <ul className={styles.headerIcon}>
          <li className={styles.folderIcon}>
            <IconOpenFolder />
          </li>
          {gitHubLink && (
            <li onClick={() => openLink(gitHubLink)} className={styles.gitHubLink}>
              <IconGithub />
            </li>
          )}
          <li onClick={() => openLink(externalLink)} className={styles.externalLink}>
            <HiOutlineExternalLink />
          </li>
        </ul>
      </div>
    );
  };

  const renderCardContent = () => (
    <div className={styles.cardContent}>
      <span className={isActive ? styles.contentTitleActive : styles.contentTitle}>
        <Typography variant="header2">
          {title} #{id}
        </Typography>
      </span>
      <p className={styles.contentBody}>{<Typography variant="paragraph">{content}</Typography>}</p>
    </div>
  );

  const renderCardFooter = () => (
    <div className={styles.cardFooter}>
      <ul className={styles.cardFooter}>
        {footer.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div onClick={onClickHandler} className={styles.card}>
      {renderCardHeader()}
      {renderCardContent()}
      {renderCardFooter()}
    </div>
  );
};
