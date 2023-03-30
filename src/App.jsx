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
import { setError } from './store/error/error-slice';
import { CheckCircleFill, XCircleFill } from 'react-bootstrap-icons';
import { setNext, setPaginatedList, setPrev } from './store/project/paginated-slice';

function App() {
  const images = [profile, folder, contact];
  const imageId = ["profile", "project", "contact"]
  const theme = useSelector((store) => store.themeSlice.theme);
  const touch = useSelector((store) => store.touchSlice.touch);
  const finder = useSelector((store) => store.finderSlice.finder);
  const error = useSelector((store) => store.errorSlice.error);
  const page = useSelector((store) => store.pageSlice.page);
  const contactVisible = useSelector((store) => store.detailsSlice.contact);
  const profileVisible = useSelector((store) => store.detailsSlice.profile);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  var pageChecker = {};

  const fetchAllProjects = async () => {
    const allProjects = await ProjectAPI.fetchAll();
    dispatch(setProjectList(allProjects))
  }

  const fetchPaginatedProjects = async () => {
    const paginatedProjects = await ProjectAPI.fetchByPage(page);
    dispatch(setPaginatedList(paginatedProjects));
    pageChecker = paginatedProjects;

    if (pageChecker.data.pagination.previous) {
      dispatch(setPrev(true));
    }

    else {
      dispatch(setPrev(false));
    }

    if (pageChecker.data.pagination.next) {
      dispatch(setNext(true));
    }

    else {
      dispatch(setNext(false));
    }
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
        once = true;
        dispatch(setTouch(once));
      });
    }
  }, []);

  useEffect(() => {
    dispatch(setFinder(false));
    dispatch(setProject(null));
    dispatch(setProfile(false));
    dispatch(setContact(false));
    dispatch(setError(null));
  }, [])

  useEffect(() => {
    fetchPaginatedProjects();
  }, [page]);

  const toastEmailSentNotification = (
    <div className="toast-container top-0 end-0 p-3">
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <CheckCircleFill style={{ color: "green" }} className="rounded me-2" />
          <strong style={{ color: "green" }} className="me-auto">Message Sent</strong>
          <small className="text-body-secondary">just now</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Your email is successfully sent to Caitlin.
        </div>
      </div>
    </div>
  );

  const toastEmailErrorNotification = (
    <div className="toast-container top-0 end-0 p-3">
      <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <XCircleFill style={{ color: "red" }} className="rounded me-2" />
          <strong style={{ color: "red" }} className="me-auto">Message not sent</strong>
          <small className="text-body-secondary">just now</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Error Occurred. Please try again later.
        </div>
      </div>
    </div>
  );

  return (
    <div className={`row justify-content-center ${theme ? style.container : style.container_night}`}>
      {
      window.onblur = function (e) {
        window.scrollTo(0, 1);
        
      }}
      <div className={theme ? style.menu_bar : style.menu_bar_night}>
        <img src={logo} alt="Caitlin Logo" onClick={() => { navigate("/") }} className={style.logo} />
        <ThemeSlider />
      </div>
      <div className={style.profile_contact}>
        {
          finder ? <DetailBox contactDetails={contactVisible} profileDetails={profileVisible} /> : null
        }
      </div>
      <div className='notification'>
        {
          error ? toastEmailErrorNotification : toastEmailSentNotification
        }
      </div>

      <Outlet className={style.page} />

      <NavigationContainer onClickNav={menuOnClick} icons={images} navId={imageId} className={style.navigation} path={location.pathname} />
    </div>
  );
}

export default App;
