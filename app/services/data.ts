import { StaticImageData } from "next/image"

import catering from "@/public/img/catering-outside-bright.webp";
import bakery from "@/public/img/downtown-bakery.webp";
import  liveEvents from "@/public/img/raki-serious.webp";
import  corporate from "@/public/img/men-singing-karaoke.webp";
import  privateDining from "@/public/img/couple-at-the-bar.webp";
import  liveShows from "@/public/img/sathwik-magic-card.webp";
import screenings from "@/public/img/liverpool-screening.webp";

export const serviceList:{
  image: StaticImageData;
  anchor: string;
  service: string;
}[] = [

{
    service :"catering",
    anchor:"#catering",
    image: catering
},
{
    service :"bakery",
    anchor:"#bakery",
    image: bakery
},
{
    service :"live-events",
    anchor:"#live-events",
    image: liveEvents
},
{
    service :"corporate",
    anchor:"#corporate",
    image: corporate
},
{
    service :"private",
    anchor:"#private",
    image: privateDining
},
{
    service :"live-shows",
    anchor:"#live-shows",
    image: liveShows
},
{
    service :"screenings",
    anchor:"#screenings",
    image: screenings
},


]