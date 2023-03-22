import style from "./style.module.css"
import { FolderFill } from "react-bootstrap-icons"
import { useSelector } from "react-redux";

export function ProjectFolder(props) {
    const theme = useSelector((store) => store.themeSlice.theme)
    return (
        <div className={style.container}>
                <FolderFill className={`${style.folder} ${theme ? style.folder_day : style.folder.night}`}/>
                <p className={`${style.file_name} ${theme ? style.file_name_day : style.file_name_night}`}>Baybay-it</p>
        </div>
    );
}