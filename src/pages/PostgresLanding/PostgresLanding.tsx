import Banner from '../../components/Banner/Banner';
import backgroundImage from "../../assets/banner-background.svg";
import { BannerHeader, BannerContent } from '../../components/Banner';
import { leftMenu, rightMenu, cardList } from './PostgresLanding.helper'
import Button from '../../components/Base/Button/Button';
import { GitHubBtn, Search, CustomCardContent } from './HelperComponents';
import Card from '../../components/Base/Card/Card';

const postgresLandingBannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
}

const PostgresLanding = () => {
    return (
        <Banner customStyles={{ ...postgresLandingBannerStyles }} >
            <div className='max-w-7xl m-auto p-7'>
                <BannerHeader
                    isLogoRequired={true}
                    left={{ headerLinks: leftMenu, startSlot: <GitHubBtn /> }}
                    right={{ headerLinks: rightMenu, startSlot: <Search />, endSlot: <Button label="Get Started" customClass='bg-black-light rounded text-white px-4 py-1.5 ml-3' /> }}
                />
                <BannerContent >
                    <div className='flex py-20'>
                        <div>
                            <div className='text-5xl font-bold pb-8 pt-3'>GraphQL API for PostgreSQL Instantly!</div>
                            <div className='text-2xl font-light pb-8'>Point to your Postgres database and get fully-featured, secure, and performant GraphQL APIs – in minutes!</div>
                            <Button label="Get Started" customClass='bg-black-base rounded text-white text-base px-12 py-3 font-medium' />
                        </div>
                        <div>
                            <iframe title='hasura video' className='hasura-video-iframe' src="https://www.youtube.com/embed/xiZ61BkMKo8"></iframe>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-10'>
                        {cardList.map((item, index) => <Card
                            key={index}
                            cardItem={item}
                            customCardContent={<CustomCardContent cardContent={item.content} />}
                            customClass="flex flex-col justify-between h-full shadow-md cursor-pointer rounded-lg bg-white px-5 py-4"
                            titleCustomClass="pb-8 text-base text-blue font-semibold"
                        />)}
                    </div>
                </BannerContent>
            </div>
         </Banner >
    )
}

export default PostgresLanding;