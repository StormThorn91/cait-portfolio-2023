import style from "./style.module.css"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/theme/theme-slice";

export function ThemeSlider(props) {
    const [checked, setChecked] = useState(true);
    const checkbox = useRef();
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.themeSlice.theme);

    useEffect(() => {
        setChecked(theme);
    },[])

    const handleCheckBox = () => {
        if(checkbox.current.checked) {
            setChecked(true)
            dispatch(setTheme(true));
        }

        else {
            setChecked(false)
            dispatch(setTheme(false));
        }
    }

    console.log(checked)

    return (
        <div>
            <label className={`${style.switch}`}>
                <input type="checkbox" ref={checkbox} className={style.checkbox} onChange={() => checked} />
                    <span onClick={handleCheckBox} className={`${style.toggle_thumb} ${checked ? style.toggle_thumb_day : style.toggle_thumb_night}`}>
                        <div className={style.night}>  </div>
                        <div className={style.day}>  </div>
                    </span>
            </label>
            <div>
                <p>{checked}</p>
            </div>
        </div>
    );
}