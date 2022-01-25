import { environment } from 'react-router-component';
import { Button } from 'react-bootstrap';
import './Login/LoginUi.css';
function home() {
    let result = fetch("https://loginform-authentication.herokuapp.com/api/v1/authenticate", {
        method: 'GET',
        mode: "cors",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json',
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    });
    if (result.status == 401) {
        environment.defaultEnvironment.navigate("/login");
    }
    async function logout() {
        let result = await fetch("https://loginform-authentication.herokuapp.com/api/v1/logout", {
            method: 'POST',
            mode: "cors"
        });
        if (result.status == 200)
            environment.defaultEnvironment.navigate("/login");
        localStorage.removeItem("user-info");
    }
    return (
        <div class="center">
            <div className="login-button">
                <h1>"THANK YOU FOR LOGGING.....!!!!!!"</h1>
            </div>
            <div>
                <div className="login-button">
                    <Button type="button" variant="secondary"
                        className="mx-2" onClick={logout}>LOGOUT</Button>
                </div>
            </div>
        </div>
    );
}
export default home;
