const rutas = require('../catalogos/rutas')
class Ruta {
    "RUTA"= "" 
    "DESCRIP"= "" 
    "DIA_LUN"= 0 
    "DIA_MAR"= 0 
    "DIA_MIE"= 0 
    "DIA_SAB"= 0 
    "DIA_VIE"= 0 
    "NO"= 0 

    _rutaFound = {}

    getById(id){
        this._rutaFound = rutas.find( ruta => ruta.NO == id)
        return this._rutaFound? this._rutaFound :  `No se encontro la ruta ${id}`
    }

    setRuta(recolector,no,nombre){
		this.DESCRIP= recolector ,
		this.DIA_LUN= 0 ,
		this.DIA_MAR= 0 ,
		this.DIA_MIE= 0 ,
		this.DIA_SAB= 0 ,
		this.DIA_VIE= 0 ,
		this.NO= no ,
		this.RUTA= nombre
    }
}

module.exports = Ruta