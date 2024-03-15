import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from "./Component/LoginPage/LoginPage"
import SignupPage from "./Component/SignupPage/SignupPage"
import AuthRoute from './Component/Others/AuthRoute'
import Support from './Component/Others/Support'


function App() {

  return (
    <BrowserRouter>
<Routes>
  <Route path='/' element={<LoginPage/> }/>
  <Route path='/SignupPage' element={<SignupPage/>}/>
  <Route path='/LogIn' element={<LoginPage/>}/>
  <Route path='/Support' element={
    <AuthRoute>
      <Support />
    </AuthRoute>
  }/>

  {/*404 error*/}
{/*<Route
path='*' element={<h1 style={{textAlign:'center'}}>404.Not Found</h1>}
  />*/}
</Routes>

    </BrowserRouter>
  )
}

export default App
