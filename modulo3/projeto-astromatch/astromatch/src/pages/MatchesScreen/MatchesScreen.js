import React from "react";

const MatchesScreen = (props) => {
    return(
        <>
            <button onClick={() => props.changePage()}>To nos Matches</button>
        </>
    );
};
export default MatchesScreen;