import { useRef, useState, useEffect } from 'react';
import {
  FormContainer,
  Input,
  InputWrapper,
  ButtonWrapper,
  Select,
  ErrorMessageStyle,
} from './user-form.component.styles.js';
import { useAtomValue } from 'jotai';
import { EmailValidator } from '../../../../common/utils/EmailValidator.jsx';
import { Button } from '../../../../common/components/button/button.styles.js';
import { modalUserDataAtom } from '/src/domains/todo-list/store/todo-list.store.js';

const UserForm = ({ handleAddUser, userId, modalData, isEdit }) => {
  const modalUserData = useAtomValue(modalUserDataAtom);

  const formRef = useRef({});
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (modalData) {
      const { name, email, surname, age, role, password } = modalData;
      formRef.current.name.value = name || '';
      formRef.current.email.value = email || '';
      formRef.current.surname.value = surname || '';
      formRef.current.age.value = age || '';
      formRef.current.role.value = role || '';
      formRef.current.password.value = password || '';
    }
  }, [modalData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, surname, age, role, password } = event.target;
    const isEmailValid = EmailValidator({ email: email.value });

    if (!isEmailValid) {
      setEmailError(true);
    } else {
      setEmailError(false);

      const newUserInfo = {
        id: isEdit ? modalUserData.id : ++userId,
        name: name.value,
        email: email.value,
        surname: surname.value,
        age: age.value,
        role: role.value,
        password: password.value,
      };
      handleAddUser(newUserInfo);
      formRef.current.reset();
    }
  };

  const handleReset = () => {
    formRef.current.reset();
    setEmailError(false);
  };

  return (
    <FormContainer>
      <form ref={formRef} onSubmit={handleSubmit}>
        <InputWrapper>
          <Input type="text" name="name" placeholder="name" />
          <Input name="email" placeholder="email" />
        </InputWrapper>
        {emailError && (
          <ErrorMessageStyle>Email is not valid!</ErrorMessageStyle>
        )}
        <InputWrapper>
          <Input type="text" name="surname" placeholder="surname" />
          <Input type="number" name="age" placeholder="age" />
        </InputWrapper>
        <InputWrapper>
          <Select name="role" defaultValue="">
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
          <Input type="password" name="password" placeholder="password" />
        </InputWrapper>
        <ButtonWrapper>
          <Button type="button" onClick={handleReset}>
            Reset
          </Button>
          <Button type="submit">Send</Button>
        </ButtonWrapper>
      </form>
    </FormContainer>
  );
};

UserForm.propTypes;
export default UserForm;
