const { 
    inquireMenu,pause, 
    selectCliente, 
    selectRecolector,
    selectFecha,
    selectIdManifiesto,
    selectRuta,
    selectSemana
} = require('./helpers/inquirer');
const Tarea = require('./models/Tarea')
const Tareas = require('./models/Tareas')
const Cliente = require('./models/Cliente')
const Manifiesto = require('./models/Manifiesto')
const ManifiestoDB = require('./schemas/manifiesto')
const Recolector = require('./models/Recolector')
const {guardar} = require('./helpers/guardar');
const mongoose = require('mongoose');
const { key } = require('./db/credenciales');
const Ruta = require('./models/Ruta');

require('colors')

const connectionParams = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}


// const connectMongo = async () =>{
//     await mongoose.connect(key, connectionParams).then((response) => {
//         console.log(`Conectado ${response}`);
//     }).catch((error) => {
//         console.log(error);
//         console.log("No Conectado");
//     })
    
// }

const main = async () =>{
    let opcion = ''
    let tarea = new Tareas()
    do {
        opt = await inquireMenu();
        opcion = opt.opcion 
        switch (opcion) {
            case '1':
                let manifiesto = new Manifiesto()
                const id_cliente = await selectCliente('Escribe el numero del cliente : ')
                let cliente = new Cliente()
                let clienteFound = cliente.getById(id_cliente)
                manifiesto.setCliente(clienteFound)
                const id_recolector = await selectRecolector('Escriba el numero de recolector : ')
                let recolector = new Recolector()
                let recolectorFound = recolector.getById(id_recolector)
                manifiesto.setRecolector(recolectorFound)
                const fecha = await selectFecha('ingresa la fecha en formato yyyy-MM-dd : ')
                manifiesto.setFecha(fecha)
                const id = await selectIdManifiesto('Escribe el id del manifiesto')
                manifiesto.setFolio(id)
                manifiesto = setDefaultProperties(manifiesto)
                const no_ruta = await selectRuta(`Escribe la ruta`)
                let ruta = new Ruta()
                let rutaFound = await ruta.getById(no_ruta)
                rutaFound.DESCRIP = recolectorFound.NOMBRE + ' ' + recolectorFound.PATERNO + ' ' + recolectorFound.MATERNO
                manifiesto.setRuta(rutaFound)
                const semana = await selectSemana(`Escribe la  el # semana : `)
                manifiesto.setSemana(semana)
                console.log(manifiesto)
                break;
            case '2':
                break;
            case '3':
                    
                break;
            case '4':
                console.log('Mostrando');
                ManifiestoDB.find({}, (error, manifiestos)=>{
                    !error?console.log(manifiestos):console.log(error)
                })
                break;
            case '5':

                break;
            case '6':

                break;
        }
        
        await pause();
    } while (opcion !== '0');
}

function setDefaultProperties(manifiesto){
    manifiesto.VEHICULO = {
        "AFIANZADO": "" ,
		"ANO": 0 ,
		"CLAVE": 0, 
		"COLOR": "", 
		"CONDICION": "" ,
		"DESCRIP": "" ,
		"DIMENSION": "", 
		"EMPRESA": 0 ,
		"MARCA": "" ,
		"MODELO": "" ,
		"PLACAS": "" ,
		"POLIZA": "" ,
		"SERIE": "" ,
		"TARA": "" ,
		"TARJETA": "", 
		"TIPO": "" ,
		"UNIDAD": ""
    }
    manifiesto.UNIDAD = {
        "NOMBRE": "TRACTOCAMION PETTERBILT" ,
		"ID": 1 ,
		"CLAVE": "" ,
		"DESCRIPCION": ""
    }

    manifiesto.UNIDAD_ = 1
    manifiesto.TRANSPORTE = {
        "NOMBRE": "INDUSTRIAL DE GRASAS Y DERIVADOS" ,
		"CLAVE": 1,
    }

    manifiesto.RECEPTOR = {
		"NOMBRE": "FRANCISCO LICEA" ,
		"ID": 48
	} 
    manifiesto.DESTINO = {
		"CLAVE": 1 ,
		"NOMBRE": "INDUSTRIAL DE GRASAS Y DERIVADOS"
	} 
    return manifiesto
}
// connectMongo()
main()