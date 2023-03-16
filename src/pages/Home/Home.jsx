import { ThemeSlider } from "../../components/ThemeSlider/ThemeSlider";
import style from "./style.module.css"
import bannerDay from "../../assets/images/banner-day.svg"
import bannerNight from "../../assets/images/banner-night.svg"
import { useSelector } from "react-redux";
export function Home(props) {
    const theme = useSelector((store) => store.themeSlice.theme);
    return (
    <div className={`row`}>
        <div className="col-2"></div>
        <div className="col-8 justify-content-center">
        <div className={style.banner}>
        <img src={theme? bannerDay: bannerNight} className={style.banner_img} />
        </div>
        </div>
        <div className="col-2"></div>
    </div>
    );
}