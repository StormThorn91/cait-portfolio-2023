import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import style from "./style.module.css"
export function Projects(props) {
    const navigate = useNavigate();
    const theme = useSelector((store) => store.themeSlice.theme);
    return (
        <div className={style.bg_night}>
            <div className={style.container}>
                <h1 className={theme ? style.title : style.title_night}>Projects</h1>
                <button onClick={() => navigate("/")} value="Back to Top"></button>
            </div>
        </div>
    )
}