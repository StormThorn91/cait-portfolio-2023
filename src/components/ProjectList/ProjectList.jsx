import { useSelector } from "react-redux";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import style from "./style.module.css";
export function ProjectList({ projectList, onClickItem }) {
    const touch = useSelector((store) => store.touchSlice.touch);
    return (
        <div>
            <div className={`${style.list} ${(projectList.length > 3 ? null : style.list_desktop) | touch ? null : style.list_desktop}`}>
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