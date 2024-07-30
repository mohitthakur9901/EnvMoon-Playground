
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthRoute from './components/AuthRoute'
import SignInPage from './pages/SignIn'
import Error from './pages/Error'
import Landing from './pages/Landing'
import Layout from './components/Layout'
import { Appbar } from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <BrowserRouter>
      <Appbar onSignin={() => { }} onSignout={() => { }} />

      <Routes>

        <Route path='/' element={<Landing />} />
        <Route element={<AuthRoute />}>
          <Route path='/playground' element={<Layout />} />
        </Route>
        <Route path='signin' element={<SignInPage />} />
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App