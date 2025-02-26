import styled from "styled-components";

export const Container = styled.div`
background-color: #171923;
position: fixed;
height: 100%;
top: 0px;
left: 0px;
width: 255px;
left: ${props => props.sidebar ? '0' : '-100%'};
animation: showSidebar .4s;
z-index: 9999;
text-align: center;

> svg {
    position: fixed;
    color: white;
    height: 30px;
    display: flex;
    margin-top: 32px;
    margin-left: 60px;
    cursor: pointer;
}

@keyframes showSidebar {
    from {
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
    }
}


`