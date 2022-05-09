import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState);

    const changeInput = (evt) => {
        const {value, name} = evt.target;
        setForm({...form, [name]: value});
    };

    const clearInput = () => {
        setForm(initialState);
    };

    return [form, changeInput, clearInput];
};
export default useForm;