import Tmovie from "./Tmovie"
import Tseries from "./Tseries"
import Treanding from "./Treanding"
import Footer from "./Footer"


function Main() {
  return (
    <div className="main">
        <Treanding/>
        <Tmovie/>
        <Tseries/>
        <Footer/>
    </div>
  )
}

export default Main