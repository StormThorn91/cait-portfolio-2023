import style from "./style.module.css";

export function ProjectCard({onClick, projectItem}) {

    const handleOnClick = (e) => {
        onClick(e, projectItem);
    }
    return (
        <div className={style.container} onClick={handleOnClick}>
            <img src={projectItem.image} alt={projectItem.title} className={style.image} />
            <div className={style.title}>{projectItem.title}</div>
        </div>
    );
}