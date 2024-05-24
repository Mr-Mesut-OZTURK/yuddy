import {
  BrandCarousel,
  CommentCarousel,
  HomeCarousel,
  IBrandCarouselItem,
  ICommentCarouselItem,
  IHomeCarouselItem,
  ProductCarousel,
} from '@/sections'
import { IOfferCardItem, MainOfferCard, MainProductCard } from '@/components'


async function getData() {

  const bannersResponse = await fetch('http://localhost:3005/banners', { cache: "no-cache" })
  const homeOffersArray = await fetch('http://localhost:3005/homeOffersArray', { cache: "no-cache" })
  const homeCommentsArray = await fetch('http://localhost:3005/homeCommentsArray', { cache: "no-cache" })
  const brandsResponse = await fetch('http://localhost:3005/brands', { cache: "no-cache" })

  const banners = await bannersResponse.json()
  const homeOffers = await homeOffersArray.json()
  const homeComments = await homeCommentsArray.json()
  const brands = await brandsResponse.json()

  return { banners, homeOffers, homeComments, brands }

}

export default async function Home() {

  const {
    banners,
    homeOffers,
    homeComments,
    brands,
  }: {
    banners: Array<IHomeCarouselItem>,
    homeOffers: Array<IOfferCardItem>,
    homeComments: Array<ICommentCarouselItem>,
    brands: Array<IBrandCarouselItem>
  } = await getData()


  return (
    <div className="">

      {/*******************  header carousel ********************/}
      <HomeCarousel items={banners} />

      <div className="container">
        {/*******************  featured products ********************/}
        <div className='container p-2 pt-5'>

          <h2 className='text-[20px] sm:text-[36px] text-center uppercase font-[500]'>
            Featured Products
          </h2>

          <div className='w-[100px] h-[3px] bg-red-600 m-auto mb-8 mt-3'></div>

          <div className='grid gap-3 sm:gap-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4'>

            {
              [1, 2, 3, 4, 5, 6, 7, 8]?.map((item, index) => {

                return (
                  <MainProductCard
                    key={index}
                  />
                )
              })
            }

          </div>
        </div>

        {/*******************  offer cards ********************/}
        <div className='container p-2 py-8 sm:py-16'>
          <div className='grid gap-3 sm:gap-10 grid-cols-1 sm:grid-cols-2'>

            {
              homeOffers?.map((item, index) => {

                return (
                  <MainOfferCard
                    item={item}
                    key={index}
                  />
                )
              })
            }

          </div>
        </div>

        {/*******************  new products carousel ********************/}
        <div className='container p-2 sm:pt-5 pb-20'>

          <h2 className='font-[500] text-[20px] sm:text-[36px] text-center uppercase'>
            New Products
          </h2>

          <div className='w-[100px] h-[3px] bg-red-600 m-auto mb-8 mt-3'></div>

          <div className=''>
            <ProductCarousel slides={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </div>
        </div>
      </div>

      {/*******************  comments carousel ********************/}
      <div
        className='min-h-[auto] md:min-h-[90vh] py-10'
        style={{
          backgroundImage: `url("https://demo4techies.com/prestashop/shopkart-lite/themes/shopkart_lite/assets/img/testimonilas-bg-img.jpg")`,
          // minHeight: "90vh",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: 'relative',

          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-[#000b] z-0'></div>
        <div className='container py-5 z-10'>
          <h3 className='text-[20px] sm:text-[36px] text-white text-center flex flex-col items-center font-[500]'>
            WHAT CLIENT SAYS
            <span className='w-[100px] h-[3px] bg-red-600 mb-10 mt-8'></span>
          </h3>
          <CommentCarousel slides={homeComments} />
        </div>
      </div>

      {/*******************  brands carousel ********************/}
      <div className="container">
        <div className=''>
          <div className='container py-20'>
            <h2 className='font-[500] text-[20px] sm:text-[36px] text-center'>
              BRANDS
            </h2>

            <div className='w-[100px] h-[3px] bg-red-600 m-auto mb-8 mt-3'></div>
            <BrandCarousel slides={brands} />
          </div>
        </div>
      </div>

    </div>
  )
}
