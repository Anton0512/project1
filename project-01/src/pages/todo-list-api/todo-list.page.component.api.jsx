import { useNavigate } from 'react-router';
import {
  STodoListApiContainer,
  SButton,
  STitle,
} from './todo-list-api.component.styles';

const TodoListApi = () => {
  const navigate = useNavigate();

  const handleGoBack = () => navigate(-1);

  return (
    <STodoListApiContainer>
      <STitle>Todo List Api</STitle>
      <SButton onClick={handleGoBack}>Go Back</SButton>
    </STodoListApiContainer>
  );
};

export default TodoListApi;
