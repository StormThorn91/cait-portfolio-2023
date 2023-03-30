import { useSelector } from "react-redux";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import style from "./style.module.css";

export function ProjectList({ paginatedList, projectList, onClickItem }) {

    const touch = useSelector((store) => store.touchSlice.touch);

    return (
        <div className={style.projectsContainer}>
            <div className={`${style.list} ${touch ? null : style.list_desktop}`}>
                <div className={style.project_card_item}>
                    {
                        projectList &&
                        projectList.map((project, index) => {
                            return (
                                <ProjectCard key={index} projectItem={project} onClick={onClickItem} />)
                        })

                    }

                    {
                        paginatedList &&
                        paginatedList.map((project, index) => {
                            return (
                                <ProjectCard key={index} projectItem={project} onClick={onClickItem} />)
                        })
                    }
                </div>
            </div>
        </div>
    )
}