import './modal.styles.css';
import { useAtomValue } from 'jotai';
import UserForm from '../components/user-form/user-form.component.jsx';
import { modalUserDataAtom } from '../../../domains/todo-list/store/todo-list.store.js';

const Modal = ({ modalData, handleAddUser, userId, isEdit, children }) => {
  const modalUserData = useAtomValue(modalUserDataAtom);

  return (
    <div
      className={modalData ? 'modal active' : 'modal'}
      onClick={() => modalData(false)}
    >
      <div
        className={modalData ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <UserForm
          modalData={modalUserData}
          handleAddUser={handleAddUser}
          userId={userId}
          isEdit={isEdit}
        />
      </div>
    </div>
  );
};
Modal.propTypes;
export default Modal;
