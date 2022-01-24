import { Locations, Location } from 'react-router-component';
import Login from './Login/Login';
import home from './home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Locations>
            <Location path="/login" handler={Login} />
            <Location path="/home" handler={home} />
        </Locations>
    )
}

export default App;
