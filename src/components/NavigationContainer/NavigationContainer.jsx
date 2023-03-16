import { useSelector } from "react-redux";
import { NavigationMenu } from "../NavigationMenu/NavigationMenu";
import style from "./style.module.css"

export function NavigationContainer({ icons, navId }) {
    const theme = useSelector((store) => store.themeSlice.theme);

    return (
        <div className={`row justify-content-center ${theme ? style.bg_day : style.bg_night}`}>
            <div className="col-4"></div>
            <div className={`col-4 ${style.container}`}>
                {
                    icons.map((icon, index) => {
                        return (
                            <NavigationMenu key={navId[index]} navId={navId[index]} image={icon} />
                        );
                    })
                }
            </div>
            <div className="col-4"></div>
        </div>
    );
}