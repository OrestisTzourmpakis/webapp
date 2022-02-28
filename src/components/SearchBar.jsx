import {
  Box,
  Grid,
  Input,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((them) => ({
  paperWrapper: {
    padding: "10px",
    borderRadius: "25px",
    backgroundColor: "transparent",
  },
  searchInput: {
    width: "100%",
    border: "none",
    backgroundColor: "transparent",
    color: "#767676",
    fontSize: "25px",
    "&:focus": {
      outline: "none",
    },
  },
}));

function SearchBar({ value, setValue }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paperWrapper} elevation={3}>
      <Box display="flex" alignItems="center">
        <Search style={{ color: "#767676" }} fontSize="medium" />
        <input
          placeholder="Search..."
          className={classes.searchInput}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      </Box>
    </Paper>
  );
}

export default SearchBar;
