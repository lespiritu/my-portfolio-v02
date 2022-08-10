import { FC, useState } from "react"
import { BsFolder2Open } from 'react-icons/bs'
import { ImGithub } from 'react-icons/im'
import { HiOutlineExternalLink } from 'react-icons/hi'
import {cardData} from "./card-data"
import styles from './card.module.scss'
import { Button } from 'ui';

export interface CardProps {
    id:number;
    title:string;
    content:string;
    footer:string[];
    externalLink:string;
    gitHubLink?:string;
    isActive:boolean;
    activeHandler:(id:number)=> void;
}

const Card: FC<CardProps> = (props)=>{  

    const linkHandler = (link?:string)=> window.open(link);
    
    const cardClickHandler = ()=>{
        props.activeHandler(props.id);
        linkHandler(props.externalLink);
    }

    return(
        <div onClick={cardClickHandler} className={styles.card} >
                <ul className={styles.headerIcon}>
                    <li className={styles.folderIcon}><BsFolder2Open/></li>
                    {props.gitHubLink && <li onClick={()=>linkHandler(props.gitHubLink)} className={styles.gitHubLink}> <ImGithub/></li>}
                    <li onClick={()=>linkHandler(props.externalLink)} className={styles.externalLink}><HiOutlineExternalLink/></li>
                </ul>

            <div className={styles.content}>
                <span className={props.isActive? styles.contentTitleActive : styles.contentTitle}> {props.title}</span>
                <p className={styles.contentBody}>{props.content}</p>
                <ul className={styles.cardFooter}>
                    {props.footer.map((item,index)=><li key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}


export const CardParent: FC = ()=>{
    const [cardDataUpdate, setCardDataUpdate] = useState(cardData);
    const activeHandler = (id:number)=>{
        setCardDataUpdate(previousVal=>{
            return previousVal.map(item=>(item.id === id? {...item, isActive:true}: {...item, isActive:false}))
        })
    }   
    // const cards = cardDataUpdate.map((item,index)=><Card key={index} activeHandler={activeHandler}{...item}/>)

    const [cardShowAll, setCardShowAll] = useState(false);

    const cardLengthHandler = ()=>{
       setCardShowAll(previous=>!previous);
    }
     const cardLength = cardShowAll ? cardDataUpdate.length : 6;
    
    const cards = [];
    for (let i = 0; i < cardLength ; i++) {
        cards.push(<Card activeHandler={activeHandler} key={cardDataUpdate[i].id} {...cardDataUpdate[i]}/>) 
    }
    
    return(
      <div className={styles.cards}>
          <div className={styles.cardContainer}>
            {cards}
           
          </div>
        <Button onClick={cardLengthHandler} label={cardShowAll? 'Show less' : 'Show More'} variant="primary" className={styles.btnCardShow} />
      </div>
    )
}