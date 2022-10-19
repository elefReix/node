const fs = require('fs')

const guardar = (data) =>{
    const path = 'db/manifiesto.json'
    // fs.writeFileSync(archivo,data)
    fs.appendFileSync(path,`${data},`)
}

module.exports = {
    guardar
}