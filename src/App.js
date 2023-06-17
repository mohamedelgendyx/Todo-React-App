import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';
import { Container } from 'react-bootstrap';


function App() {
    return (
        <div className="App">
            <Container>
                <Todo />
            </Container>
        </div>
    );
}

export default App;
