import Header from './components/Header'
import Main from './components/Main'
import data from './components/data'
import './App.css';



function App() {
  const Card= data.map(item => {
    return(
      <Main
      key= {item.id}
      item={item}
      />
      
    )
  })
  return (
    <div>
     <Header />
     <section>
       {Card}
     </section>
    </div>
  );
}

export default App;





































