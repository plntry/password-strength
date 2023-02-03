import { useContext, useEffect, useRef } from 'react';
import { PasswordContext } from '../Password';
import s from './passwordInputStyles.module.css';

function PasswordInput() {
    const { password, setPassword } = useContext(PasswordContext);
    const passwordInputRef = useRef();

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
                type='password'
                value={password}
                onChange={e => setPassword(e.target.value)}
                ref={passwordInputRef}
            />
        </div>
    )
}

export default PasswordInput