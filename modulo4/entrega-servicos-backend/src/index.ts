import app from "./app";
import getAddressInfo from "./endpoints/getAddressInfo";

app.get('/address/:cep', getAddressInfo);