import { TodoGroup } from './components/TodoGroup';
import { TodoItem } from './components/TodoItem';

function Home() {
  return (
    <>
      <TodoGroup>
        <TodoItem />
        <TodoItem />
      </TodoGroup>
    </>
  );
}

export default Home;
