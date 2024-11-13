import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { ModalProps } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { UserEdit, User } from '../../../../types'
import { PutEditUser } from "../../../../apis";

interface ModalEditUserProps extends ModalProps {
  userToEdit: User | null;
  handleSave: () => void;
}

export const ModalEditUser = ({ show, handleClose, userToEdit, handleSave }: ModalEditUserProps) => {
 const [dataToEdit, setDataToEdit] = useState<UserEdit>({
    firstName: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
    age: 0,
  });

   useEffect(() => {
      setDataToEdit({
        firstName: userToEdit?.firstName ?? '',
        gender: userToEdit?.gender ?? '',
        address: userToEdit?.address.address ?? '',
        phone: userToEdit?.phone ?? '',
        email: userToEdit?.email ?? '',
        age: userToEdit?.age ?? 0
      })
   }, [userToEdit])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    debugger
    setDataToEdit((prev) => ({
      ...prev,
      [name]: name === "age" ? Number(value) : value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await PutEditUser({ id: userToEdit?.id ?? 0, ...dataToEdit });
    handleSave();
    handleClose(); 
  };


  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="firstName" required value={dataToEdit.firstName} onChange={handleChange}/>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editGenero">
                <Form.Label>Género</Form.Label>
                <Form.Select required name="gender" value={dataToEdit.gender} onChange={handleChange} >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editDireccion" >
                <Form.Label>Dirección</Form.Label>
                <Form.Control type="text" required  name="address" value={dataToEdit.address} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editTelefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="text" required name="phone" value={dataToEdit.phone} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editCorreo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" name="email" required value={dataToEdit.email} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3" controlId="editEdad">
                <Form.Label>Edad</Form.Label>
                <Form.Control name="age" type="number" required value={dataToEdit?.age}  onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col sm={12} className="mt-3">
              <Button variant="primary" type="submit" className="w-100">
                Guardar cambios
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}