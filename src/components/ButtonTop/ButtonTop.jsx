import style from "./style.module.css"
import { ArrowUp } from 'react-bootstrap-icons'
import { useSelector } from "react-redux";

export function ButtonTop ( {onClick}) {
    const theme = useSelector((store) => store.themeSlice.theme);

    const handleOnclick = () => {
        onClick();
        };
    return (
        <div>
            <span className={style.button}>
                <ArrowUp size="50" onClick={handleOnclick} className={theme ? style.arrow : style.arrow_night} />
            </span>
        </div>
    );
}