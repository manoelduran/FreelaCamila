import styled from "styled-components";

export const Container = styled.section`
width: 100%;
background: orange;
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 0px 100px;
`;


export const InfoContainer = styled.div`
width: 100%;
padding-top: 50px;

display: flex;
flex-direction: column;

justify-content: center;
`;

export const Name = styled.h1`
font-size: 40px;
align-self: center;
`;

export const Position = styled.h4`
margin-top: 20px;
font-size: 25px;
align-self: center;
`;

export const Text = styled.span`
margin-top: 50px;
font-size: 20px;
align-self: center;
`;

export const IconsContainer = styled.div`
align-self: center;
margin-top: 30px;
display: flex;
a + a {
    margin-left: 30px;
}
`;