import { useState } from 'react';
import { useAtom } from 'jotai';

import {
  Container,
  Label,
  Select,
  Button,
  ButtonContainer,
  ButtonRow,
} from './todo-list.page.styles.js';
import {dataUser, modalActiveAtom, modalIsEditDataAtom} from '../../domains/todo-list/store/todo-list.store.js';
import UserList from './components/user-list/user-list.component.jsx';
import Modal from './modal/modal.jsx';


const TodoListPage = () => {
  const [users, setUsers] = useAtom(dataUser);
  const [selectedRole, setSelectedRole] = useState('all');
  const [modalData, setModalData] = useAtom(modalActiveAtom);
  const [modalIsEdit, setModalIsEdit] = useAtom(modalIsEditDataAtom);

  const handleDelete = (id) => {
    setUsers(
      users.filter((user) => {
        if (user.id !== id) {
          return user;
        }
      })
    );
  };

  const handleAddUser = (newUserInfo) => {
    const index = users.findIndex((item) => item.id === newUserInfo.id);
    const array = [...users];
    if (index !== -1) {
      array[index] = { ...newUserInfo };
      setUsers(array);
    } else {
      setUsers([...users, newUserInfo]);
    }

    setModalData(false);
    setModalIsEdit(false);
  };
  const filterUsersByRole = () => {
    if (selectedRole === 'all') {
      return users;
    } else {
      return users.filter((user) => user.role === selectedRole);
    }
  };

  const changeRole = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSortAz = () => {
    const sortedUsers = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sortedUsers);
  };

  const handleSortZa = () => {
    const sortedUsers = [...users].sort((a, b) => b.name.localeCompare(a.name));
    setUsers(sortedUsers);
  };
  const handleSortAgeFromZeroToHunndred = () => {
    const sortedUsers = [...users].sort((a, b) => a.age - b.age);
    setUsers(sortedUsers);
  };
  const handleSortAgeFromHunndredToZero = () => {
    const sortedUsers = [...users].sort((a, b) => b.age - a.age);
    setUsers(sortedUsers);
  };

  return (
    <>
      <Container>
        <Label htmlFor="role-filter">Filter by roles:</Label>
        <Select onChange={changeRole} value={selectedRole} id="role-filter">
          <option value="all">All roles</option>
          <option value="admin">admin</option>
          <option value="user">user</option>
        </Select>
        <ButtonContainer>
          <ButtonRow>
            <Button onClick={handleSortAz}>Sort by name A-Z</Button>
            <Button onClick={handleSortZa}>Sort by name Z-A</Button>
          </ButtonRow>
          <ButtonRow>
            <Button onClick={handleSortAgeFromZeroToHunndred}>
              Sort by age 0-100
            </Button>
            <Button onClick={handleSortAgeFromHunndredToZero}>
              Sort by age 100-0
            </Button>
          </ButtonRow>
          <ButtonRow>
            <Button className="open-btn" onClick={() => setModalData(true)}>
              Create user
            </Button>
          </ButtonRow>
        </ButtonContainer>
      </Container>

      <UserList users={filterUsersByRole()} handleDelete={handleDelete} />
      <Modal
        handleAddUser={handleAddUser}
        userId={users.length}
        isEdit={modalIsEdit}
        modalData={modalData}
      />
    </>
  );
}

export default TodoListPage;
