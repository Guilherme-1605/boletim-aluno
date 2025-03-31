class MateriaModel {
    constructor({ nome, id }) {
        this.nome = nome
        this._id = id !==undefined ? id : this.generateId()
    }

    generateId() {
    MateriaModel.maxId += 1
    return MateriaModel.maxId
    }
}

MateriaModel.maxId = 0
