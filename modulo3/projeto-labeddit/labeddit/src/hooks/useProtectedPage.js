import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../routes/coordinator";

const useProtectedPage = () => {
    const navigate = useNavigate();

    let token = '';

    useEffect(
        () => {
            token = localStorage.getItem('token');

            if (!token) {
                goToLoginPage(navigate);
            }
        },
        [token]
    );
};
export default useProtectedPage;