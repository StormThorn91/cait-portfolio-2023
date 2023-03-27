import { useDispatch, useSelector } from "react-redux"
import { setContact, setProfile } from "../../store/details/detailsSlice";
import { setFinder } from "../../store/finder/finder-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"
import gitHubLogo from "../../assets/images/github-mark.png"
import gitHubLogoNight from "../../assets/images/github-mark-white.png"
import dp from "../../assets/images/profile_pic.jpg"
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import * as bootstrap from 'bootstrap'
import { CheckCircleFill } from 'react-bootstrap-icons'
import { PUBLIC_KEY, SERVICE_ID, TEMPLATE_ID } from "../../constants/constants";

export function DetailBox({ projectContent, contactDetails, profileDetails }) {
    const theme = useSelector((store) => store.themeSlice.theme)
    const finder = useSelector((store) => store.finderSlice.finder);

    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [contactMessage, setContactMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const form = useRef();

    const handleClose = () => {
        dispatch(setFinder(false));
        dispatch(setProject(null));
        dispatch(setProfile(false));
        dispatch(setContact(false));
    }

    const handleGithubButton = () => {
        window.open('https://github.com/StormThorn91', '_blank');
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        if (contactEmail.trim() == '' || contactName.trim() == '' || contactMessage.trim == '') {
            console.log("All fields are required")
            return null;
        }

        let myAlert = document.querySelector('.toast');
        let bsAlert = new bootstrap.Toast(myAlert);

        console.log(process.env.REACT_APP_SERVICE_ID);

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);

                setTimeout(function () {
                    bsAlert.show();
                    setLoading(false)
                }, 5000);

                setContactName("");
                setContactEmail("");
                setContactMessage("");

            }, (error) => {
                console.log(error.text);
                setContactName("");
                setContactEmail("");
                setContactMessage("");
            });
    }

    const loader = (
        <div className={style.loader_container}>
            <div className={style.spinner}></div>
        </div>
    )

    const toastEmailSentNotification = (
        <div className="toast-container top-0 end-0 p-3">
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <CheckCircleFill style={{ color: "green" }} className="rounded me-2" />
                    <strong style={{ color: "green" }} className="me-auto">Message Sent</strong>
                    <small className="text-body-secondary">just now</small>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Your email is successfully sent to Caitlin.
                </div>
            </div>
        </div>
    );

    const nameInput = (
        <div className='mb-3'>
            <label className={`form-label ${style.form_input_title}`}>Name:</label>
            <input type="text" onChange={(e) => setContactName(e.target.value)} value={contactName} name="user_name" className={`form-control ${style.form_input}`} required />
        </div>
    )

    const emailInput = (
        <div className='mb-3'>
            <label className={`form-label ${style.form_input_title}`}>Email:</label>
            <input type="email" name="user_email" onChange={(e) => setContactEmail(e.target.value)} value={contactEmail} className={`form-control ${style.form_input}`} required />
        </div>
    )

    const messageInput = (
        <div className='mb-3'>
            <label className={`form-label ${style.form_input_title}`}>Message:</label>
            <textarea type="text" name="message" onChange={(e) => setContactMessage(e.target.value)} value={contactMessage} className={`form-control ${style.form_input}`} row="5" required />
        </div>
    )

    const submitBtn = (
        <div className={style.submit_btn_container}>
            <input className={`${theme ? 'btn btn-outline-success' : 'btn btn-success'} ${style.contact_submit_btn}`} type="submit" value="Send " />
        </div>
    )

    const age = () => {
        var today = new Date();
        var birthDate = new Date('1998-10-01');
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        return age_now;
    }
    return (
        <div className={finder ? style.container : style.container_closed}>
            {toastEmailSentNotification}
            <div className={`${style.detail_box_content} ${theme ? style.detail_box_content_day : style.detail_box_content_night}`}>
                <div className={`${style.navigation_container} ${theme ? style.navigation_container_day : style.navigation_container_night}`}>
                    <span className={style.btn_close} onClick={handleClose}>
                    </span>
                    <span className={style.btn_min}></span>
                    <span className={style.btn_max}></span>
                </div>
                <div className={`${style.content_container} ${theme ? style.content_container_day : style.content_container_night} ${profileDetails ? style.content_overflow : null} ${contactDetails ? style.content_container_contact : null}`}>
                    {
                    loading ? 
                    loader : null
                    }

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
                            <div className={`${style.contact_container}`}>
                                <div className={style.contact_left}>
                                    <h1 className={style.contact_title}>Contact Me</h1>
                                </div>
                                <form ref={form} id="contact_form" onSubmit={sendEmail} className={style.contact_right}>
                                    <div className={style.name_input}>{nameInput}</div>
                                    <div className={style.email_input}>{emailInput}</div>
                                    <div className={style.message_input}>{messageInput}</div>
                                    <div className={style.submit_button}>{submitBtn}</div>
                                </form>

                            </div> :
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
                                            I am a {age()} year old geek who is based in the Philippines that aims to provide solutions to problems with the use of technology.
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