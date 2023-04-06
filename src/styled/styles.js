import styled from "styled-components";

export const ChatBox = styled.div`
  box-shadow: 0px 0px 8px #ccc;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  height: 18em;
  width: 60%;
  padding: 10px;
`;
export const Heading1 = styled.div`
  color: #28d;
  font-size: 30px;
  font-weight: 600;
`;
export const HumanMessage = styled.div`
  width: 50%;
  float: right;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: ${props=>props.color};
  color: #fff;
`;

export const BotMessage = styled.div`
  width: 50%;
  float: left;
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: #ccc;
  color: #000;
`;
export const ChatInputGroup = styled.form`
  /* border: 1px solid black; */
  position: absolute;
  bottom: 10px;
  width: 96%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Input = styled.input`
  border: none;
  padding: 10px;
  outline: none;
  width: 90%;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #28d;

`;

export const Button = styled.button`
  border: none;
  background-color: #28d;
  padding: 10px;
  border-radius: 5px;
  float: right;
  color: #fff;
  :disabled{
    background-color: #D4D4D4;
  }
`;

export const Status = styled.div`
  margin: 10px;
  font-weight: 600;
`;

export const size = {
  mobile: "320px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "2560px"
};
export const Header = styled.nav`
  transition: padding 0.25s ease-in-out;
  background-color: ${(props) => props.bgColor};
  padding: ${(props) => props.height};
  position: fixed;
  margin: auto;
  width: 100%;
  top: 0;
  box-shadow: 0px 0px 7px #ccc;
  z-index: 99999;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  overflow-x: hidden;
  text-align: center;
`;

export const Heading = styled.div`
  transition: transform 0.25s ease-in-out;
  transform: scale(${(props) => props.scale});
  font-size: 25px;
  font-weight: 600;
  margin-left: 3rem;
`;

export const Content = styled.p`
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
    font-weight: 600;
  }
`;

export const Margin = styled.div`
  height: 6rem;
`;
export const Nav = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 50%;
  height: 70vh;
  margin: auto;
  overflow-y: hidden;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
export const NavButtons = styled.div`
  transition: background-color 0.4s ease-in-out;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;
export const Dflex = styled.div`
  display: flex;
  align-items: center;
  z-index: 99;
`;

export const Tab = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 60vh;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-thumb {
    color: red;
    background-color: black;
    border-radius: 9px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebee;
  }
`;

export const PaddingOne = styled.div`
  padding: 1rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Card = styled.div`
  border: 1px solid #ebebee;
  width: 30em;
  margin-right: 1rem;
  font-size: 12px;
  flex: 0 0 200px;
  margin-bottom: 15px;
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0px 10px #ccc;
  }
`;
export const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

export const HScroll = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 99;
  width: 100%;
  overflow-x: auto;
  user-select: none;
  scroll-behavior: smooth;
  /* transition-timing-function: linear; */
  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #ebebee;
  }
  &::-webkit-scrollbar-track-piece {
    width: 13px;
  }
`;

export const Button1 = styled.button`
  bottom: 15px;
  width: 100%;
  border: none;
  background-color: crimson;
  border-radius: 5px;
  padding: 3px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
`;

export const Sidebar = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  height: 100rem;
  position: fixed;
  right: ${(props) => props.sidebar};
  transition: all 0.4s;
  z-index: 99999;
  padding: 5rem;
  top: 3.4rem;
`;

export const Toggle = styled.div`
  font-size: ${(props) => props.size};
`;

export const ListItem = styled.li`
  color: #000;
  font-style: Arial, Helvetica, sans-serif;
  padding: 0.5rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
export const FixedDiv = styled.div`
  position: fixed;
`;
