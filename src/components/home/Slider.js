import background from "../../asserts/banner.jpeg";
import styles from './Slider.module.css'

const Slider = () => {
    return (
        <div className={styles.container}>
            <img src={background} alt='background'></img>
            <div className={styles.slider}>Centered</div>
        </div>
        // <div className={styles.container} style={{backgroundImage: `url(${background})`}}>
        //     {/*<img src={background} alt='background'/>*/}
        //     <div className={styles.slider}>Centered</div>
        // </div>
    )
}

export default Slider