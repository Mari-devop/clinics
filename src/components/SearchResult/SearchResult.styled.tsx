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
    padding: 20px;
    border-bottom: 1px solid var(--border-color);

    h4 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
    }

    p {
        margin: 5px 0;
        font-size: 0.9rem;
        color: var(--secondary-text-color);
        font-weight: 500;
    }

    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background-color: var(--hover-color);
        cursor: pointer;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 15px;

    a {
        font-size: 0.9rem;
        font-weight: 500;
        text-decoration: none;
    }
`;