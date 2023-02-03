import { createContext, useState } from 'react';
import PasswordInput from '../PasswordInput';
import ProgressSectionList from '../ProgressSectionList';
import s from './passwordStyles.module.css';

export const PasswordContext = createContext();

function Password() {
    const [password, setPassword] = useState('');

    const contextValue = {
        password,
        setPassword
    }

    return (
        <div className={s.container}>
            <PasswordContext.Provider value={contextValue}>
                <PasswordInput />
                <ProgressSectionList numberOfSections={3} />
            </PasswordContext.Provider>
        </div>
    )
}

export default Password;