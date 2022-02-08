import styled from "styled-components";

export const Page = styled.div`
  text-align: center;
`;
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
export const Button = styled.button`
  margin-top: 2rem;
`;
export const ListItems = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
  border: 1px solid black;
  padding-right: 1rem;
  box-sizing: border-box;
`;