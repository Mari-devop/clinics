import styled from 'styled-components';

export const SearchComponent = styled.div`
    margin: 15px 50px;
    display: flex;
    align-items: center;
    background-color: transparent;
    input {
        border: 1px solid var(--border-color);
        background-color: var(--white-color);
        border-radius: 5px;
        outline: none;
        font-size: 14px;
        padding: 5px 10px 10px 40px;
        position: relative;
        width: 505px;
    }
    svg {
        color: var(--secondary-color);
        position: absolute;
        padding-left: 10px;

    }
`;