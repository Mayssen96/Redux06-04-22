import Navbar from './components/UI/navbar'
/*import data from './data'*/
import Main from './components/Main/main';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Movie from './components/movie/movie'
import Home from './components/home/home'
import Select from './components/UI/Select';
import{useState} from 'react'
import Categorie from './components/Caregorie/Categorie';
import {useSelector} from 'react-redux'
import CustomModals from './components/UI/CustomModals';
function App() {
  const data = useSelector (state => state.Movie)
  const [title, setTitle]= useState('')
  const [rating, setRating]= useState('')
  return (
    <div className="App">
     <Navbar setTitle= {setTitle}/>
     <Select setRating={setRating}/>
     <CustomModals/>
     <Routes>
       <Route  path='/' element={ <Main title= {title} rating = {rating} data={data}/>} />
       {/* <Route exact path='/' component={Main} /> */}
        <Route  path='/movie/:id' element={<Movie data={data}/>} />
        <Route  path='/movie' element={ <Home title= {title} rating = {rating} data={data}/>} />

        <Route  path='/categorie/:categorie' element={<Categorie data={data}/>} />

     
     </Routes>
      
     
    </div>
  );
}

export default App;
