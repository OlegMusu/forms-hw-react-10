import styled from "styled-components";

const ContactsButtonStyled = styled.button`
    background-color: #007bff;
    color: #e9e9e9;
    border: none;
    border-radius: 10px;
    padding: 5px 10px;
    font-weight: 550;
    font-size: 15px;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;

    &:hover {
        background-color: #2f94ff;
        color: #ffffff;
        transform: translateY(-1px);
    }

    &:active {
        background-color: #0065d1;
        color: #cfcfcf;
    }
`;

export default ContactsButtonStyled