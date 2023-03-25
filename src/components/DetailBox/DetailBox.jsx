import { useDispatch, useSelector } from "react-redux"
import { setContact, setProfile } from "../../store/details/detailsSlice";
import { setFinder } from "../../store/finder/finder-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"
import gitHubLogo from "../../assets/images/github-mark.png"
import gitHubLogoNight from "../../assets/images/github-mark-white.png"
import dp from "../../assets/images/profile_pic.jpg"

export function DetailBox({ projectContent, contactDetails, profileDetails }) {
    const theme = useSelector((store) => store.themeSlice.theme)
    const finder = useSelector((store) => store.finderSlice.finder);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setFinder(false));
        dispatch(setProject(null));
        dispatch(setProfile(false));
        dispatch(setContact(false));
    }

    const handleGithubButton = () => {
        window.open('https://github.com/StormThorn91', '_blank');
    }
    return (
        <div className={finder ? style.container : style.container_closed}>
            <div className={`${style.detail_box_content} ${theme ? style.detail_box_content_day : style.detail_box_content_night}`}>
                <div className={`${style.navigation_container} ${theme ? style.navigation_container_day : style.navigation_container_night}`}>
                    <span className={style.btn_close} onClick={handleClose}>
                    </span>
                    <span className={style.btn_min}></span>
                    <span className={style.btn_max}></span>
                </div>
                <div className={`${style.content_container} ${theme ? style.content_container_day : style.content_container_night} ${profileDetails ? style.content_overflow : null}`}>
                    {
                        projectContent &&
                        <div className={style.project_container}>
                            <h1 className={theme ? style.project_title : style.project_title_night}>{projectContent.title}</h1>
                            <p className={theme ? style.project_content : style.project_content_night}>{projectContent.content}</p>
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
                            <div className={style.profile_container}>
                                <div className={style.profile_content}>
                                    <div className={style.profile_left}>
                                        <img className={style.profile_pic} src={dp} />
                                    </div>
                                    <div className={style.profile_right}>
                                        <h1 className={style.profile_name}>Caitlin Anne Sistoso</h1>
                                        <h3 className={style.profile_position}>Full Stack Web Developer</h3>
                                        <p className={style.profile_details}>
                                            I am a 24 year old geek who is based in the Philippines that aims to provide solutions to problems which technology solves.
                                            <br />
                                            <br />
                                            If you wanna know more about my professional information, 
                                            <br />
                                            <a href="https://drive.google.com/file/d/1aJSIdqlHvDdQgttuU64naOOGg4zDuQhd/view?usp=sharing" className={theme ? style.cv_link : style.cv_link_night} 
                                            target="_blank">
                                            click here to view my full CV
                                            </a>
                                        </p>
                                        <img className={style.github} onClick={handleGithubButton} src={theme ? gitHubLogo : gitHubLogoNight} />
                                    </div>
                                </div>
                            </div> :
                            null
                    }
                </div>
            </div>
        </div>
    )
}