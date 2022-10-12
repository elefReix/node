const colors = require('colors')

const mostrarMenu = async () =>{

    return new Promise ( (resolve) => {
        console.clear()
        console.log('========================='.green);
        console.log('Bienvenido Sr que desea hacer ?'.blue)
        console.log('=========================\n'.green);
    
        console.log(`${'1.'.green} Crear Manifiesto`)
        console.log(`${'2.'.green} Agregar Materiales`)
        console.log(`${'3.'.green} Crear Boleta`)
        console.log(`${'4.'.green} Ver manifiestos`)
        console.log(`${'5.'.green} Ver Boletas`)
        console.log(`${'6.'.green} Catalogos`)
    
        console.log("\n Power by Tana.System ❤️   ".red)
    
    
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
    
        readLine.question('Seleccione una opcion ', (opt)=>{
            readLine.close()
            resolve(opt)
        })

    } )

}

const pause = () =>{

    return new Promise( (resolve) => {
        const readLine = require('readline').createInterface({
            input:process.stdin,
            output:process.stdout
        })
    
        readLine.question(`Presiones ${'ENTER'.green} para seleccionar la opcion`, (opt)=>{
            readLine.close()
            resolve(opt)
        })
    })
}

module.exports = {
    mostrarMenu,
    pause
}