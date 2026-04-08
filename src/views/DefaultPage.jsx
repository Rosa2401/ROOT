import '../App.css'
import Facts from '../components/Facts'
import FiftyL from '../components/FiftyL'
import FiftyLIndhold from '../components/FiftyLIndhold'
import FiftyR from '../components/FiftyR'
import FiftyRIndhold from '../components/FiftyRIndhold'
import InfoboxesS from '../components/InfoboxesS'
import TiltagBox from '../components/Tiltag'
import HeroSection from '../components/Hero'


function DefaultPage() {

  return (
    <div>
      <HeroSection/>
      <div className="-mt-32"> {/* adjust -mt-32 to control overlap */}
    <Facts />
  </div>
      <FiftyL {...FiftyLIndhold.voresTilgang}/>
      <TiltagBox/>
      <FiftyR {...FiftyRIndhold.tidligereArbejde}/>
      <InfoboxesS/>
      <FiftyL {...FiftyLIndhold.vardier}/>
    </div>
  )
}

export default DefaultPage
