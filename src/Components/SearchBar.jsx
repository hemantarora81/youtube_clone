import React, { useState } from "react";
import {
  Paper,
  IconButton,
  InputBase,
  Button,
  Dialog,
  DialogContent,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");
  const [showSearchDialog, setShowSearchDialog] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setsearchTerm("");
      // console.log("Search term:", searchTerm);
    }
    setShowSearchDialog(false);
  };

  return (
    <div>
      {isSmallScreen ? (
        <IconButton
          // id="nljnljfn"
          onClick={() => setShowSearchDialog(true)}
          aria-label="search"
          style={{ color: "red" }}
        >
          <Search className="search-icon" color="red" />
        </IconButton>
      ) : (
        <Paper
          component="form"
          onSubmit={handleSubmit}
          sx={{
            borderRadius: 20,
            border: "1px solid #000",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pl: 2,
            boxShadow: "none",
            width: "auto",
            maxWidth: 400,
          }}
        >
          <InputBase
            sx={{
              ml: 1,
              flex: 1,
              backgroundColor: "white",
              borderRadius: 10,
            }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
            className="search-bar"
            onChange={(e) => setsearchTerm(e.target.value)}
            value={searchTerm}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "red" }}
            aria-label="search"
          >
            <Search className="search-icon" />
          </IconButton>
        </Paper>
      )}

      <Dialog
        open={showSearchDialog}
        onClose={() => setShowSearchDialog(false)}
      >
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <InputBase
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />
            <Button type="submit" variant="contained" color="primary">
              Search
            </Button>
            <Button
              variant="outlined"
              // color="secondary"
              onClick={() => setShowSearchDialog(false)}
            >
              Cancel
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchBar;
