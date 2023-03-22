import style from "./style.module.css"

export function NavigationMenu({image, navId, onClick}) {
    
    const handleOnClick = (id) => {
        onClick(id)
    }

    return (
        <div className={`${style.nav_container}`}>
            <img src={image} id={navId} alt={navId} onClick={() => handleOnClick(navId)} className={style.icon} />
        </div>
    )
}