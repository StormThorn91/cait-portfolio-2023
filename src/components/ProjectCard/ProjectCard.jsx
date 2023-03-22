import style from "./style.module.css";

export function ProjectCard({onClick, projectItem}) {

    const handleOnClick = (e) => {
        onClick(e, projectItem);
    }
    return (
        <div className={style.container} onClick={handleOnClick}>
            <img src="https://img.freepik.com/free-vector/flat-design-lake-scenery_23-2149161405.jpg?w=2000" alt={projectItem.title} className={style.image} />
            <div className={style.title}>{projectItem.title}</div>
        </div>
    );
}