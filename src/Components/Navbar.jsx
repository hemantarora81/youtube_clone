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
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        borderBottom: "1px solid #aba7a6",
        marginBottom: "5px",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <span
          className="youtube-write"
          style={{
            fontWeight: "700",
            marginLeft: "2px",
            fontSize: "32px",
            color: "#fff",
            fontStyle: "normal",
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
