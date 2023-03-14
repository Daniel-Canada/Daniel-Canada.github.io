import { BookmarkBorderOutlined, CottageOutlined, GitHub, InfoOutlined, LibraryBooksOutlined, LinkedIn, MailOutline } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";

const styling = {color: "#000"}


export const buttons = [
  {
    label: "Home",
    icon:  <CottageOutlined sx={styling}></CottageOutlined>
  },
  {
    label: "Projects",
    icon:  <LibraryBooksOutlined sx={styling}></LibraryBooksOutlined>
  },
  {
    label: "Contacts",
    icon:  <MailOutline sx={styling}></MailOutline>
  },
  {
    label: "Bookmarks",
    icon:  <BookmarkBorderOutlined sx={styling}></BookmarkBorderOutlined>
  },
  {
    label: "Info",
    icon:  <InfoOutlined sx={styling}></InfoOutlined>
  }
];

export const socials = [
  {
    label: "Linkedin",
    icon: <Avatar sx={{bgcolor:blue[700]}}><LinkedIn sx={{bgcolor: blue[700]}}></LinkedIn></Avatar>,
    name: "Daniel T."
  },
  {
    label: "GitHub",
    icon: <Avatar sx={{bgcolor: deepPurple[700]}}><GitHub sx={{bgcolor: deepPurple[700]}}></GitHub></Avatar>,
    name: "Daniel-Canada"
  }
 
]