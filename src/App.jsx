
import './App.css'
import ComponentA from './Components/Component 1/ComponentA'
import List from './Components/Component 3/List'
import Text from './Components/Component 2/Text'
import Navbar from './NavigationBar/NavBar'
function App() {


  return (
    <>
      <Navbar/>
<div className="component-container">
    <Text/>
    <ComponentA/>
</div>
   </>
  )
}

export default App
