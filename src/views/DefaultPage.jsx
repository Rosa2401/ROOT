import '../App.css'
import Facts from '../components/Facts'
import FiftyL from '../components/FiftyL'
import FiftyLIndhold from '../components/FiftyLIndhold'
import FiftyR from '../components/FiftyR'
import FiftyRIndhold from '../components/FiftyRIndhold'


function DefaultPage() {

  return (
    <div>
      <Facts/>
      <FiftyL {...FiftyLIndhold.voresTilgang}/>
      <FiftyR {...FiftyRIndhold.tidligereArbejde}/>
      <FiftyL {...FiftyLIndhold.vardier}/>
    </div>
  )
}

export default DefaultPage
