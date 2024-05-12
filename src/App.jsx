import { useState } from 'react';
import { Header } from './components/Header';
import { Buscador } from './components/Buscador';
import { MiApi } from './components/MiApi';
import { Footer } from './components/Footer';


function App() {

  const [search, setSearch] = useState('');

  return (
    <>
      <Header />

      <Buscador search={search} setSearch={setSearch} />

      <MiApi search={search} />

      <Footer />
    </>
  )
}

export default App
