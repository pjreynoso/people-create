import { Card, Button, Table, Form, Col } from "react-bootstrap";
import { COLUMNS } from "../../../../constants";
import { useEffect, useState } from "react";
import { ModalEditUser, ModalDeleteUser } from "../Modals";
import { useGetAllUsers, DeleteUser } from "../../../../apis";
import { Filters, User } from "../../../../types";

interface TablePeopleProps {
  filters: Filters | null;
}

export const TablePeople = ({ filters }: TablePeopleProps) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [dataTable, setDataTable] = useState<User[]>([]);
  const [dataToEdit, setDataToEdit] = useState<User | null>(null);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const { users, loading, refetch } = useGetAllUsers();

  const filterUser = () => {
    const userFiltered =
      users?.filter(
        (user) => user.age === filters?.age && user.gender === user?.gender
      ) || [];
    setDataTable(userFiltered);
  };

  useEffect(() => {
    if (users?.length) {
      setDataTable(users);
    }
  }, [users]);

  useEffect(() => {
    if (filters) {
      filterUser();
    }
  }, [filters]);

  const handleSelectUser = (id: number) => {
    setSelectedUsers(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((userId) => userId !== id)
          : [...prevSelected, id]
    );
  };
  
  const onClickEdit = () => {
    const user = dataTable.find((user) => user.id === selectedUsers[0]);
    setDataToEdit(user || null);
    setShowEditModal(true)
  }

  const handleEdit = () => {
    refetch()
    setSelectedUsers([])
  }

  const handleDelete = () => {
    DeleteUser(selectedUsers[0]).then(() => {
      refetch();
      setSelectedUsers([]);
      setShowDeleteModal(false);
    });
  } 

  return (
    <>
      <Col sm={12} className="pt-4">
        <Card className="border rounded-2" style={{ background: "#f8f8f8" }}>
          <Card.Header className="py-3" style={{ background: "#f8f8f8" }}>
            <div className="d-flex justify-content-start align-items-center">
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() => onClickEdit()}
                disabled={selectedUsers.length !== 1}
              >
                <i className="bi bi-pencil"></i> Editar
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                className="me-2"
                id="confirmDelete"
                onClick={() => setShowDeleteModal(true)}
                disabled={selectedUsers.length !== 1}
              >
                <i className="bi bi-trash3"></i> Eliminar
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <Table hover responsive="sm" className="table-light">
              <thead>
                <tr>
                  <th>
                    <i className="bi bi-check-lg"></i>
                  </th>
                  <th></th>
                  {COLUMNS.map((item) => (
                    <th key={item}>{item}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      Cargando usuarios...
                    </td>
                  </tr>
                ) : (
                  dataTable?.map((user) => (
                    <tr key={user.id}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={selectedUsers.includes(user.id)}
                          onChange={() => handleSelectUser(user.id)}
                        />
                      </td>
                      <td>
                        <img
                          src={user.image}
                          alt="thumbnail"
                          className="img-thumbnail"
                          width={36}
                          height={36}
                        />
                      </td>
                      <td>{user.firstName}</td>
                      <td>{user.gender}</td>
                      <td>{user.address.address}</td>
                      <td>{user.phone}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
      <ModalEditUser
        show={showEditModal}
        handleClose={() => setShowEditModal(false)}
        userToEdit={dataToEdit}
        handleSave={() => handleEdit()}
      />
      <ModalDeleteUser
        show={showDeleteModal}
        userName={dataTable.find((user) => user.id === selectedUsers[0])?.firstName}
        handleClose={() => setShowDeleteModal(false)}
        handleDelete={() => handleDelete()}
      />
    </>
  );
};
