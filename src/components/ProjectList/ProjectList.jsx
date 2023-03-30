import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../store/page/page-slice";
import { setNext, setPrev } from "../../store/project/paginated-slice";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import style from "./style.module.css";
export function ProjectList({ paginatedList, projectList, onClickItem }) {

    const [styling, setStyling] = useState("");

    const touch = useSelector((store) => store.touchSlice.touch);
    const theme = useSelector((store) => store.themeSlice.theme);
    const next = useSelector((store) => store.paginatedSlice.next);
    const prev = useSelector((store) => store.paginatedSlice.prev);
    const page = useSelector((store) => store.pageSlice.page);

    const dispatch = useDispatch();

    const handlePrevNavClick = () => {
        if (prev) {
            dispatch(setPage(page - 1));
            dispatch(setNext(true));
        }

    }

    const handleNextNavClick = () => {
        if (next) {
            dispatch(setPage(page + 1));
            dispatch(setPrev(true));
        }

    }

    const handleProjectistStyling = () => {
        if (!touch) {
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
        <div className={style.projectsContainer}>
            {
                paginatedList &&
                <div className={style.navPage}>
                    <br />
                    <br />
                    <br />
                    <span className={`${theme ? style.navBtn : style.navBtn_night} ${prev ? null : style.nav_disabled}`} onClick={handlePrevNavClick}>&#8249;</span>
                </div>
            }
            <div className={`${style.list} ${styling}`}>
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
            {
                paginatedList &&
                <div className={style.navPage}>
                    <br />
                    <br />
                    <br />
                    <span className={`${theme ? style.navBtn : style.navBtn_night} ${next ? null : style.nav_disabled}`} onClick={handleNextNavClick}>&#8250;</span>
                </div>
            }
        </div>
    )
}