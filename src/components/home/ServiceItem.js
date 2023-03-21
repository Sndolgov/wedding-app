import styles from './ServiceItem.module.css'
import icon from '../../asserts/image-icon.png'

const ServiceItem = (props) => {
    return (
        <li className={styles.item}>
            <img src={icon} alt="icon"/>
            <div className={styles.text}>
                <h2>{props.header}</h2>
                <p>{props.text}</p>
            </div>
        </li>
    )
}

export default ServiceItem