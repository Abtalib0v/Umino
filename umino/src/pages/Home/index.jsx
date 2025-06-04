import React from 'react'
import BannerSlider from '../../sections/BannerSlider'
import NewArrivals from '../../sections/NewArrivals'
import Cards from '../../shared/Cards'
import MightLike from '../../sections/MightLike'
import TrendingGrid from '../../sections/TrendingGrid'
import ComparisonImage from '../../sections/ComparisonImages'
import AboutSection from '../../sections/AboutSection'
import TheBlog from '../../sections/TheBlog'
import AnchorTemporaryDrawer from '../../shared/ShearchBtn'

const HomePage = () => {
  return (
    <div>
        <BannerSlider/>
        <NewArrivals/>
        <MightLike/>
        <TrendingGrid/>
        <ComparisonImage/>
        <AboutSection/>
        <TheBlog/>
        <AnchorTemporaryDrawer/>
    
    </div>
  )
}

export default HomePage