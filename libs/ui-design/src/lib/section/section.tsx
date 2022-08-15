import { FC } from 'react';
import styles from './section.module.scss';
import cn from 'classnames';
import { Typography } from '@ui-design';


export interface sectionProps {
    title: string;
    sectionNumber: string;
    variant?: 'primary' | 'centered';
    children?: JSX.Element;
    className?: string;
    
}

export const Section: FC<sectionProps> = (props)=>{

    const {title, sectionNumber, variant, children} = props;

    function getVariant(props: sectionProps){
       switch(variant){
        case 'primary' : return styles.headerPrimary;
        case 'centered' : return styles.headerCentered;
        default: return styles.headerPrimary;
       } 
    }   


    const renderSectionHead = () => {
        return(
            <div className={cn(props.className, styles.sectionHeader, getVariant(props))}>
               {variant === 'primary' && <span className={styles.number}>{sectionNumber}</span>}
            
                <span className={styles.title}>
                <Typography variant='header2'>{title}</Typography>
                </span>
                {variant === 'primary' && <span className={styles.line}></span>}

            </div>
        )
    }

    const renderSectionBody =()=>{
        return(
            <div className={styles.sectionBody}>
               {children}
            </div>
        )
    }

    return(
        <div className={styles.section}>
            {renderSectionHead()}
            {renderSectionBody()}
        </div>
    )
}