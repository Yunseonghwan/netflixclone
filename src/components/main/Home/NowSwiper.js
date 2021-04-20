import { apiImage } from "../../../stores/Api/Api";
import styled from "styled-components";

const CardContainer = styled.div`
  flex: 1;
  width: 200px;
  flex: 1;
  min-width: 200px;
  opacity: 0.5;
  transform: scale(0.7);
  transition: opacity 300ms linear, border-color 300ms linear,
    background-color 300ms linear,
    transform 300ms cubic-bezier(0.455, 0.04, 0.515, 0.955);
`;

const NowSwiper = ({ image, id }) => {
  return (
    <CardContainer key={id}>
      <img
        src={apiImage(image)}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "white",
        }}
      />
    </CardContainer>
  );
};

export default NowSwiper;
