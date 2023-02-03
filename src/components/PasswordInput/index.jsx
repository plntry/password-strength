import { useContext, useEffect, useRef, useState } from 'react';
import { PasswordContext } from '../Password';
import s from './passwordInputStyles.module.css';

function PasswordInput() {
    const { password, setPassword } = useContext(PasswordContext);
    const passwordInputRef = useRef();

    const [passwordShown, setPasswordShown] = useState(false);

    useEffect(() => {
        passwordInputRef.current.focus();
    }, []);

    return (
        <div className={s.inputContainer}>
            <label>
                Password:
            </label>
            <input
                name='password'
                placeholder='Password'
                type={passwordShown ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                ref={passwordInputRef}
            />
            <button onClick={() => setPasswordShown(!passwordShown)}>
                <i className={`fa-regular ${passwordShown ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </button>
        </div>
    )
}

export default PasswordInput;