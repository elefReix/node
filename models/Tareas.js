const Tarea = require('./Tarea')

class Tareas {

    _listado = {}

    getTareas(){
        let tareas = []
        Object.keys(this._listado).forEach(
            (key) => {
                let tarea = this._listado[key]
                tareas.push(tarea)
            }
        )
        return tareas
    }

    constructor(){
        this._listado = {}
    }

    crearTarea(desc=''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
}

module.exports = Tareas