const colors = require('colors')

const mostrarMenu = () =>{
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
        console.log(opt);
        readLine.close()
    })

}

const pause = () =>{
    const readLine = require('readline').createInterface({
        input:process.stdin,
        output:process.stdout
    })

    readLine.question(`Presiones ${'ENTER'.green} para seleccionar la opcion`, (opt)=>{
        console.log(opt);
        readLine.close()
    })
}

module.exports = {
    mostrarMenu,
    pause
}