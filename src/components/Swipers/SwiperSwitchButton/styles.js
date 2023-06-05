import styled from "styled-components";

export const SetaAvancar = styled.img`
    transform: rotateY(180deg);
`

export const ButtonLeft = styled.button`
    background-color: transparent ;
    border: 0;
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    @media (max-width: 420px){
        display: none;
    }




`

export const ButtonRight = styled.button`
    background-color: transparent ;
    border: 0;
    cursor: pointer;
    position: absolute;
    right: 1%;
    top: 50%;
    transform: translateY(-50%);

     @media (max-width: 420px){
        display: none;
    }


`