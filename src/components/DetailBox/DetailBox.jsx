import { useDispatch, useSelector } from "react-redux"
import { setContact, setProfile } from "../../store/details/detailsSlice";
import { setFinder } from "../../store/finder/finder-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"

export function DetailBox({ projectContent, contactDetails, profileDetails }) {
    const theme = useSelector((store) => store.themeSlice.theme)
    const finder = useSelector((store) => store.finderSlice.finder);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setFinder(false));
        dispatch(setProject({}));
        dispatch(setProfile(false));
        dispatch(setContact(false));
    }
    return (
        <div className={finder ? style.container : style.container_closed} onClick={handleClose}>
            <div className={`${style.detail_box_content} ${theme ? style.detail_box_content_day : style.detail_box_content_night}`}>
                <div className={`${style.navigation_container} ${theme ? style.navigation_container_day : style.navigation_container_night}`}>
                    <span className={style.btn_close} onClick={handleClose}></span>
                    <span className={style.btn_min}></span>
                    <span className={style.btn_max}></span>
                </div>
                <div className={`${style.content_container} ${theme ? style.content_container_day : style.content_container_night}`}>
                    {
                        projectContent &&
                        <div className={style.project_container}>
                            <h1 className={theme ? style.project_title : style.project_title_night}>{projectContent.title}</h1>
                            <p className={theme ? style.project_content_title : style.project_content_night}>{projectContent.content}</p>
                            <a className={theme ? style.url : style.url_night} href={projectContent.url} target="_blank">Click here to see this project in action</a>
                            <img className={style.project_image} src={projectContent.image} alt="a project" />
                        </div>
                    }

                    {
                        contactDetails ?
                            <div>Contact Page will be available soon</div> :
                            null
                    }

                    {
                        profileDetails ?
                            <div>Profile Page will be available soon</div> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}