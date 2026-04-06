import '../App.css'
import Facts from '../components/Facts'
import FiftyL from '../components/FiftyL'
import FiftyLIndhold from '../components/FiftyLIndhold'
import FiftyR from '../components/FiftyR'
import FiftyRIndhold from '../components/FiftyRIndhold'
import InfoboxesS from '../components/InfoboxesS'


function DefaultPage() {

  return (
    <div>
      <Facts/>
      <FiftyL {...FiftyLIndhold.voresTilgang}/>
      <FiftyR {...FiftyRIndhold.tidligereArbejde}/>
      <InfoboxesS/>
      <FiftyL {...FiftyLIndhold.vardier}/>
    </div>
  )
}

export default DefaultPage
