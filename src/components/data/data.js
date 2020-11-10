import black from "../image/black.png";
import white from "../image/white.png";
import blue from "../image/blue.png";
import brown from "../image/brown.png";
import green from "../image/green.png";
import lightGreen from "../image/light_green.png";
import orange from "../image/orange.png";
import pink from "../image/pink.png";
import purple from "../image/purple.png";
import red from "../image/red.png";
import turquoise from "../image/turquoise.png";
import yellow from "../image/yellow.png";
import test from "./selectList"

import {AiFillDelete, AiFillLike, AiFillDislike,} from "react-icons/ai";
import {GiOverkill} from "react-icons/gi";       

const data = {
    players: [
        {src: black, alt: "black", killed: false, believe: false, dontBelive: false, id: 1},
        {src: white, alt: "white", killed: false, believe: false, dontBelive: false, id: 2},
        {src: blue, alt: "blue", killed: false, believe: false, dontBelive: false, id: 3},
        {src: brown, alt: "brown", killed: false, believe: false, dontBelive: false, id: 4},
        {src: green, alt:"green", killed: false, believe: false, dontBelive: false, id: 5},
        {src: lightGreen, alt:"lightGreen", killed: false, believe: false, dontBelive: false, id: 6},
        {src: orange, alt: "orange", killed: false, believe: false, dontBelive: false, id: 7},
        {src: pink, alt: "pink", killed: false, believe: false, dontBelive: false, id: 8},
        {src: purple, alt: "purple", killed: false, believe: false, dontBelive: false, id: 9},
        {src: red, alt: "red", killed: false, believe: false, dontBelive: false, id: 10},
        {src: turquoise, alt: "turquoise", killed: false, believe: false, dontBelive: false, id: 11},
        {src: yellow, alt: "yellow", killed: false, believe: false, dontBelive: false, id: 12}
    ],
    btns: [
        {name: AiFillDelete, alt: "удалить", description: "Удалить", action: "delete", key: "zxc"},
        {name: GiOverkill, alt: "убит", description: "Убит", action: "killed", key:"zxcv"},
        {name: AiFillLike, alt: "Доверяю", description: "Доверяю", action: "believe", key: "zxcvb"},
        {name: AiFillDislike, alt: "Не доверяю", description: "Не доверяю", action: "dontBelieve", key: "zxcvbn"},
        {name: test, alt: "Вкинул", description: "Вкинул", action: "dontBelieve", key: "zxcvbnz"},

    ],

}


export default data;