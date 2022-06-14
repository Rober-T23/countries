const axios = require('axios');

const {Country}= require('../db.js')

async function getCountrieApi(req,res){
    try{
        
     // fetch("https://restcountries.com/v3/all").then(e=> e.json()).then(x=>res.send(x)); 
       const country = (await axios("https://restcountries.com/v3/all"))
      .data.map(e=>({id: e.cca3,nombre:e.name.common,imagen:e.flags[1],continente:e.continents[0],capital:!e.capital?'':e.capital,subregion:e.subregion,area: e.area,poblacion: e.population}))
       
      //Country.findAll({ raw: true }).then(e=>aux.push(e))
        await Country.bulkCreate(country)
        console.log("country Cargados ")
   
    }catch(e){ 
       console.log(e)
    }
}
//  async function getCountries(req,res){
//   try{
   
//      // fetch("https://restcountries.com/v3/all").then(e=> e.json()).then(x=>res.send(x)); 
//      const country = (await axios("https://restcountries.com/v3/all"))
//       .data//.map(e=>({nombre:e.name.common,imagen:e.flags[1],continente:e.continents,capital:e.capital,subregion:e.subregion,area: e.area,poblacion: e.population}))
//      //Country.findAll({ raw: true }).then(e=>aux.push(e))
    
//       res.send(country)
 
//      }catch(e){ 
//       console.log(e)
//    }
//  }
//    }
// async function getCountriesId(req, res) {
//    try {
//       const id= req.params.idPais
//        console.log(id)
//         let countri= (await axios(`https://restcountries.com/v3/alpha/${id}`))
//         .data.map(e=>({id: e.cioc}))//nombre:e.name.common,imagen:e.flags[1],continente:e.continents,capital:e.capital,subregion:e.subregion,area: e.area,poblacion: e.population}))
//   ;
//         console.log(countri);
//         res.send(countri) 
     

      
//    } catch (error) {
//        console.log(error)
//    }
// }
// async function getCountriesNameApi(req, res) {
//     try {
//          const {name}= req.query
        
//           let countri= (await axios(`https://restcountries.com/v3/name/${name}`))
//            .data//.map(e=>({nombre:e.name.common,imagen:e.flags[1],continente:e.continents,capital:e.capital,subregion:e.subregion,area: e.area,poblacion: e.population}));
//           console.log(countri);
//          res.send(countri) 
//       } catch (error) {
//           console.log(error)
//       }
// }
module.exports = {

    getCountrieApi
}