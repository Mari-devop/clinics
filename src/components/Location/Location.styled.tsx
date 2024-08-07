import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    height: 555px;
    width: 51%;
    border: 1px solid var(--border-color);
    border-radius: 5px;
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
            background-color: var(--hover-color);
            cursor: pointer;
        }
    }
 `;   

export const AboutContainer = styled.div`
    margin-top: 30px;
    padding: 20px;

    h4 {
        margin: 0;
        font-size: 18px;
    }

    p {
        font-size: 14px;
        margin: 5px 0;
    }

    .about {
        margin-top: 40px;
        font-size: 16px;
        line-height: 1.5;
        text-align: justify;
    }
`;

export const Details = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 40px 0;

    p {
        font-size: 18px;
        margin: 0;
    }
`;
  
