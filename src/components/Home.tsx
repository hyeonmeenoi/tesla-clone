import styled from "styled-components";
import Section from "./Section";
import { carInfo } from "../api/carInfo";

export interface information {
  id?: number;
  title: string;
  description: string;
  image: string;
  //range: string;
  //time: string;
  //topSpeed: string;
  //peakPower: string;
  rightBtnText?: string;
  leftBtnText?: string;
}

function Home() {
  return (
    <Container>
      {carInfo.map((info) => {
        return <Section key={info.id} {...info} />;
      })}
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        image="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        image="accessories.jpg"
        leftBtnText="Shop now"
        rightBtnText="no"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
