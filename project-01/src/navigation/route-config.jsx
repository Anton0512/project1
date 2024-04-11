import TodoListApi from '../pages/todo-list-api/todo-list.page.component.api';
import TodoListPage from '../pages/todo-list/todo-list.page';
import { createRoutesFromElements, Route } from 'react-router';
import MainLayout from '../common/layouts/main.layout';

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<MainLayout />}>
      <Route path="Click1" element={<TodoListPage />} />
      <Route path="Click2" element={<TodoListApi />} />
    </Route>
    <Route path="*" element={<p>Error page</p>} />
  </Route>
);
