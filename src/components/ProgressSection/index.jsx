import { useContext } from 'react';
import { PasswordContext } from '../Password';
import s from './progressStyles.module.css';

function ProgressSection({ id }) {  
    const password = useContext(PasswordContext).password;

    let addStyles;

    const lettersRegex = /[A-Za-z]/g;
    const digitsRegex = /[0-9]/g;
    const symbolsRegex = /\W/g;

    const regExpressions = [lettersRegex, digitsRegex, symbolsRegex];

    const symbolsMatchRegex = (str, regex) => str.match(regex);
    
    const doesStrHasRegex = (str, regex) => str.match(regex) !== null;
    
    if (password.length > 0) {
        if (password.length < 8) {
            addStyles = ` ${s.red}`;
        } else {
            regExpressions.forEach((regex) => {
                if (doesStrHasRegex(password, regex)) {
                    if (symbolsMatchRegex(password, regex).length === password.length) {
                        addStyles = id === 0 ? ` ${s.red}` : ``;
                    } else {
                        let matchCount = 1;

                        regExpressions.filter((otherRegex) => otherRegex !== regex).forEach((secRegex) => {
                            matchCount += doesStrHasRegex(password, secRegex) ? 1 : 0;
                        })

                        addStyles = matchCount === 3 ? ` ${s.green}` : id === 2 ? `` : ` ${s.yellow}`;
                    }
                }
            })
        }
    }

    return (
        <>
            <div className={`${s.progressSection} ${addStyles}`}></div>
        </>
    )
}

export default ProgressSection;