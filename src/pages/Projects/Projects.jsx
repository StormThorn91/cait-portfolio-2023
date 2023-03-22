import { useDispatch, useSelector } from "react-redux";
import { DetailBox } from "../../components/DetailBox/DetailBox";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { setFinder } from "../../store/finder/finder-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"

export function Projects(props) {
    const theme = useSelector((store) => store.themeSlice.theme);
    const finder = useSelector((store) => store.finderSlice.finder);
    const projectsList = useSelector((store) => store.projectSlice.projectList);
    const projectItem = useSelector((store) => store.projectSlice.project);
    const contactVisible = useSelector((store) => store.detailsSlice.contact);
    const profileVisible = useSelector((store) => store.detailsSlice.profile);
    
    const dispatch = useDispatch();
 
    const handleOnclick = (e, projectItem_) => {
        switch (e.detail) {
            case 1: {
                dispatch(setFinder(true));
                dispatch(setProject(projectItem_));
                break;
            }
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
                    <ProjectList projectList={projectsList} onClickItem={handleOnclick} />
                </div>
            </div>
        </div>
    )
}