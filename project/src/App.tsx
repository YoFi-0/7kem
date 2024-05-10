
import "./style/global.css"
import Index from "./pages/Index/Page"
import Pro, {useIndexContext} from "./pages/Index/Context"
function App() {


  return (
    <Pro>
      <Index/>
    </Pro>
  )
}

export default App
