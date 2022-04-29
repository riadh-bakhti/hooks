import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Details from './components/Details/Details';
import Home from './components/Home/Home';
function App() {
  const movies = [
    {
      title: "All Eyez on Me ",
      rate: 4,
      image:
        "  https://m.media-amazon.com/images/M/MV5BMTc5NzQ4NzU4OF5BMl5BanBnXkFtZTgwNTkxMzE0MjI@._V1_FMjpg_UX503_.jpg",
      desc: "All Eyez on Me is a 2017 American biographical drama film about rapper Tupac Shakur, directed by Benny Boom and written by Jeremy Haft, Eddie Gonzalez and Steven Bagatourian.",
      year: "2017",
      id: Math.random(),
    },
    {
      title: "Joker",
      rate: 5,
      image:
        "https://media.senscritique.com/media/000018727645/source_big/Joker.jpg",
      desc: "The Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character.",
      year: "2019",
      id: Math.random(),
    },
    {
      title: "TENET ",
      rate: 3,
      image:
        "  https://th.bing.com/th/id/R.f2cc6cc6833bb688fcaba1f55385efa2?rik=9K6ofjI2Py5ZyA&riu=http%3a%2f%2ffr.web.img6.acsta.net%2fpictures%2f20%2f07%2f02%2f16%2f04%2f4942880.jpg&ehk=BXy11BoBZmCibh4v5Pv1bDtKi9KloLDPqrcxMd9L6WU%3d&risl=&pid=ImgRaw&r=0",
      desc: "Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas. it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh.",
      year: "2020",
      id: Math.random(),
    },

  ];
  const [searchTxt, setSearchTxt] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  return (
    <div className='no'> 

      <Header
       setSearchTxt={setSearchTxt}
       setSearchRate={setSearchRate}
       searchRate={searchRate}

       
       />

       

       <Routes>

         <Route
         path='/'
         element={
           <Home />
         }
         />

       <Route
          path="/list"
          element={
      <List
       movies={movies}
      searchTxt={searchTxt}
      searchRate={searchRate} />
          }
          />
          <Route
          path="/details/:idmovie"
          element={ <Details 
            movies={movies}
            
            /> 
          }
          />

          
       </Routes>   
     
    </div>
  );
}

export default App;
