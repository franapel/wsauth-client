import { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/home'
//import LoginForm from './components/LoginForm'
import Chat from './pages/chat'


function App() {

  console.log(process.env.REACT_APP_WS_URL)
  console.log(process.env.REACT_APP_AUTH_URL)

  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home user={user} setUser={setUser} />} />
          <Route path="chat" element={<Chat user={user} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
