import { useState, useEffect } from 'react';
import {
  FormContainer,
  InputWrapper,
  ButtonWrapper,
  ErrorMessageStyle,
} from './user-form.component.styles.js';
import { useAtomValue } from 'jotai';
import { EmailValidator } from '../../../../common/utils/EmailValidator.jsx';
import { modalUserDataAtom } from '/src/domains/todo-list/store/todo-list.store.js';
import ButtonAntd from '../../../../common/components/button/button-antd/button-antd.component.jsx';
import InputElement from '../../../../common/components/input-antd/input-antd.component.jsx';
import SelectElement from '../../../../common/components/select-antd/select-antd.component.jsx';
import { Form, Select } from 'antd';

const UserForm = ({ handleAddUser, userId, modalData, isEdit }) => {
  const modalUserData = useAtomValue(modalUserDataAtom);

  const [emailError, setEmailError] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (modalData) {
      const { name, email, surname, age, role, password } = modalData;
      form.setFields([
        { name: 'name', value: name || '' },
        { name: 'email', value: email || '' },
        { name: 'surname', value: surname || '' },
        { name: 'age', value: age || '' },
        { name: 'role', value: role || '' },
        { name: 'password', value: password || '' },
      ]);
    }
  }, [form, modalData]);

  const handleSubmit = (formData) => {
    const { name, email, surname, age, role, password } = formData;
    console.log(formData);
    form.resetFields();

    const isEmailValid = EmailValidator({ email });

    if (!isEmailValid) {
      setEmailError(true);
    } else {
      setEmailError(false);

      const newUserInfo = {
        id: isEdit ? modalUserData.id : ++userId,
        name: name,
        email: email,
        surname: surname,
        age: age,
        role: role,
        password: password,
      };
      handleAddUser(newUserInfo);
      form.resetFields();
    }
  };

  const handleReset = () => {
    form.resetFields();
    setEmailError(false);
  };

  return (
    <FormContainer>
      <Form form={form} onFinish={handleSubmit}>
        <InputWrapper>
          <Form.Item name="name" label="Name">
            <InputElement placeholder="name" />
          </Form.Item>
          <Form.Item name="email" label="Email">
            <InputElement placeholder="email" />
          </Form.Item>
        </InputWrapper>
        {emailError && (
          <ErrorMessageStyle>Email is not valid!</ErrorMessageStyle>
        )}
        <InputWrapper>
          <Form.Item name="surname" label="Surname">
            <InputElement placeholder="surname" />
          </Form.Item>
          <Form.Item name="age" label="Age">
            <InputElement placeholder="age" />
          </Form.Item>
        </InputWrapper>
        <InputWrapper>
          <Form.Item name="role" label="Role">
            <SelectElement placeholder="Select a role">
              <Select.Option value="admin">Admin</Select.Option>
              <Select.Option value="user">User</Select.Option>
            </SelectElement>
          </Form.Item>
          <Form.Item name="password" label="Password">
            <InputElement type="password" placeholder="password" />
          </Form.Item>
        </InputWrapper>
        <ButtonWrapper>
          <Form.Item>
            <ButtonAntd onClick={handleReset} gradientstatus="">
              Reset
            </ButtonAntd>
          </Form.Item>
          <Form.Item>
            <ButtonAntd htmlType="submit" gradientstatus="">
              Send
            </ButtonAntd>
          </Form.Item>
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

UserForm.propTypes;

export default UserForm;
