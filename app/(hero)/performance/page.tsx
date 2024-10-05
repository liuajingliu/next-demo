import Hero from "../../components/Hero/page";
import homeSrc from "../../../public/home.jpeg"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Performance',
}

export default function Performance () {
  return (
    <Hero imageSrc={homeSrc} altTxt="Performance Image" text="Performance" />
  )
}
