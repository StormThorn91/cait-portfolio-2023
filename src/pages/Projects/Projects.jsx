import { useDispatch, useSelector } from "react-redux";
import { DetailBox } from "../../components/DetailBox/DetailBox";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { setFinder } from "../../store/finder/finder-slice";
import { setPage } from "../../store/page/page-slice";
import { setNext, setPrev } from "../../store/project/paginated-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"

export function Projects(props) {
    const theme = useSelector((store) => store.themeSlice.theme);
    const finder = useSelector((store) => store.finderSlice.finder);
    const touch = useSelector((store) => store.touchSlice.touch);
    const projectsList = useSelector((store) => store.projectSlice.projectList);
    const page = useSelector((store) => store.pageSlice.page);
    const pagedList = useSelector((store) => store.paginatedSlice.paginatedList);
    const projectItem = useSelector((store) => store.projectSlice.project);
    const contactVisible = useSelector((store) => store.detailsSlice.contact);
    const profileVisible = useSelector((store) => store.detailsSlice.profile);
    const next = useSelector((store) => store.paginatedSlice.next);
    const prev = useSelector((store) => store.paginatedSlice.prev);

    const dispatch = useDispatch();

    console.log('paged' + pagedList.data.pagination.results);
    console.log('project' + projectsList);

    const handleOnclick = (e, projectItem_) => {
        switch (e.detail) {
            case 1: {
                dispatch(setFinder(true));
                dispatch(setProject(projectItem_));
                break;
            }
        }
    }

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

    return (
        <div className={style.bg_night}>
            <div className={style.project_item}>
                {
                    finder ? <DetailBox projectContent={projectItem} contactDetails={contactVisible} profileDetails={profileVisible} /> : null
                }
            </div>
            <div className={`col justify-content-center text-center ${style.container}`}>
                <h1 className={`col-12 text-center ${theme ? style.title : style.title_night}`}>Projects</h1>
                <div className={`col-12 justify-content-center`}>
                    {
                        touch ?
                            <ProjectList projectList={projectsList} onClickItem={handleOnclick} /> :
                            <div className={style.projectsContainer}>
                                <div className={style.navPage}>
                                    <br />
                                    <br />
                                    <br />
                                    <span className={`${theme ? style.navBtn : style.navBtn_night} ${prev ? null : style.nav_disabled}`} onClick={handlePrevNavClick}>&#8249;</span>
                                </div>
                                <ProjectList paginatedList={pagedList.data.pagination.results} onClickItem={handleOnclick} />
                                <div className={style.navPage}>
                                    <br />
                                    <br />
                                    <br />
                                    <span className={`${theme ? style.navBtn : style.navBtn_night} ${next ? null : style.nav_disabled}`} onClick={handleNextNavClick}>&#8250;</span>
                                </div>
                            </div>

                    }

                </div>
            </div>
        </div>
    )
}