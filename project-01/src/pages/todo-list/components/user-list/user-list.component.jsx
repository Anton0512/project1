import { useAtom, useSetAtom } from 'jotai';
import {
  Li,
  Ul,
  UserListContainer,
  DivWrapper,
} from './user-list.component.styles.js';
import {
  modalActiveAtom,
  modalIsEditDataAtom,
  modalUserDataAtom,
} from '/src/domains/todo-list/store/todo-list.store.js';
import ButtonAntd from '/src/common/components/button/button-antd/button-antd.component.jsx';

const UserList = ({ users, handleDelete }) => {
  const [, setModalData] = useAtom(modalActiveAtom);
  const [, setModalUserData] = useAtom(modalUserDataAtom);
  const setModalIsEdit = useSetAtom(modalIsEditDataAtom);

  const replacePassword = (str) =>
    str?.length > 0 ? '*'.repeat(str?.length) : '';

  const userRoleStyleText = (user) =>
    user.role === 'admin' ? { color: 'red' } : {};

  const editClickHandler = (id) => {
    setModalUserData(users.filter((user) => user.id === id)?.[0]);
    setModalIsEdit(true);
    setModalData(true);
  };

  return (
    <UserListContainer>
      <Ul>
        {users?.map((user) => (
          <Li key={user.id}>
            <div style={userRoleStyleText(user)}>
              {user.name +
                ' ' +
                user.surname +
                ' ' +
                user.age +
                ' ' +
                user.role +
                ' '}
              {replacePassword(user.password) + ' '}
              {' ' + user.email}
            </div>
            <DivWrapper>
              <ButtonAntd onClick={() => editClickHandler(user.id)}>
                Edit
              </ButtonAntd>
              <ButtonAntd onClick={() => handleDelete(user.id)}>
                Delete
              </ButtonAntd>
            </DivWrapper>
          </Li>
        ))}
      </Ul>
    </UserListContainer>
  );
};
UserList.propTypes;

export default UserList;
