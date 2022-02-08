import styled from "styled-components";

export const List = styled.ul`
  width: 85vw;
  margin: 2rem auto;
  border: 1px solid black; 
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;

  li{
    width: 100%;
    text-align: start;
    padding: 1rem;
  }
`;
export const Form = styled.form`
  div{
    width: 80%;
    margin: 0.5rem auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Div = styled.div`
  height: 30px;
  width: 95%;
  margin: 5px 0;
  border: 1px black solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;

  h4{
    padding: 15px;
  }

  audio{
    height: 10px;
  }
`;