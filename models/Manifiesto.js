const Cliente = require('./Cliente')
const Destino = require('./Destino')
const Receptor = require('./Receptor')
const Recolector = require('./Recolector')
const Ruta = require('./Ruta')
const Transporte = require('./Transporte')
const Unidad = require('./Unidad')
const Vehiculo = require('./Vehiculo')

class Manifiesto {
     ANIO = 2022 
		 ARTICULOS = [] 
		 AUTORIZA =    ""
		 BANCO = ""   
		 CAL_CHOFER = ''    
		 CAL_FECHA =   '' 
		 CAL_IVA = 0 
		 CAL_SEMANA = 0 
		 CAL_STATUS = 0 
		 CHEQUE =    ''
		 CHOFER = 0
		 CLAVE =  "AA" 
		 CLIENTE = 0
		 CLIENTE_ = Cliente
		 CUENTA =    ''
		 DEPTO = 0 
		 DESTI = 0 
		 DESTINO = Destino
		 DOCUMENTO =  ''  
		 ENTREGA =    ''
		 FACTURA =    ''
		 FACTURAS =    ''
		 FECHA =    ''
		 FECHA_ENT = ''   
		 FECHA_IMP =  ''  
		 FECHA_PAGO =  ''  
		 FEC_DESTI =    ''
		 FEC_TRANS =    ''
		 FOLIO =    ''
		 FORMA_PAG = ''   
		 ID_NUMERACION =    ''
		 ID_SERIE =  'AA'  
		 IMPORTACIO = 0 
		 IMPORTE = 0 
		 IMPORTE_D = 0 
		 IMPORTE_P = 0 
		 IMP_PAGO = 0 
		 IVA = 0 
		 LAB =    ''
		 MONEDA = 1 
		 MONE_PAGO = 0 
		 NACIONAL = 0 
		 OBSER =   '' 
		 PAGADA =   '' 
		 PEDIMENTO = ''   
		 PLANTA = 1 
		 PROVEEDOR =  ''
		 RECEPTOR = Receptor
		 RECIBE = 0 
		 RECOLECTOR = Recolector
		 REQUISICIO =  ''  
		 RETENCION = 0 
		 RET_IVA = 0 
		 RUTA =  ''  
		 RUTA_ = Ruta
		 SEC_PAGO = 0 
		 SEMANA = 0
		 SOLICITO =    ''
		 STATUS = 0 
		 SUB_TOTAL = 0 
		 TIPO_ABONO =   '' 
		 TIPO_PAGO =    ''
		 TOTAL = 0 
		 TOTAL_KG = 0 
		 TRANS = 0 
		 TRANSPORTE = Transporte
		 T_CAMBIO = 0 
		 UNIDAD = 1 
		 UNIDAD_ = Unidad
		 VEHICULO = Vehiculo

		setCliente(cliente){
			this.CLIENTE_ = cliente
			this.CLIENTE = cliente.ID_CLIENTE
			this.PROVEEDOR = cliente.ID_CLIENTE
		}

		setRecolector(recolector){
            this.RECOLECTOR = recolector
        }

        setFolio(folio){
			this.FOLIO = folio
			this.ID_NUMERACION = folio
        }

		setSemana(semana){
			this.SEMANA = parseInt(semana)
		}

		setFecha(fecha){
			this.FECHA = fecha
		}

		setRuta(ruta){
			this.RUTA_ = ruta
			this.RUTA = ruta.RUTA
		}

		confirmar(){
			console.log(this._manifiesto)
		}

		constructor(){
				this.ANIO = 2022 
				this.ARTICULOS = [] 
				this.AUTORIZA =    ""
				this.BANCO = ""   
				this.CAL_CHOFER = ''    
				this.CAL_FECHA =   '' 
				this.CAL_IVA = 0 
				this.CAL_SEMANA = 0 
				this.CAL_STATUS = 0 ,
				this.CHEQUE =    '',
				this.CHOFER = 0,
				this.CLAVE =  "AA" ,
				this.CLIENTE = 0,
				this.CLIENTE_ = Cliente,
				this.CUENTA =    '',
				this.DEPTO = 0 ,
				this.DESTI = 0 ,
				this.DESTINO = Destino,
				this.DOCUMENTO =  ''  ,
				this.ENTREGA =    '',
				this.FACTURA =    '',
				this.FACTURAS =    '',
				this.FECHA =    '',
				this.FECHA_ENT = '',   
				this.FECHA_IMP =  '',  
				this.FECHA_PAGO =  '',  
				this.FEC_DESTI =    '',
				this.FEC_TRANS =    '',
				this.FOLIO =    '',
				this.FORMA_PAG = '',   
				this.ID_NUMERACION =    '',
				this.ID_SERIE =  'AA'  ,
				this.IMPORTACIO = 0 ,
				this.IMPORTE = 0 ,
				this.IMPORTE_D = 0, 
				this.IMPORTE_P = 0 ,
				this.IMP_PAGO = 0 ,
				this.IVA = 0 ,
				this.LAB =    '',
				this.MONEDA = 1 ,
				this.MONE_PAGO = 0, 
				this.NACIONAL = 0 ,
				this.OBSER =   '' ,
				this.PAGADA =   '' ,
				this.PEDIMENTO = '' ,  
				this.PLANTA = 1 ,
				this.PROVEEDOR =  '',
				this.RECEPTOR = Receptor,
				this.RECIBE = 0 ,
				this.RECOLECTOR = Recolector,
				this.REQUISICIO =  ''  ,
				this.RETENCION = 0 ,
				this.RET_IVA = 0 ,
				this.RUTA =  ''  ,
				this.RUTA_ = Ruta,
				this.SEC_PAGO = 0 ,
				this.SEMANA = 0,
				this.SOLICITO =    '',
				this.STATUS = 0 ,
				this.SUB_TOTAL = 0, 
				this.TIPO_ABONO =   '', 
				this.TIPO_PAGO =    '',
				this.TOTAL = 0 ,
				this.TOTAL_KG = 0, 
				this.TRANS = 0 ,
				this.TRANSPORTE = Transporte,
				this.T_CAMBIO = 0 ,
				this.UNIDAD = 1 ,
				this.UNIDAD_ = Unidad,
				this.VEHICULO = Vehiculo

		}
}

module.exports = Manifiesto