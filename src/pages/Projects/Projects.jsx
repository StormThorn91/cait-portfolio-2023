import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProjectAPI } from "../../api/ProjectAPI";
import { DetailBox } from "../../components/DetailBox/DetailBox";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { setFinder } from "../../store/finder/finder-slice";
import { setNext, setPaginatedList, setPrev } from "../../store/project/paginated-slice";
import { setProject } from "../../store/project/project-slice";
import style from "./style.module.css"

export function Projects(props) {
    const theme = useSelector((store) => store.themeSlice.theme);
    const finder = useSelector((store) => store.finderSlice.finder);
    const touch = useSelector((store) => store.touchSlice.touch);
    const projectsList = useSelector((store) => store.projectSlice.projectList);
    const page = useSelector((store) => store.pageSlice.page);
    const pagedList = useSelector((store) => store.paginatedSlice.paginatedList);
    const projectItem = useSelector((store) => store.projectSlice.project);
    const contactVisible = useSelector((store) => store.detailsSlice.contact);
    const profileVisible = useSelector((store) => store.detailsSlice.profile);
    
    const dispatch = useDispatch();

    const fetchPaginatedProjects =  async () => {
        const paginatedProjects = await ProjectAPI.fetchByPage(page);
        console.log(paginatedProjects);
        dispatch(setPaginatedList(paginatedProjects));
      }

    console.log('paged' + pagedList.data.pagination.results);
    console.log('project' + projectsList);
 
    const handleOnclick = (e, projectItem_) => {
        switch (e.detail) {
            case 1: {
                dispatch(setFinder(true));
                dispatch(setProject(projectItem_));
                break;
            }
        }
    }

    useEffect(() => {
        const forFetch = async () => {
            await fetchPaginatedProjects();
            setNext(pagedList.data.pagination.next != null)
            setPrev(pagedList.data.pagination.prev != null)
          }
      
          forFetch()
          
        },[page]);

    return (
        <div className={style.bg_night}>
            <div className={style.project_item}>
                {
                finder ? <DetailBox projectContent={projectItem} contactDetails={contactVisible} profileDetails={profileVisible} /> : null
                }
            </div>
            <div className={`col justify-content-center text-center ${style.container}`}>
                <h1 className={`col-12 text-center ${theme ? style.title : style.title_night}`}>Projects</h1>
                <div className={`col-12 justify-content-center`}>
                    {
                        touch ? 
                        <ProjectList projectList={projectsList} onClickItem={handleOnclick} /> :
                        <ProjectList paginatedList={pagedList.data.pagination.results} onClickItem={handleOnclick} />
                    }

                </div>
            </div>
        </div>
    )
}