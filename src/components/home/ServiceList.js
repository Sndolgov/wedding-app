import styles from "./ServiceList.module.css";
import ServiceItem from "./ServiceItem";

const DUMMY_SERVICES = [
    {id: 1, header: 'Header1', text: 'Main page - the cover of the site on which the main information about the services provided is located'},
    {id: 2, header: 'Header2', text: 'Main page - the cover of the site on which the main information about the services provided is located'},
    {id: 3, header: 'Header3', text: 'Main page - the cover of the site on which the main information about the services provided is located'},
    {id: 4, header: 'Header4', text: 'Main page - the cover of the site on which the main information about the services provided is located'}
]

const ServiceList = () => {

    const getServices = () => {
        const columesNumber = 2;
        const serviceItems = {}
        for (let i = 1; i <= columesNumber; i++) {
                serviceItems[i] = []
        }
        DUMMY_SERVICES.forEach((service, index) => {
            const i = index%columesNumber + 1
            serviceItems[i].push(<ServiceItem key={service.id} header={service.header} text={service.text}/>)
        })

        return Object.values(serviceItems).map(services => {
            return <ul>
                {services.map(service => {
                    return service
                })}
            </ul>
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles['service-list']}>
                <h1>Service list</h1>
                <div className={styles.services}>
                    {getServices()}
                </div>
            </div>
        </div>
    )
}

export default ServiceList