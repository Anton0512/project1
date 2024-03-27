import { useAtom, useSetAtom } from 'jotai';

import { Li, Ul, Button, UserListContainer } from './user-list.component.styles.js';
import {
  modalActiveAtom,
  modalIsEditDataAtom,
  modalUserDataAtom
} from '../../../../domains/todo-list/store/todo-list.store.js';

const UserList = (props) => {
  const [, setModalData] = useAtom(modalActiveAtom);
  const [, setModalUserData] = useAtom(modalUserDataAtom);
  const setModalIsEdit = useSetAtom(modalIsEditDataAtom);

  const { users, handleDelete } = props;
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
            <Button onClick={() => editClickHandler(user.id)}>Edit</Button>
            <Button onClick={() => handleDelete(user.id)}>Delete</Button>
          </Li>
        ))}
      </Ul>
    </UserListContainer>
  );
};
UserList.propTypes;

export default UserList;
