export class UserModel {

    constructor(

        _nombre = null,
        _apellido = null,
        _correo = null,
        _password = null,
        _tipoUsuario = null,
        _id = null,
    ) {
        if (_id !== null) this.id = _id
        if (_nombre !== null) this.nombre = _nombre
        if (_apellido !== null) this.nombre = _apellido
        if (_correo !== null) this.correo = _correo
        if (_password !== null) this.password = _password
        if (_tipoUsuario !== null) this._tipoUsuario = _tipoUsuario
    }

    getFullname() {
        return `${this.name} ${this.apellido}`;
    }
    
      getFullDetails() {
        return `${this.getFullname()} > ${this.createdAt.toDateString()}`;
      
    }    
}







