import Banner from '../../components/Banner/Banner';
import backgroundImage from "../../assets/banner-background.svg";

const postgresLandingBannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
}

const PostgresLanding = () => {
    return (
        <Banner specificStyles={{ ...postgresLandingBannerStyles }} >
            <h1>Dummy</h1>
         </Banner >
    )
}

export default PostgresLanding;