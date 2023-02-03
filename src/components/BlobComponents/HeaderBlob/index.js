import s from './headerBlobStyles.module.css';

function HeaderBlob() {
    return (
        <>
            <div className={`${s.headerBlob}`}>
                <p className={s.headerBlobText}>Test{'\n'}password{'\n'}strength</p>
            </div>
        </>
    )
}

export default HeaderBlob;
