import './App.css';
import Radiobutton from './components/Radiobutton';

function App() {

  const handleValueRadiobutton = (values) => {
    console.log("Array:");
    //tratar os dados aqui
    console.log(values);
  }

  const titleComponent = "Selecione: ";

  //Pode ter qualquer tipo de valor no value , o name que manda em quem está clicado, 
  //objeto retornado por callback para ser tratado da melhor forma para o processo

  const arrayData = [ 
    {name:"sim",value:true},
    {name:"não",value:false},
  ];

  return (
    <div className="App">
      <Radiobutton handleValueRadiobutton={handleValueRadiobutton} titleComponent={titleComponent} arrayData={arrayData} />
    </div>
  );
}

export default App;
