const recolectores = require('../catalogos/recolectores')
class Recolector {
    "ID"= 0
    "NOMBRE"= ""

    _recolectorFound = {}

    getById(id){
        this._recolectorFound = recolectores.find( recolector => recolector.CLAVE = id)
        return this._recolectorFound? this._recolectorFound : `No se encontro el recolector con id ${id} favor de darlo de alta`
    }
    
    setRecolector(id,nombre){
        this.ID = id
        this.NOMBRE = nombre
    }
}

module.exports = Recolector