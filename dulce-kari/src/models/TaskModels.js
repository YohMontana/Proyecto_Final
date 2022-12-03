export class TaskModel {
	// id: Object ID
	// name: String
	// createdAt: String
	// doneAt: String
	// deletedAt: String
	// userId: Int

	constructor(
		_id = null,
		_name = null,
		_precio = null,
		_descripcion = null,
		_imagen = null,
        _categoria = null,
		_stock = null
	) {
        if (_id !== null) this.id = _id;
		if (_name !== null) this.name = _name;
        if (_precio !== null) this.name = _precio;
        if (_descripcion !== null) this.name = _descripcion;
        if (_imagen!== null) this.name = _imagen;
        if (_categoria !== null) this.name = _categoria;
        if (_stock !== null) this.name = _stock;

    }
}