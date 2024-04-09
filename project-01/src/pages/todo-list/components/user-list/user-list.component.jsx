import { useAtom, useSetAtom } from 'jotai';
import {
  SLi,
  SUl,
  SUserListContainer,
  SDivWrapper,
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
    <SUserListContainer>
      <SUl>
        {users?.map((user) => (
          <SLi key={user.id}>
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
            <SDivWrapper>
              <ButtonAntd onClick={() => editClickHandler(user.id)}>
                Edit
              </ButtonAntd>
              <ButtonAntd onClick={() => handleDelete(user.id)}>
                Delete
              </ButtonAntd>
            </SDivWrapper>
          </SLi>
        ))}
      </SUl>
    </SUserListContainer>
  );
};
UserList.propTypes;

export default UserList;
