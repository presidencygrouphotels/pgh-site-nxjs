import { StaticImageData } from "next/image"

import catering from "@/public/img/webp/catering-outside-bright.webp";
import bakery from "@/public/img/webp/downtown-bakery.webp";
import  liveEvents from "@/public/img/webp/raki-serious.webp";
import  corporate from "@/public/img/webp/men-singing-karaoke.webp";
import  privateDining from "@/public/img/webp/couple-at-the-bar.webp";
import  liveShows from "@/public/img/webp/sathwik-magic-card.webp";
import screenings from "@/public/img/webp/liverpool-screening.webp";

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