import React from 'react';
import Menu from './componentes/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './componentes/BannerMain';
import Carousel from './componentes/Carousel';


function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription ={"Yllion.com"}     
      />

      <Carousel
         ignoreFirstVideo
         category ={dadosIniciais.categorias[0]}
      />
    </div>
  );
}

export default App;
