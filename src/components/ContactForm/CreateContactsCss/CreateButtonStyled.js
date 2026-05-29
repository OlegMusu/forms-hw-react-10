import styled from "styled-components";

const CreateButtonStyled = styled.button`
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #2f94ff;
    }
`;

export default CreateButtonStyled