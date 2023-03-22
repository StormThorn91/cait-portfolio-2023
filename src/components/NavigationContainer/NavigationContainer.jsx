import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ButtonTop } from "../ButtonTop/ButtonTop";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import style from "./style.module.css"

export function NavigationContainer({ icons, navId, path, onClickNav }) {
    const theme = useSelector((store) => store.themeSlice.theme);
    const navigate = useNavigate();

    const [isProjectPage, setIsProjectPage] = useState(false);

    useEffect(() => {
        if(path === "/projects") {
            setIsProjectPage(true);
        }
        else {
            setIsProjectPage(false);
        }
    },[path])

    return (
        <div className={`row justify-content-center ${theme ? style.bg_day : style.bg_night}`}>
            <div className="col-4">
            </div>
            {
                isProjectPage ? <ButtonTop className={style.button} onClick={() => navigate("/")} /> : null
            }
            <div className={`col-4 ${style.container}`}>
                {
                    icons.map((icon, index) => {
                        return (
                            <NavigationMenu onClick={onClickNav} key={navId[index]} navId={navId[index]} image={icon} />
                        );
                    })
                }
            </div>
            <div className="col-4"></div>
        </div>
    );
}