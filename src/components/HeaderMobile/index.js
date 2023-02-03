import s from './headerMobileStyles.module.css';

function HeaderMobile() {
    return (
        <>
            <div className={`${s.headerMobile}`}>
                <p className={s.headerMobileText}>Test password strength</p>
            </div>
        </>
    )
}

export default HeaderMobile;
