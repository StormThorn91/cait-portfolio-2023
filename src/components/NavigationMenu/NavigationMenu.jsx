import style from "./style.module.css"
import { useNavigate } from "react-router-dom"

export function NavigationMenu({image, navId}) {
    const navigate = useNavigate();
    
    const handleOnClick = (id) => {
        if(id === "project") {
            navigate("/projects")
        }
    }

    console.log(navId);
    return (
        <div className={`${style.nav_container}`}>
            <img src={image} id={navId} onClick={() => handleOnClick(navId)} className={style.icon} />
        </div>
    )
}