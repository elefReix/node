const clientes = require('../catalogos/clientes')
class Cliente {
    _id=''
        "ID_CLIENTE"= 0
        "DR_TIPO"= ""
        "DR_APPATER"= ""
        "DR_APMATER"= ""
        "DR_RAZON"= ""
        "DR_CALLE"= ""
        "DR_NOEXTER"= ""
        "DR_NOINTER"= ""
        "DR_COLONIA"= ""
        "DR_CP"= 0
        "DR_CD"= 0
        "DR_ESTADO"= ""
        "DR_CLVEDO"= 0
        "DR_CLVMPIO"= 0
        "DR_LOCALID"= ""
        "DR_TEL"= ""
        "DR_FAX"= ""
        "DR_MAIL"= ""
        "DR_CONTACT"= ""
        "DR_CARGO_C"= ""
        "DF_NOMBRE"= ""
        "DF_RFC"= ""
        "DF_CURP"= ""
        "DF_IFE"= ""
        "DF_LEGAL"= ""
        "DF_CD"= 0
        "DF_CLVEDO"= 0
        "DF_DOM"= ""
        "DF_COL"= ""
        "DF_CP"= 0
        "DF_CONTACT"= ""
        "DF_CARGO_C"= ""
        "DF_TEL"= ""
        "DF_FAX"= ""
        "DF_MAIL"= ""
        "DS_TIPOEMP"= 0
        "DS_STATUS"= 0
        "DP_TARIFA"= 0
        "DP_CHOFER"= 0
        "DP_RUTA"= ""
        "DP_FORMAP"= 0
        "CK_COMISIO"= 0
        "ED_COMISIO"= 0
        "DO_DIASC"= 0
        "DO_CREDITO"= 0
        "DO_FECHAA"= ""
        "DO_FECHAB"= ""
        "DO_OBSER"= ""

        _cliente = {}

        getById(id){
             this._cliente = clientes.find( cliente => cliente.ID_CLIENTE == id )
            return this._cliente? this._cliente : `No se encontro el cliente con id ${id} favor de darlo de alta`
        }

        setCliente(cliente){
            this._cliente = cliente
        }

        constructor(){
            this._cliente = {}
        }
}

module.exports = Cliente