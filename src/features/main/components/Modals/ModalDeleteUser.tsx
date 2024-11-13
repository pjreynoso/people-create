import React from "react";
import { Modal, Button, ModalProps } from "react-bootstrap";

export const ModalDeleteUser: React.FC<ModalProps> = ({
  show,
  handleClose,
  handleDelete,
  userName,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>¿Estás seguro de que deseas eliminar este usuario <strong>{userName}</strong>?</p>
        <div className="d-flex justify-content-end">
          <Button variant="danger" onClick={handleDelete} className="me-2">
            Eliminar
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};