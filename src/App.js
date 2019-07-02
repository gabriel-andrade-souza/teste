import React from 'react';
import axios from 'axios';
import './App.css';

let button 		= document.querySelector('#button')
let name 		= document.querySelector('#name')
let population	= document.querySelector('#population')
let climate 	= document.querySelector('#climate')
let terrain		= document.querySelector('#terrain')
let films 	 	= document.querySelector('#films')




function msg() {
	let randomNumber = Math.floor((Math.random() * 88) +1)
	let apiUrl = 'https://swapi.co/api/planets/' + randomNumber
	

	axios.get(apiUrl).then(response => {
		updateInfo(response.data)
	}).catch(e => {
		updateInfoWithError()
	})
	
}

function updateInfo(data){
	name.innerText 		 = 'Nome do planeta: '   	 + data.name
	population.innerText = 'População: '			 + data.population
	climate.innerText 	 = 'Clima: ' 			   	 + data.climate
	terrain.innerText 	 = 'Terreno: '  			 + data.terrain
	films.innerText 	 = 'Filmes: ' 				 + data.films
}

function updateInfoWithError(){
	name.innerText 		 = 'Este planeta não está disponível'
	population.innerText = ''
	climate.innerText    = ''
	terrain.innerText 	 = ''
	films.innerText  	 = ''
}

button.addEventListener('click', msg)

function App() {
	return (
    <div className="App">
      <header className="App-header">
       
        <p>
         
        </p>
       
      </header>
    </div>
  );

	}

export default App;






