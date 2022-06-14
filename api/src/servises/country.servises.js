const {Country} =require('../db')

module.exports = {
    getCountries:  (req, res) =>{
      
        Country.findAll({ raw: true }).then(e=>res.status(200).send(e))
    },
    getCountriesId: (req, res) =>{
        const id= req.params.idPais
      
        if(id){
            Country.findByPk(id).then(e=>{res.status(200).send(e),console.log(e)})
        }else{
           res.status(400).send("Error data")
        }
    },
  
    getCountriesName: (req, res) =>{
        try{
            let {nombre}= req.query
        
      
        if(nombre){
            Country.findAll({
                where: {
                  nombre
                }
              }).then(e=>res.status(200).send(e));
        }else{
            res.status(400).send("Error data")
        }
        }catch(e){
          console.log(e)
        }
    },

    getconsole: (req,res)=>{
      let {nombre}= req.query
     res.send(nombre)
    }
    
}
