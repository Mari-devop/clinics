import styled from "styled-components";

export const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--white-color);
    width: 40%;
    height: 70vh;
    overflow-y: scroll;
`;
export const ResultItem = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid var(--border-color);
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;