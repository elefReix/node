const { inquireMenu,pause, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/Tarea')
const Tareas = require('./models/Tareas')
const {guardar} = require('./helpers/guardar')

require('colors')

// const { mostrarMenu, pause } = require('./helpers/mensajes');

const main = async () =>{
    let opcion = ''
    let tarea = new Tareas()
    do {
        // opcion = await mostrarMenu();
        opt = await inquireMenu();
        opcion = opt.opcion 
        switch (opcion) {
            case '1':
                const desc = await leerInput('Descripcion')
                tarea.crearTarea(desc)     
                guardar(JSON.stringify(tarea))
                console.log('tarea creada'.blue);
                break;
            case '2':
                break;
            case '3':
                    
                break;
            case '4':
                console.log(tarea.getTareas())
                break;
            case '5':

                break;
            case '6':

                break;
        }
        // const tareas = new Tareas()
        // const tarea = new Tarea('cogerme a Jenny')
        // tareas._listado[tarea.id] = tarea
        // console.log(tareas)
        await pause();
    } while (opcion !== '0');
}

main()