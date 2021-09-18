import * as setAuthToken from "../utils/setAuthToken";



function getUser() {
    return setAuthToken.getUserFromToken();
}
export { getUser };