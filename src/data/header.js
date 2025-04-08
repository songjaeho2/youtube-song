import { CiBaseball } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";

import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "포트폴리오",
        icon: <CiBaseball />,
        src: "/"
    },
    {
        title: "광고영상",
        icon: <CiMoneyBill />,
        src: "/webd"
    },
    {
        title: "뮤직비디오",
        icon: <CiBoxes />,
        src: "/mv"
    },


];


export const snsLink = [
    {
        title: "github",
        url: "https://github.com/webstoryboy",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/webstoryboy",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/webstoryboy",
        icon: <AiOutlineInstagram />
    },
]
