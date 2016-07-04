const config = {
    "localhost": {
        "authUrl": 'https://wladhubtags.herokuapp.com/authenticate',
        "client_id": '6147d0e9f59196aed457',
    },
    "hubtagsvr.surge.sh": {
        "authUrl": 'http://hubtagsvr.surge.sh/auth/callback',
        "client_id": '8e64b55dd8e15c1392d7',
    },
}[location.hostname]

export default config
