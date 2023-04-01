import { useSelector } from "react-redux";
import style from "./style.module.css";

export function ProjectCard({ onClick, projectItem }) {

    const loading = useSelector((store) => store.paginatedSlice.loading);

    const handleOnClick = (e) => {
        onClick(e, projectItem);
    }


    const loader = (
        <div className={style.loader_container}>
            <div className={style.spinner}></div>
        </div>
    )

    return (
        <div className={style.container} onClick={handleOnClick}>
            {
                loading ? loader :
                    <div>
                        <img src={projectItem.image} alt={projectItem.title} className={style.image} />
                        <div className={style.title}>{projectItem.title}</div>
                    </div>
            }
        </div>
    );
}