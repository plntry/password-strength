import ProgressSection from "../ProgressSection"
import s from './progressSectionListStyles.module.css'

function ProgressSectionList({ numberOfSections }) {
    return (
        <div className={s.container}>
            {[...Array(numberOfSections)].map((value, index) => {
                return <ProgressSection key={index} />
            })}
        </div>
    )
}

export default ProgressSectionList