import './App.css'
import FooRumApp from './components/landing-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppHeader from './components/appHeader';
import AuthPage from './components/authPage';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <>
    <div className="flex flex-col min-h-screen h-[100vh] overflow-hidden">
      <BrowserRouter>
        <AppHeader isAuthenticated={isAuthenticated}/>
        <main className='flex justify-center flex-1 overflow-y-auto'>
        <Routes>
          <Route path='/' element={<FooRumApp isAuthenticated={isAuthenticated} setIsAuthenticated={(val:boolean) => setIsAuthenticated(val)}/>} />
          <Route path='/auth' element={<AuthPage isAuthenticated={isAuthenticated} setIsAuthenticated={(val:boolean) => setIsAuthenticated(val)}/>} />
        </Routes>
        </main>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
