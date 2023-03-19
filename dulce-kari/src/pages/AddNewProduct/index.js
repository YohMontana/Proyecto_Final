import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


// const url="https://637c68be16c1b892ebb2aea6.mockapi.io/products/";
const url="http://127.0.0.1:8000/api/producto/";

class AddNewProduct extends Component {
state={
  data:[],
  modalInsertar: false,
  modalEliminar: false,
  form:{
      id: "",
      nombre: "",
      precio: "",
      descripcion: "",
      imagen: "",
      categoria: "",
      disponibilidad  : "",

  }}

peticionGet=()=>{
axios.get(url).then(response=>{
  // this.setState({events: response.data});
  this.setState({ ...this.state, data: response.data.content})
  console.log(this.state)
}).catch(error=>{
  console.log(error.message);
})
}

peticionPost=async()=>{
  delete this.state.form.id;
 await axios.post(url,this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  }).catch(error=>{
    console.log(error.message);
  })
}

peticionPut=()=>{
  axios.put(url+this.state.form.id, this.state.form).then(response=>{
    this.modalInsertar();
    this.peticionGet();
  })
}

peticionDelete=()=>{
  axios.delete(url+this.state.form.id).then(response=>{
    this.setState({modalEliminar: false});
    this.peticionGet();
  })
}

modalInsertar=()=>{
  this.setState({modalInsertar: !this.state.modalInsertar});
}

seleccionarEmpresa=(dato)=>{
  this.setState({
    tipoModal: 'actualizar',
    form: {
        id: dato.id,
        nombre: dato.nombre,
        precio: dato.precio,
        descripcion: dato.descripcion,
        imagen: dato.imagen,
        disponibilidad: dato.disponibilidad,
        categoria: dato.categoria,
        
    }
  })
}

handleChange=async e=>{
e.persist();

await this.setState({
  form:{
    ...this.state.form,
    [e.target.name]: e.target.value
  }
});
console.log(this.state.form);
}

  componentDidMount() {
    this.peticionGet();
  }
  

  render(){
    const {form}=this.state;
  return (
    <div className="App">
    <br /><br /><br />
  <button className="btn btn-success" onClick={()=>{this.setState({form: null, tipoModal: 'insertar'}); this.modalInsertar()}}>Agregar Producto</button>
  <br /><br />
    <table className="table ">
      <thead>
        <tr>
        <th>ID</th>
                <th>nombre</th>
                <th>precio</th>
                <th>descripcion</th>
                <th>imagen</th>
                <th>categoria</th>
                <th>disponibilidad</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(dato=>{
          return(
            <tr>
      <td>{dato.id}</td>
                  <td>{dato.nombre}</td>
                  <td>{dato.precio}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.imagen}</td>
                  <td>{dato.categoria}</td>
                  <td>{dato.disponibilidad}</td>
          <td>
                <button className="btn btn-primary" onClick={()=>{this.seleccionarEmpresa(dato); this.modalInsertar()}}><FontAwesomeIcon icon={faEdit}/></button>
                {"   "}
                <button className="btn btn-danger" onClick={()=>{this.seleccionarEmpresa(dato); this.setState({modalEliminar: true})}}><FontAwesomeIcon icon={faTrashAlt}/></button>
                </td>
          </tr>
          )
        })}
      </tbody>
    </table>



    <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader style={{display: 'block'}}>
                  <span style={{float: 'right'}} onClick={()=>this.modalInsertar()}>x</span>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: ''}/>
                    <br />
                    <input className="form-control" type="text" name="nombre" placeholder="nombre" id="nombre" onChange={this.handleChange} value={form?form.nombre: ''}/>
                    <br />
                    <input className="form-control" type="number" name="precio" placeholder="precio" id="precio" onChange={this.handleChange} value={form?form.precio: ''}/>
                    <br />
                    <input className="form-control" type="text" name="descripcion" placeholder="descripcion" id="descripcion" onChange={this.handleChange} value={form?form.descripcion:''}/>
                    <br />
                    <input className="form-control" type="text" name="imagen" placeholder="imagen" id="imagen" onChange={this.handleChange} value={form?form.imagen:''}/>
                    <br />
                    <input className="form-control" type="text" name="categoria" placeholder="categoria" id="categoria" onChange={this.handleChange} value={form?form.categoria:''}/>
                    <br />
                    <input className="form-control" type="text" name="disponibilidad" placeholder="disponibilidad" id="disponibilidad" onChange={this.handleChange} value={form?form.stock:''}/>
                  </div>
                </ModalBody>

                <ModalFooter>
                  {this.state.tipoModal=='insertar'?
                    <button className="btn btn-success" onClick={()=>this.peticionPost()}>
                    Insertar
                  </button>: <button className="btn btn-primary" onClick={()=>this.peticionPut()}>
                    Actualizar
                  </button>
  }
                    <button className="btn btn-danger" onClick={()=>this.modalInsertar()}>Cancelar</button>
                </ModalFooter>
          </Modal>


          <Modal isOpen={this.state.modalEliminar}>
            <ModalBody>
               Estás seguro que deseas eliminar a la dato {form && form.nombre}
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-danger" onClick={()=>this.peticionDelete()}>Sí</button>
              <button className="btn btn-secundary" onClick={()=>this.setState({modalEliminar: false})}>No</button>
            </ModalFooter>
          </Modal>
  </div>



  );
}
}
export default AddNewProduct;