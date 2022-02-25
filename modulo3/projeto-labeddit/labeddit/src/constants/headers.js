const token = localStorage.getItem(token);

if (token) {
    console.log(token);
}
else {
    console.log('num tem');
}

export default headers = {
    header:{
        Authorizations:{
            token
        }
    }
};