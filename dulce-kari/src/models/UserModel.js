export class UserModel {

    constructor(
        
        _name = null,
        _email = null,
        _pass = null,
        _id = null,
    ) {
        if (_id !== null) this.id = _id
        if (_name !== null) this.name = _name
        if (_email !== null) this.email = _email
        if (_pass !== null) this.pass = _pass
    }







}


