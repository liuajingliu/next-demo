import Hero from "../../components/Hero/page";
import homeSrc from "../../../public/home.jpeg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
};

export default function Reliability() {
  return (
    <Hero imageSrc={homeSrc} altTxt="Reliability Image" text="Reliability" />
  );
}
