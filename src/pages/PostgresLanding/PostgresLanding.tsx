import Banner from '../../components/Banner/Banner';
import backgroundImage from "../../assets/banner-background.svg";
import { BannerHeader, BannerContent } from '../../components/Banner';
import { leftMenu, rightMenu } from './PostgresLanding.helper';
import Button from '../../components/Base/Button/Button';
import { GitHubBtn, Search } from './HeaderElements';

const postgresLandingBannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
}

const PostgresLanding = () => {
    return (
        <Banner customStyles={{ ...postgresLandingBannerStyles }} >
            <div className='max-w-7xl m-auto p-7'>
                <BannerHeader
                    left={{ headerLinks: leftMenu, startSlot: <GitHubBtn /> }}
                    right={{ headerLinks: rightMenu, startSlot: <Search />, endSlot: <Button label="Get Started" customClass='bg-black rounded text-white px-4 py-1.5 ml-3' /> }}
                />
                <BannerContent />
            </div>
         </Banner >
    )
}

export default PostgresLanding;