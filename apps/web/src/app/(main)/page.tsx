import { IOfferCardItem, MainOfferCard, MainProductCard } from '@/components'
import {
  BrandCarousel,
  CommentCarousel,
  HomeCarousel,
  IBrandCarouselItem,
  ICommentCarouselItem,
  IHomeCarouselItem,
  ProductCarousel,
} from '@/sections'



// const homeCarouselArray = [
//   {
//     title: "Mega Store",
//     desc1: "Trending",
//     desc2: "Fashion Look",
//     subtitle: "New Clothes, New Passion",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/modules/ps_imageslider/images/8187e2cea6dcd5e1b98a1b1af132211cf94c9a8e_Slider-1.jpg"
//   },
//   {
//     title: "Dress Well",
//     desc1: "Summer",
//     desc2: "Collection",
//     subtitle: "Sale Up To 40% Off",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/modules/ps_imageslider/images/4d4d5897cf3d07949875e686ef53f604262c00c5_Slider-2.jpg"
//   }
// ]

// const homeOffersArray = [
//   {
//     title: "New Arrivals",
//     desc: "Women Collections",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/cms/offer-img-1.jpg",
//   },
//   {
//     title: "New Arrivals",
//     desc: "Man Collections",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/cms/offer-img-2.jpg",
//   },
// ]
// const homeCommentsArray = [
//   {
//     name: "Alex Carter",
//     jobTitle: "Web Developer",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/cms/testimonial-img-1.jpg",
//   },
//   {
//     name: "Alina Joy",
//     jobTitle: "Customer",
//     desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which slightly believable.",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/cms/testimonial-img-2.jpg",
//   },
//   {
//     name: "John Doe",
//     jobTitle: "Web Designer",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/cms/testimonial-img-3.jpg",
//   },
// ]

// const homeBrandsArray = [
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/1.jpg",
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/2.jpg"
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/3.jpg"
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/4.jpg"
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/5.jpg"
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/6.jpg"
//   },
//   {
//     imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/img/m/7.jpg"
//   },
// ]

async function getData() {

  const homeCarouselArray = await fetch('http://localhost:3005/homeCarouselArray', { cache: "no-cache" })
  const homeOffersArray = await fetch('http://localhost:3005/homeOffersArray', { cache: "no-cache" })
  const homeCommentsArray = await fetch('http://localhost:3005/homeCommentsArray', { cache: "no-cache" })
  const homeBrandsArray = await fetch('http://localhost:3005/homeBrandsArray', { cache: "no-cache" })
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }

  const homeCarousel = await homeCarouselArray.json()
  const homeOffers = await homeOffersArray.json()
  const homeComments = await homeCommentsArray.json()
  const homeBrands = await homeBrandsArray.json()

  // console.log({ homeOffers });
  // return { homeCarouselArray, homeOffersArray, homeCommentsArray, homeBrandsArray }
  return { homeCarousel, homeOffers, homeComments, homeBrands }

}


export default async function Home() {

  const {
    homeCarousel,
    homeOffers,
    homeComments,
    homeBrands,
  }: {
    homeCarousel: Array<IHomeCarouselItem>,
    homeOffers: Array<IOfferCardItem>,
    homeComments: Array<ICommentCarouselItem>,
    homeBrands: Array<IBrandCarouselItem>
  } = await getData()


  return (
    <div className="">

      {/*******************  header carousel ********************/}
      <HomeCarousel items={homeCarousel} />

      <div className="container">
        {/*******************  featured products ********************/}
        <div className='container p-2 pt-5'>

          <h2 className='text-[36px] text-center uppercase font-[500]'>
            Featured Product
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
        <div className='container p-2 py-16'>
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
        <div className='container p-2 pt-5 pb-20'>

          <h2 className='font-[500] text-[24px] sm:text-[36px] text-center uppercase'>
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
          <h3 className='text-[24px] sm:text-[36px] text-white text-center flex flex-col items-center font-[500]'>
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
            <h2 className='font-[500] text-[24px] sm:text-[36px] text-center'>
              BRANDS
            </h2>

            <div className='w-[100px] h-[3px] bg-red-600 m-auto mb-8 mt-3'></div>
            <BrandCarousel slides={homeBrands} />
          </div>
        </div>
      </div>

    </div>
  )
}
