import React, {useState, useEffect} from "react";

const MainScreen = (props) => {
    const [match, setMatch] = useState('');
    const [person, setPerson] = useState({});

    return(
        <>
            <h1>AstroMatch</h1>
            <h2>Ops, the page doesn`t show up, come back later, till then may it can be ready...</h2>
            {/* <button onClick={() => props.changePage()}>To na Main</button> */}
        </>
    );
};
export default MainScreen;