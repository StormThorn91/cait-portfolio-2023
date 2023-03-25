import './App.css';
import { NavigationContainer } from './components/NavigationContainer/NavigationContainer';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import contact from "./assets/images/contact.png";
import folder from "./assets/images/folder_kmg_design.png";
import profile from "./assets/images/profile.png";
import logo from './assets/images/logo.png'
import style from "./style.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { ThemeSlider } from './components/ThemeSlider/ThemeSlider';
import { useEffect } from 'react';
import { setTouch } from './store/touch/touch-slice';
import { DetailBox } from './components/DetailBox/DetailBox';
import { setProject, setProjectList } from './store/project/project-slice';
import { ProjectAPI } from './api/ProjectAPI';
import { setFinder } from './store/finder/finder-slice';
import { setContact, setProfile } from './store/details/detailsSlice';

function App() {
  const images = [profile, folder, contact];
  const imageId = ["profile", "project", "contact"]
  const theme = useSelector((store) => store.themeSlice.theme);
  const touch = useSelector((store) => store.touchSlice.touch);
  const finder = useSelector((store) => store.finderSlice.finder);
  const contactVisible = useSelector((store) => store.detailsSlice.contact);
  const profileVisible = useSelector((store) => store.detailsSlice.profile);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchAllProjects = async () => {
    const allProjects = await ProjectAPI.fetchAll();
    dispatch(setProjectList(allProjects))
  }

  const menuOnClick = (id) => {
    if (id === "project") {
      navigate("/projects")
    }

    else if (id === "profile") {
      dispatch(setFinder(true));
      dispatch(setProfile(true));
    }

    else if (id === "contact") {
      dispatch(setFinder(true));
      dispatch(setContact(true));
    }
  }
  useEffect(() => {
    fetchAllProjects();
    if (window.addEventListener) {
      var once = false;
      window.addEventListener('touchstart', () => {
        if (!once) {
          once = true;
          dispatch(setTouch(once));
        }
        else {
          dispatch(setTouch(false));
        }
      });
    }
  }, [touch]);

  useEffect(() => {
        dispatch(setFinder(false));
        dispatch(setProject(null));
        dispatch(setProfile(false));
        dispatch(setContact(false));
  },[])

  return (
    <div className={`row justify-content-center ${theme ? style.container : style.container_night}`}>
      <div className={theme ? style.menu_bar : style.menu_bar_night}>
        <img src={logo} alt="Caitlin Logo" className={style.logo} />
        <ThemeSlider />
      </div>
      <div className={style.profile_contact}>
        {
          finder ? <DetailBox contactDetails={contactVisible} profileDetails={profileVisible} /> : null
        }
      </div>
      <Outlet className={style.page} />

      <NavigationContainer onClickNav={menuOnClick} icons={images} navId={imageId} className={style.navigation} path={location.pathname} />
    </div>
  );
}

export default App;
