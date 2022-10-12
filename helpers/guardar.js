const fs = require('fs')

const guardar = (data) =>{
    const archivo = 'db/data.json'
    fs.writeFileSync(archivo,data)
}

module.exports = {
    guardar
}