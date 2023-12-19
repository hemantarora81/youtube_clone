import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import AuthModal from "./Authentication/AuthModal";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import AlertDialog from "./Alert";
const Navbar = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
      // console.log(user);
    });
  }, []);
  return (
    <Stack
      direction="row"
      alignItems="center"
      display="flex"
      p={1}
      sx={{
        position: "sticky",
        background: "#F5F5F5",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "1px solid #aba7a6",
        marginBottom: "5px",
      }}
      className="navbar-header"
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={30} />
        <span
          className="youtube-write"
          style={{
            fontWeight: "bold",
            marginLeft: "2px",
            fontSize: "22px",
            color: "#000",
            fontStyle: "normal",
            textDecoration: "underline",
          }}
        >
          Youtube
        </span>
      </Link>
      <SearchBar />
      {user ? <AlertDialog user={user} /> : <AuthModal />}
    </Stack>
  );
};
export default Navbar;
