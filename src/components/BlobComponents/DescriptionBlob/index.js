import s from './descriptionBlobStyles.module.css';

function DescriptionBlob() {
    return (
        <div className={s.descriptionBlob}>
            <div className={s.descriptionBlobText}>
            Rules
            <p>
                Password must be at least 8 <span style={{color: 'rgb(200, 54, 54)'}}>characters</span>{'\n'}
                Only letters/digits/symbols - the password is <span style={{color: 'rgb(200, 54, 54)'}}>e</span><span className={s.halfColored}>a</span>sy{'\n'}
                Combination of letters-symbols/letters-digits/digits-symbols - the password is <span style={{color: 'rgb(191, 131, 0)'}}>medi</span>um{'\n'}
                Has letters, symbols and numbers - the password is <span style={{color: 'rgb(19, 152, 96)'}}>strong</span>
            </p>
            </div>
        </div>
    )
}

export default DescriptionBlob;
