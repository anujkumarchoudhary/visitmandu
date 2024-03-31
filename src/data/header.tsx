import { MdOutlineMail } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUser, FaPen, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export const topbar = {
    "leftSide": [
        {
            "id": 1,
            "icon": <MdMarkEmailUnread fontSize={20} />,
            "label": "info@gautama.com"
        },
        {
            "id": 1,
            "icon": <FaPhoneFlip fontSize={16} />,
            "label": "977-222-333-444"
        },
        {
            "id": 1,
            "icon": "",
            "label": "Eng"
        },
    ],
    "rightSide": [
        {
            "id": 1,
            "icon": <FaUser />,
            "label": "Login"
        },
        {
            "id": 1,
            "icon": <FaPen />,
            "label": "Register"
        },
        {
            "id": 1,
            "icon": <FaFacebook />
        },
        {
            "id": 1,
            "icon": <FaTwitter />
        },
        {
            "id": 1,
            "icon": <FaInstagram />
        },
        {
            "id": 1,
            "icon": <FaLinkedin />
        }
    ]
}
export const menus = [

    {
        "id": 1,
        "label": "Home",
        "path": "/home"
    },
    {
        "id": 1,
        "label": "About Us",
        "path": "/about"
    },
    {
        "id": 1,
        "label": "Rooms",
        "path": "/rooms"
    },
    {
        "id": 1,
        "label": "Restaurant",
        "path": "/restaurant"
    },
    {
        "id": 1,
        "label": "Shop",
        "path": "/blog"
    },
    {
        "id": 1,
        "label": "Blog",
        "path": "/blog"
    },
    {
        "id": 1,
        "label": "Contact",
        "path": ""
    },
    {
        "id": 1,
        "label": "Login",
        "path": "#"
    },

]