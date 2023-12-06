import { Navbar } from './components/NavBar';
import { Menu } from './components/Menu';
import { TaskList } from './components/TaskList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='main-container'>
        
        <section className='menu-lateral'>
          <TaskList/>
        </section>

        <section>
          <Menu/>
        </section>
        
      </div>
           
    </div>
  );
}

export default App;