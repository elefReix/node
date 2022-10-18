const inquirer = require('inquirer');
require('colors')

const preguntas = [
    {
        type:'list',
        name:'opcion',
        message:'Que desea hacer',
        choices:[
            {
                value:'1',
                name:`${'1.'.green} Crear Manifiesto`
            },
            {
                value:'2',
                name:`${'2.'.green} Agregar Materiales`
            },
            {
                value:'3',
                name:`${'3.'.green} Crear Boleta`
            },
            {
                value:'4',
                name:`${'4.'.green} Ver manifiestos`
            },
            {
                value:'5',
                name:`${'5.'.green} Ver Boletas`
            },
            {
                value:'6',
                name:`${'6.'.green} Catalogos`
            },
            {
                value:'0',
                name:`${'0.'.green} Salir`
            }]
    }
]


const inquireMenu = async () =>{
        console.log("\n Power by Tana.System ❤️ ".red)
        const opt = inquirer.prompt(preguntas)
        return opt
}

const leerInput = async (message) => {
    let tarea = [
        {
            type:'input',
            name:'desc',
            message,
            validate( value ){
                if (value.length == 0) {
                    return 'El nombre no puede ser vacio'
                }else{
                    return true
                }
            }
        }
    ]
    const {desc} = await inquirer.prompt(tarea)
    return desc
}

const selectCliente = async (message) => {
    let clientes = [
        {
            type:'input',
            name:'cliente',
            message,
            validate( value ) {
                return parseInt(value)<=0? 'No se encontro el Cliente ': true
            }
        }

    ]
    const {cliente} = await inquirer.prompt(clientes)
    return cliente;
}


const selectRecolector = async (message) => {
    let recolectores = [
        {
            type:'input',
            name:'recolector',
            message,
            validate( value ) {
                return parseInt(value)<=0? 'Debe escribir un numero de recolector ': true
            }
        }

    ]
    const {recolector} = await inquirer.prompt(recolectores)
    return recolector;
}

const selectFecha = async (message) =>{
    let fecha_input = [
        {
            type:'input',
            name:'fecha',
            message,
            validate( value_date ) {
                try {
                    new Date(value_date)
                    return true
                } catch (error) {
                    return 'Debe escribir la fecha en formato yyyy-MM-dd'
                }
            }
        }
    ] 
    const {fecha} = await inquirer.prompt(fecha_input)
    return fecha
}

const selectIdManifiesto = async  (message) =>{
    let id_input = [
        {
            type:'input',
            name:'id',
            message,
            validate(value){
                return parseInt(value) > 0 
            }
        }
    ]
    const {id} = await inquirer.prompt(id_input)
    return id
}

const selectRuta = async  (message) =>{
    let ruta_input = [
        {
            type:'input',
            name:'ruta',
            message,
            validate(value){
                return parseInt(value) > 0 
            }
        }
    ]
    const {ruta} = await inquirer.prompt(ruta_input)
    return ruta
}

const selectSemana = async  (message) =>{
    let semana_input = [
        {
            type:'input',
            name:'semana',
            message,
            validate(value){
                return parseInt(value) > 0 
            }
        }
    ]
    const {semana} = await inquirer.prompt(semana_input)
    return semana
}

const pause = async () =>{
    let preguntas = [
        {
            type:'input',
            name:'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ]
    
    await inquirer.prompt(preguntas)
}

module.exports = { 
    inquireMenu,
    pause,
    leerInput,
    selectCliente,
    selectRecolector,
    selectFecha,
    selectIdManifiesto,
    selectRuta,
    selectSemana
 }