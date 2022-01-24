import { environment } from 'react-router-component';
function Authetication() {
    let result = fetch("https://loginform-authentication.herokuapp.com/api/v1/authenticate", {
        method: 'GET',
        mode: "cors",
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
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
