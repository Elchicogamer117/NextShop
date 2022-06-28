import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '@containers/Layout'
import Home from '@pages/Home'
import Login from '@pages/Login'
import RecoverPwd from '@pages/RecoverPwd'
import SendEmail from '@pages/SendEmail'
import NewPwd from '@pages/NewPwd'
import MyAccount from '@pages/MyAccount'
import CreateAccount from '@pages/CreateAccount'
import MyOrder from '@pages/MyOrder'
import MyOrders from '@pages/MyOrders'
import NotFound from '@pages/NotFound'
import AppContext from '@context/AppContext'
import useInitialState from '@hooks/useInitialState'
import '@styles/global.css'

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={ initialState }>
      <BrowserRouter >
        <Layout>
          <Routes>
            <Route path = '/' element = { <Home /> } />
            <Route path = '/login' element = { <Login/> } />
            <Route path = '/recovery-pwd' element = { <RecoverPwd/> } />
            <Route path = '/send-email' element = { <SendEmail/> } />
            <Route path = '/new-password' element = { <NewPwd/> } />
            <Route path = '/account' element = { <MyAccount/> } />
            <Route path = '/singup' element = { <CreateAccount/> } />
            <Route path = '/my-order' element = { <MyOrder/> } />
            <Route path = '/my-orders' element = { <MyOrders/> } />
            <Route path = '*' element = { <NotFound/> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App