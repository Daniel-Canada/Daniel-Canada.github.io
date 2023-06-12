import { BookmarkBorderOutlined, CottageOutlined, GitHub, InfoOutlined, LibraryBooksOutlined, LinkedIn, MailOutline } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";

const styling = {color: "#000"}


export const buttons = [
  {
    label: "Home",
    icon:  <CottageOutlined sx={styling}></CottageOutlined>,
    path: "/"
  },
  {
    label: "Projects",
    icon:  <LibraryBooksOutlined sx={styling}></LibraryBooksOutlined>,
    path: "projects"
  },
  {
    label: "Contacts",
    icon:  <MailOutline sx={styling}></MailOutline>,
    path: "contact"
  },
  {
    label: "Bookmarks",
    icon:  <BookmarkBorderOutlined sx={styling}></BookmarkBorderOutlined>,
    path: "bookmark"
  },
  {
    label: "Info",
    icon:  <InfoOutlined sx={styling}></InfoOutlined>,
    path: "info"
  }
];

export const socials = [
  {
    label: "Linkedin",
    icon: <Avatar sx={{bgcolor:blue[700]}}><LinkedIn sx={{bgcolor: blue[700]}}></LinkedIn></Avatar>,
    name: "Daniel T.",
    link: "https://www.linkedin.com/in/daniel-t-8695a2105/"
  },
  {
    label: "GitHub",
    icon: <Avatar sx={{bgcolor: deepPurple[700]}}><GitHub sx={{bgcolor: deepPurple[700]}}></GitHub></Avatar>,
    name: "Daniel-Canada",
    link: "https://github.com/Daniel-Canada"
  }
 
]