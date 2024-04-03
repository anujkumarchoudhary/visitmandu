import { FaTags, FaAward } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import rooms from '../asserst/home/room-b1.jpg'
import rooms1 from '../asserst/home/room-b1.jpg'
import hotal_1 from '../asserst/home/hotal_1.jpg'
import hotal_2 from '../asserst/home/hotal_2.jpg'
import hotal_3 from '../asserst/home/hotel_3.jpg'
import hotal_4 from '../asserst/home/hotel_4.jpg'
import { FaGlassMartini } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaHandsWash } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSwimmer } from "react-icons/fa";
import { FaSmoking } from "react-icons/fa";
import img from '../asserst/home/news1.jpg'
import img1 from '../asserst/home/news2.jpg'
import img2 from '../asserst/home/news3.jpg'
import img3 from '../asserst/home/news4.jpg'


export const weProvide = [
    {
        "id": 1,
        "icon": <FaTags fontSize={65} style={{ color: "#EB294B" }} />,
        "heading": "COMPETETIVE PRICING",
        "desc": "With 500+ suppliers and the purchasing power of 300 million members"
    },
    {
        "id": 2,
        "icon": <FaAward fontSize={65} style={{ color: "#EB294B" }} />,
        "heading": "AWARD WINNING SERVICE",
        "desc": "Travel worry free knowing that we're here if you need us, 24 hours a day"
    },
    {
        "id": 3,
        "icon": <TbWorld fontSize={65} style={{ color: "#EB294B" }} />,
        "heading": "WORLDWIDE COVERAGE",
        "desc": "Over 1,200,000 hotels in more than 200 countries and regions."
    }
]
export const ourRooms = [
    {
        "id": 1,
        "img": rooms,
        "heading": "Royal Delux",
        "price": 2010
    },
    {
        "id": 2,
        "img": rooms1,
        "heading": "Super Deluxe",
        "price": 2010
    }
]
export const topHotels = [
    {
        "id": 1,
        "img": hotal_1,
        "heading": "MALDIVES",
        "price": 2010
    },
    {
        "id": 2,
        "img": hotal_2,
        "heading": "AFRICA",
        "price": 2010
    },
    {
        "id": 3,
        "img": hotal_3,
        "heading": "EGYPT   ",
        "price": 2010
    },
    {
        "id": 4,
        "img": hotal_4,
        "heading": "AMERICA",
        "price": 2010
    }
]
export const amenities = [
    {
        "id": 1,
        "icon": <FaGlassMartini fontSize={40} />,
        "heading": "PRIVATE BAR",
        "price": 2010
    },
    {
        "id": 2,
        "icon": <FaCarAlt fontSize={40} />,
        "heading": "TRANSPORT",
        "price": 2010
    },
    {
        "id": 3,
        "icon": <FaWifi fontSize={40} />,
        "heading": "FREE WIFI",
        "price": 2010
    },
    {
        "id": 4,
        "icon": <FaHandsWash fontSize={40} />,
        "heading": "LAUNDRY SERVICE",
        "price": 2010
    },
    {
        "id": 5,
        "icon": <IoSettingsSharp fontSize={40} />,
        "heading": "QUICK SERVICE",
        "price": 2010
    },
    {
        "id": 6,
        "icon": <FaMapMarkerAlt fontSize={40} />,
        "heading": "CITY MAP",
        "price": 2010
    },
    {
        "id": 7,
        "icon": <FaSwimmer fontSize={40} />,
        "heading": "SWIMMING POOL",
        "price": 2010
    },
    {
        "id": 8,
        "icon": <FaSmoking fontSize={40} />,
        "heading": "SMOKING FREE",
        "price": 2010
    }
]
export const topReview = [
    {
        "id": 1,
        "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis",
    },
]
export const latestNew = [
    {
        "id": 1,
        "para": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex neque, sodales accumsan sapien et, auctor vulputate quam donec vitae consectetur turpis",
    },
]
export const news = [
    {
        "id": 1,
        "img": img,
        "label": "16 DECEMBER 2019",
        "postBy": "Sherry Lin",
        "comments": "3 comments",
        "heading": "WHY CHOOSE GAUTAMA HOTEL TO TRAVEL THIS SUMMER",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh."
    },
    {
        "id": 1,
        "img": img1,
        "label": "14 DECEMBER 2019",
        "postBy": "Sherry Lin",
        "comments": "3 comments",
        "heading": "WHY CHOOSE GAUTAMA HOTEL TO TRAVEL THIS SUMMER",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh."
    },
    {
        "id": 1,
        "img": img2,
        "label": "12 DECEMBER 2019",
        "postBy": "Sherry Lin",
        "comments": "3 comments",
        "heading": "WHY CHOOSE GAUTAMA HOTEL TO TRAVEL THIS SUMMER",
        "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum orci nulla, fermentum in faucibus a, interdum eu nibh."
    }
]