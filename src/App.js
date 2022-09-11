import Card from "./Components/Card";
import data from "./Components/Data";
import Navbar from "./Components/Navbar";
import './App.css';

export default function App() {
  const cards = data.map(item=>{
    return(
      <Card 
      key={item.id}
      item={item}/>
    )
  })
  return (
    <div className="App">
    <Navbar/>
    <section>
      {cards}
    </section>
    </div>
  );
}
