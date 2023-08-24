import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
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
    </Stack>
  );
};
export default Navbar;
