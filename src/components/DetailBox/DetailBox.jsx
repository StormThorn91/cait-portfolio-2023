import { useDispatch, useSelector } from "react-redux"
import { setContact, setProfile } from "../../store/details/detailsSlice";
import { setFinder } from "../../store/finder/finder-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"

export function DetailBox({projectContent, contactDetails, profileDetails }) {
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
                        <div>{projectContent.title}</div>
                    }

                    {
                        contactDetails ?
                        <div>Contact</div> : 
                        null
                    }

                    {
                        profileDetails ?
                        <div>Profile</div> :
                        null
                    }
                </div>
            </div>
        </div>
    )
}