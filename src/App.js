import './App.css';
import CV_QR from './assets/img/CV-QR.png';
import construction from './assets/img/construction_red.svg';

function App() {
  return (
    <div className="App">
      <h1>Ditte Lykke Hansen</h1>
      <h2>Fullstack web developer</h2>
      <div className='constructionDiv'>
        <p>My portfolio is under construction!</p>
        <img
          className="constructionImg"
          src={construction}
          alt="Construction image"
        />
      </div>
      <div className='cvQrDiv'>
        <p>
          But it is soon going to be released - in the meantime you can scan the
          QR to download my CV.
        </p>
        <img className="cvQr" src={CV_QR} alt="QR to Ditte Lykke Hansens CV" />
      </div>
    </div>
  );
}

export default App;
