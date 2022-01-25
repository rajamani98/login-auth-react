import { environment } from 'react-router-component';
function Authetication() {
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
    if (result.status == 200) {
        environment.defaultEnvironment.navigate("/home");
    }
    else {
        environment.defaultEnvironment.navigate("/login");
    }
}
export default Authetication;
