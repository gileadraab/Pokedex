import styled from "styled-components";

export const NaviBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  height: 20vh;
`;
export const ContainerImg = styled.div`
  position: relative;
  width: 100%;
  height: 20vh;
  img {
    position: absolute;
    width: 30%;
    height: 15vh;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const ButtonPokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;  
  min-width: 80px;
  left: 80%;
  position: absolute;
  height: 8vh;
  top: 50%;
  transform: translate(-20%, -50%);
  color: white;
  background: #33a4f5;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  line-height: 36px;
  cursor: pointer;
`;
export const ButtonPokemons = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 15%;

  position: absolute;
  min-width: 60px;
  right: 80%;
  /* height: 74px; */
  top: 50%;
  transform: translate(-20%, -50%);
  color: #080707;
  background-color: white;
  border: none;  
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  line-height: 36px;
  cursor: pointer;
`;
export const DeletePokedex = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 20%;  
  min-width: 80px;
  height: 8vh;
  position: absolute;
  left: 80%;
  top: 50%;
  transform: translate(-20%, -50%);
  color: white;
  background: #f0290e;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 2vw;
  line-height: 36px;
  cursor: pointer;
`;
