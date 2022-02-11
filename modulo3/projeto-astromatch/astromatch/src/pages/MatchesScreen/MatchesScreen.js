import React, {useState, useEffect} from "react";
import getMatches from "../../services/getMatches.js";

const MatchesScreen = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches()
        .then((data) => {
            setMatches(data);
        })
        .catch((err) => {console.log(err.response)});
    }, []);

    console.log(matches)

    const matchList = matches.map((match) => {
        return (
            <li key={match.id}>
            <img src={match.photo} alt="foto do usuario com match" />
            <p>{match.name}</p>
            </li>
        );
    });

    return(
        <>
            <ol>
                {matchList}
            </ol>
            <button onClick={() => props.changePage()}>To nos Matches</button>
            
            <button onClick={() => {props.clearClick()}}>clear</button>
        </>
    );
};
export default MatchesScreen;