import '../App.css'
import Facts from '../components/Facts'
import FiftyL from '../components/FiftyL'
import FiftyLIndhold from '../components/FiftyLindhold'
import FiftyR from '../components/FiftyR'
import FiftyRindhold from '../components/FiftyRindhold'


function DefaultPage() {

  return (
    <div>
      <Facts/>
      <FiftyL {...FiftyLIndhold.voresTilgang}/>
      <FiftyR {...FiftyRindhold.tidligereArbejde}/>
      <FiftyL {...FiftyLIndhold.vardier}/>
    </div>
  )
}

export default DefaultPage
