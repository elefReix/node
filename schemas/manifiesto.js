const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const manifiestoSchema = new mongoose.Schema({
    CLAVE:String,//FUNCONADO TODOS ES LA CLAVE M
    FOLIO:String,//FUNCIONANDO
    PROVEEDOR:String,//FUNCIONA SOLO ES LA CLAVE (NUMERICA)
    FECHA:String,//FUNCIONADO
    VEHICULO:{
        CLAVE:Number,
        DESCRIP:String,
        MODELO:String,
        MARCA:String,
        ANO:Number,
        COLOR:String,
        PLACAS:String,
        TARJETA:String,
        UNIDAD:String,
        POLIZA:String,
        AFIANZADO:String,
        CONDICION:String,
        EMPRESA:Number,
        TIPO:String,
        DIMENSION:String,
        TARA:String,
        SERIE:String
    },
    FECHA_ENT:String,//VACIO
    LAB:String,//VACIO
    REQUISICIO:String,//VACIO
    DEPTO:Number,//VACIO
    UNIDAD:Number,//FUNCIONANDO 
    UNIDAD_: {
        NOMBRE:String,
        ID:Number,
        CLAVE:String,
        DESCRIPCION:String
    },//FUNCIONANDO [OBJ]
    CHOFER:Number,//FUNCIONANDO
    FORMA_PAG:String,//VACIO
    AUTORIZA:String,//VACIO
    MONEDA:Number,//FUNCIONA TODOS TIENE EL VALOR UNO 
    SOLICITO:String,//VACIO
    OBSER:String,//VACIO
    IMPORTE:Number,//FUNCIONANDO
    IVA:Number,//TODOS CERO
    SUB_TOTAL:Number,//FUNCIONANDO 
    RET_IVA:Number,//TODOS CERO
    TOTAL:Number,//FUNCIONANDO
    STATUS:Number,//FUNCIONADO ESTADOS [1,2,3]
    FACTURAS:String,//VACIO
    CLIENTE:Number,//FUNCIONANDO PERO TODOS SON EL UNO
    FECHA_PAGO:String,//VACIO
    PAGADA:String,//FUNCIONANDO
    SEC_PAGO:Number,//VACIO
    RETENCION:Number,//VACIO
    CAL_IVA:Number,//VACIO
    CHEQUE:String,//VACIO
    TIPO_ABONO:String,//VACIO
    TIPO_PAGO:String,//VACIO
    MONE_PAGO:Number,//VACIO
    T_CAMBIO:Number,//TODOS EN CERO 
    IMP_PAGO:Number,//VACIO
    IMPORTE_P:Number,//VACIO
    IMPORTE_D:Number,//TODOS EN CERO
    BANCO:String,//VACIO
    DOCUMENTO:String,//VACIO
    CUENTA:String,//VACIO
    NACIONAL:Number,//VACIO
    IMPORTACIO:Number,//VACIO
    FECHA_IMP:String,//VACIO
    PEDIMENTO:String,//VACIO
    TOTAL_KG:Number,//FUNCIONANDO
    ENTREGA:String, //VACIO EN LA BASE
    FACTURA:String, //VACIO
    ANIO:Number,//funcionando 
    SEMANA:Number,//funcionando
    CAL_SEMANA:Number,//VACIO
    CAL_CHOFER:String,//VACIO
    CAL_FECHA:String,//VACIO
    CAL_STATUS:Number,//VACIO
    PLANTA:Number,//SIEMPRE ES UNO 
    RUTA:String,//NOMBRE DE LA RUTA
    RUTA_:{
        RUTA: String,
        DESCRIP: String,
        DIA_LUN: Number,
        DIA_MAR: Number,
        DIA_MIE: Number,
        DIA_JUE: Number,
        DIA_VIE: Number,
        DIA_SAB: Number,
        NO: Number,
    },                 //NOMBRE DE LA RUTA [OBJ]
    TRANS:Number,
    FEC_TRANS:String,
    DESTI:Number,
    FEC_DESTI:String,
    RECIBE:Number,
    CLIENTE_:{
        "ID_CLIENTE": Number,
    "DR_TIPO": String,
    "DR_APPATER": String,
    "DR_APMATER": String,
    "DR_RAZON": String,
    "DR_CALLE": String,
    "DR_NOEXTER": String,
    "DR_NOINTER": String,
    "DR_COLONIA": String,
    "DR_CP": Number,
    "DR_CD": Number,
    "DR_ESTADO": String,
    "DR_CLVEDO": Number,
    "DR_CLVMPIO": Number,
    "DR_LOCALID": String,
    "DR_TEL": String,
    "DR_FAX": String,
    "DR_MAIL": String,
    "DR_CONTACT": String,
    "DR_CARGO_C": String,
    "DF_NOMBRE": String,
    "DF_RFC": String,
    "DF_CURP": String,
    "DF_IFE": String,
    "DF_LEGAL": String,
    "DF_CD": Number,
    "DF_CLVEDO": Number,
    "DF_DOM": String,
    "DF_COL": String,
    "DF_CP": 0,
    "DF_CONTACT": String,
    "DF_CARGO_C": String,
    "DF_TEL": String,
    "DF_FAX": String,
    "DF_MAIL": String,
    "DS_TIPOEMP": Number,
    "DS_STATUS": Number,
    "DP_TARIFA": Number,
    "DP_CHOFER": Number,    //------------------------------>
    "DP_RUTA": String,      //------------------------------>
    "DP_FORMAP": Number,
    "CK_COMISIO": Number,
    "ED_COMISIO": Number,
    "DO_DIASC": Number,
    "DO_CREDITO": Number,
    "DO_FECHAA": String,
    "DO_FECHAB": String,
    "DO_OBSER": String
    },

    TRANSPORTE:{
        NOMBRE:String,
        CLAVE: Number
    },
    RECOLECTOR:{
        NOMBRE:String,
        ID:Number
    },
    DESTINO:{
        CLAVE:Number,
        NOMBRE:String
    },
    RECEPTOR:{
        NOMBRE:String,
        ID:Number
    },
    ID_SERIE:String, //SE REEMPLAZA POR CLAVE
    ID_NUMERACION:String, //SE REEMPLAZA POR FOLIO*/
    ARTICULOS:[] //uso la interface material porque los
});

module.exports = mongoose.model('Manifiestos', manifiestoSchema, 'Manifiestos');