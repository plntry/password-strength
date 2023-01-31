import { useEffect, useRef, useState } from "react";
import ProgressSectionList from "../ProgressSectionList";
import s from './passwordInputStyles.module.css';

function PasswordInput() {
    const [password, setPassword] = useState('');
    console.log(password);
    
    const passwordInputRef = useRef();

    useEffect(() => {
        passwordInputRef.current.focus();
    }, []);

    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <label>
                    Password:
                </label>
                <input
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    ref={passwordInputRef}
                />
            </div>
            <ProgressSectionList numberOfSections={3} />
        </div>
    )
}

export default PasswordInput