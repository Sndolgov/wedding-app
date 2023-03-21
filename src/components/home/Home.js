import Slider from "./Slider";
import ServiceList from "./ServiceList";
import styles from "./Home.module.css";


const Home = () => {
    return (
        <div className={styles.container}>
            <Slider/>
            <ServiceList/>
        </div>
    )
}

export default Home