class Recolector {
    "ID"= 0
    "NOMBRE"= ""
    
    _recolector = {}
    setRecolector(id,nombre){
        this._recolector.ID = id
        this._recolector.NOMBRE = nombre
    }
}

module.exports = Recolector