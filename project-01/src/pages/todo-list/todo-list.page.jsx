import { useState } from 'react';
import { useAtom } from 'jotai';
import {
  Container,
  Label,
  ButtonContainer,
  ButtonRow,
} from './todo-list.page.styles.js';
import {
  dataUser,
  modalActiveAtom,
  modalIsEditDataAtom,
} from '../../domains/todo-list/store/todo-list.store.js';
import UserList from './components/user-list/user-list.component.jsx';
import Modal from './modal/modal.jsx';
import ButtonAntd from '../../common/components/button/button-antd/button-antd.component.jsx';
import SelectElement from '../../common/components/select-antd/select-antd.component.jsx';
import { Select } from 'antd';

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

  const changeRole = (value) => {
    setSelectedRole(value);
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
        <SelectElement
          onChange={changeRole}
          value={selectedRole}
          id="role-filter"
        >
          <Select.Option value="all">All roles</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
          <Select.Option value="user">User</Select.Option>
        </SelectElement>
        <ButtonContainer>
          <ButtonRow>
            <ButtonAntd onClick={handleSortAz}>Sort by name A-Z</ButtonAntd>
            <ButtonAntd onClick={handleSortZa}>Sort by name Z-A</ButtonAntd>
          </ButtonRow>
          <ButtonRow>
            <ButtonAntd onClick={handleSortAgeFromZeroToHunndred}>
              Sort by age 0-100
            </ButtonAntd>
            <ButtonAntd onClick={handleSortAgeFromHunndredToZero}>
              Sort by age 100-0
            </ButtonAntd>
          </ButtonRow>
          <ButtonRow>
            <ButtonAntd onClick={() => setModalData(true)}>
              Create user
            </ButtonAntd>
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
};

TodoListPage.propTypes;
export default TodoListPage;
