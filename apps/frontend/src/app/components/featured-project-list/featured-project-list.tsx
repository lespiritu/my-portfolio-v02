import { featuredProjectData } from "./featured-project-list-dummy-data"
import { FeaturedProject } from "@ui-design"
import { FC } from "react"
import { Button } from "@ui-design"
import styles from './featured-project-list.module.scss'


export const FeaturedProjectList: FC = ()=>{

const handlerClick = (link?:string)=> window.open(link);

 const featuredProjectElements =  featuredProjectData.map((item,index)=>{
    return(
    <FeaturedProject {...item} key={index}>
    {item.learnMoreLink && <Button onClick={()=>handlerClick(item.learnMoreLink)} label="Learn More" variant="outline" className={styles.btnLearnMore}/>}
    </FeaturedProject>)
  })

    return(
        <div>   
            {featuredProjectElements}
        </div>
    )
}