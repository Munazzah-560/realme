import Card from "./Component/Card/Card";
import { Data } from "./data";
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer'

const App = () => {
  console.log(Data);   

  return (
    <>
    <div className="App">
      <Navbar />
    </div>
      {Data.map((e, i) => {
        return <Card key={i} imgSrc={e.imgSrc} title={e.title} desc={e.desc} />;
      })}

</>
  );
};

export default App;