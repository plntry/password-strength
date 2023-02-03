import { useEffect, useState } from 'react';
import s from './App.module.css';
import DescriptionBlob from './components/BlobComponents/DescriptionBlob';
import HeaderBlob from './components/BlobComponents/HeaderBlob';
import DescriptionMobile from './components/DescriptionMobile';
import HeaderMobile from './components/HeaderMobile';
import Password from './components/Password';
import basicBackground from './img/basicBackground.png';

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize.innerWidth);
  return (
    <div className={s.App} style={{ backgroundImage: `url(${basicBackground})` }}>
      {windowSize.innerWidth <= 1320 ? <HeaderMobile /> : <HeaderBlob />}
      <Password />
      {windowSize.innerWidth <= 1320 ? <DescriptionMobile /> : <DescriptionBlob />}
    </div>
  );
}

export default App;
