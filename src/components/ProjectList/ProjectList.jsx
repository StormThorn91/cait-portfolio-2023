import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import style from "./style.module.css";
export function ProjectList({ projectList, onClickItem }) {

    const [styling, setStyling] = useState("");

    const touch = useSelector((store) => store.touchSlice.touch);

     const handleProjectistStyling = () => {
        if((!projectList.length > 3) && !touch) {
            setStyling(style.list_desktop);
        }
        else {
            setStyling("");
        }

     }

     useEffect(() => {
        handleProjectistStyling();
     }, [styling]);
     
    return (
        <div>
            {console.log(projectList.length)}
            <div className={`${style.list} ${styling}`}>
                <div className={style.project_card_item}>
                    {
                        projectList.map((project, index) => {
                            return (
                                <ProjectCard key={index} projectItem={project} onClick={onClickItem} />)
                        })

                    }
                </div>

            </div>
        </div>
    )
}