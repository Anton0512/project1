import TodoListPage from './pages/todo-list/todo-list.page.jsx';
import GlobalStyle from './global.style.js';
import MainLayout from './common/layouts/main.layout.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoListPage />
      <MainLayout />
    </>
  );
}

export default App;
