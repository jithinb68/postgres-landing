import Banner from '../../components/Banner/Banner';
import backgroundImage from "../../assets/banner-background.svg";
import { BannerHeader, BannerContent } from '../../components/Banner';

const postgresLandingBannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
}

const PostgresLanding = () => {
    return (
        <Banner specificStyles={{ ...postgresLandingBannerStyles }} >
            <BannerHeader />
            <BannerContent />
         </Banner >
    )
}

export default PostgresLanding;