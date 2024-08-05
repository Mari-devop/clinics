import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 520px;
    width: 51%;
    border: 1px solid var(--border-color);
`;

export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        background-color: #f9f9f9;
        border: 1px solid #f9f9f9;
        padding: 10px;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
        &:hover {
            background-color: #f1f1f1;
        }
    }
    
`;  
