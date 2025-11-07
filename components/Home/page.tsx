
// import HeroSection from './Hero/page'
// import OurTrendingProduct from '../Trand/page'

// const Home = () => {
//   return (
//     <section><HeroSection></HeroSection></section>
//     <section><OurTrendingProduct></OurTrendingProduct></section>
//   )
// }

// export default Home


import HeroSection from './Hero/page'
import OurTrendingProduct from '../Trand/page'
import Offer from '../Offer/page'
import CategoryPage from '../Catagory/page'
import TestimonialCarousel from '../Carosel/page'

const Home = () => {
  return (
    <>
      <section>
        <HeroSection />
      </section>

      <section>
        <OurTrendingProduct />
      </section>

       <section>
        <Offer />
      </section>
      <section>
        <CategoryPage />
      </section>

      <section>
        <TestimonialCarousel />
      </section>
    </>
  )
}

export default Home
