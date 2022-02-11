import React, {useState, useEffect} from "react";
import getProfileToChoose from '../../services/getProfileToChoose.js';
import choosePerson from "../../services/choosePerson.js";
import clear from "../../services/clear.js";
import logo from '../../assets/img/logoAstroMatch.png'

const MainScreen = (props) => {
    const [match, setMatch] = useState(false);
    const [personId, setPersonId] = useState('');
    const [next, setNext] = useState(false);
    const [person, setPerson] = useState({});

    const yepClick = () => {
        setMatch(true);
        setNext(!next);
        person ? setPersonId(person.id) : setPersonId('');
        choosePerson(personId, match);
        setPerson({});
    };
    const nopeClick = () => {
        setMatch(false);
        setNext(!next);
        person ? setPersonId(person.id) : setPersonId('');
        choosePerson(personId, match);
        setPerson({});
    };

    useEffect(()=>{
        getProfileToChoose()
        .then((data) => {
            setPerson(data);
        })
        .catch((err) => {console.log(err.response)});

    }, [!next]);

    return(
        <>
            <h1><img src={logo} alt="logo astro-match" /></h1>
            {person.name === undefined ? <>♥️</> : <h2>{`${person.name}, ${person.age}`}</h2>}
            <img src={person.photo} alt="foto do outro usuário"/>
            <p>{person.bio}</p>
            <button onClick={() => {nopeClick()}}>x</button>
            <button onClick={() => {yepClick()}}>♥</button>
            
            <button onClick={() => {props.clearClick()}}>clear</button>
            
            <button onClick={() => props.changePage()}>To na Main</button>
        </>
    );
};
export default MainScreen;