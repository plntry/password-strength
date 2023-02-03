import s from './App.module.css';
import Password from './components/Password';
import basicBackground from './img/basicBackground.png';


function App() {
  return (
    <div className={s.App} style={{ backgroundImage: `url(${basicBackground})` }}>
      <div className={s.headerBlob}>
        <p className={s.headerBlobText}>Test{'\n'}password{'\n'}strength</p>
      </div>
      <Password />
      <div className={s.descriptionBlob}>
        <div className={s.descriptionBlobText}>
          Rules
          <p>Only letters/digits/symbols - the password is easy;{'\n'}
            Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;{'\n'}
            Has letters, symbols and numbers - the password is strong;
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
