import { HomeCarousel } from '@/sections'
import { YButton } from '@yuddy/shared-ui'
import Image from 'next/image'


const homeSliderArray = [
  {
    title: "Mega Store",
    desc1: "Trending",
    desc2: "Fashion Look",
    subtitle: "New Clothes, New Passion",
    imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/modules/ps_imageslider/images/8187e2cea6dcd5e1b98a1b1af132211cf94c9a8e_Slider-1.jpg"
  },
  {
    title: "Dress Well",
    desc1: "Summer",
    desc2: "Collection",
    subtitle: "Sale Up To 40% Off",
    imgUrl: "https://demo4techies.com/prestashop/shopkart-lite/modules/ps_imageslider/images/4d4d5897cf3d07949875e686ef53f604262c00c5_Slider-2.jpg"
  }
]

export default function Home() {
  return (
    <main className="">

      <HomeCarousel slides={homeSliderArray} />


      {/* <YButton>Click Me</YButton> */}



    </main>
  )
}
