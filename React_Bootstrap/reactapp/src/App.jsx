import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from './Nav';
import FooterDark from './FooterDark';
import Mainn from './Mainn';
import { useEffect, useState } from 'react';


function App() {

  const [title, setTitle] = useState('Libreria del Centro')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <>
      <Nav />
      <Mainn setPageTitle={setTitle}/>
      <FooterDark />
    </>
  )
}

export default App