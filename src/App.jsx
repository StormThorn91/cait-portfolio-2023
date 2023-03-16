import './App.css';
import { NavigationContainer } from './components/NavigationContainer/NavigationContainer';
import { Outlet } from 'react-router-dom';
import contact from "./assets/images/email_flat_icons.png";
import folder from "./assets/images/folder_kmg_design.png";
import profile from "./assets/images/resume_freepik.png";
import style from "./style.module.css"
import { useSelector } from 'react-redux';
import { ThemeSlider } from './components/ThemeSlider/ThemeSlider';

function App() {
  const images = [profile, folder, contact];
  const imageId = ["profile", "project", "contact"]
  const theme = useSelector((store) => store.themeSlice.theme);
  return (
    <div className={`row justify-content-center ${theme ? style.container : style.container_night}`}>
      <div className={theme ? style.menu_bar : style.menu_bar_night}>
        <ThemeSlider />
      </div>
      <Outlet className={style.page} />
      <NavigationContainer icons={images} navId={imageId} className={style.navigation} />
    </div>
  );
}

export default App;
