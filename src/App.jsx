
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import MemeData from './assets/memesData';

function App() {

//   let memes = MemeData.map( items => {
//     return <Form 
//       key = {items.data.memes.id}
//       {...items}
//     />
//   }
// )

  return (
    <div>
      <Header />
      {/* {memes} */}
      <Form />
    </div>
  )
}

export default App
