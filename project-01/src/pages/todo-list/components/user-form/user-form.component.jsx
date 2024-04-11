import { useState, useEffect } from 'react';
import {
  SFormContainer,
  SInputWrapperColOne,
  SInputWrapperColTwo,
  SButtonWrapper,
  SErrorMessageStyle,
  SInputColContainer,
} from './user-form.component.styles.js';
import { useAtomValue } from 'jotai';
import { EmailValidator } from '/src/common/utils/EmailValidator.jsx';
import { modalUserDataAtom } from '/src/domains/todo-list/store/todo-list.store.js';
import ButtonAntd from '/src/common/components/button/button-antd/button-antd.component.jsx';
import InputElement from '/src/common/components/input-antd/input-antd.component.jsx';
import SelectElement from '/src/common/components/select-antd/select-antd.component.jsx';
import { Form, Select, Input } from 'antd';

const UserForm = ({ handleAddUser, userId, modalData, isEdit }) => {
  const modalUserData = useAtomValue(modalUserDataAtom);

  const [emailError, setEmailError] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    if (Object.keys(modalData)?.length) {
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
  }, [modalData]);

  const handleSubmit = (formData) => {
    const { name, email, surname, age, role, password } = formData;
    form.resetFields();

    const isEmailValid = EmailValidator({ email });

    if (!isEmailValid) {
      setEmailError(true);
    } else {
      setEmailError(false);

      const newUserInfo = {
        id: isEdit ? modalUserData.id : ++userId,
        name,
        email,
        surname,
        age,
        role,
        password,
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
    <SFormContainer>
      <Form form={form} onFinish={handleSubmit}>
        <SInputColContainer>
          <SInputWrapperColOne>
            <Form.Item name="name" label="Name">
              <InputElement placeholder="name" />
            </Form.Item>
            <Form.Item name="surname" label="Surname">
              <InputElement placeholder="surname" />
            </Form.Item>
            <Form.Item name="role" label="Select a role">
              <SelectElement
                placeholder="Select"
                popupClassName="custom-select-dropdown"
              >
                <Select.Option value="admin">Admin</Select.Option>
                <Select.Option value="user">User</Select.Option>
              </SelectElement>
            </Form.Item>
          </SInputWrapperColOne>

          <SInputWrapperColTwo>
            {emailError && (
              <SErrorMessageStyle>Email is not valid!</SErrorMessageStyle>
            )}
            <Form.Item name="email" label="Email">
              <InputElement placeholder="email" />
            </Form.Item>
            <Form.Item name="age" label="Age">
              <InputElement placeholder="age" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input.Password placeholder="password" />
            </Form.Item>
          </SInputWrapperColTwo>
        </SInputColContainer>
        <SButtonWrapper>
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
        </SButtonWrapper>
      </Form>
    </SFormContainer>
  );
};

UserForm.propTypes;

export default UserForm;
