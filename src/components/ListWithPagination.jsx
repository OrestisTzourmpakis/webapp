import { Box, Divider, Grid, List, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Pagination from "@material-ui/lab/Pagination";
import _ from "lodash";

function ListWithPagination({ data, listItem, searchKeys }) {
  const itemPerPage = 3;
  const [page, setPage] = useState(1);
  console.log(data);
  const [filtered, setFiltered] = useState(data);
  const [search, setSearch] = useState("");
  const handleChange = (event, value) => setPage(value);

  useEffect(() => {
    console.log("changes");
    const newFilter = data.filter((record) => {
      //console.log(record);
      let satisfied = false;
      searchKeys.forEach((item) => {
        var showKey = _.get(record, item);
        console.log(showKey);
        var result = String(_.get(record, item))
          .toLowerCase()
          .includes(search.toLowerCase());
        //console.log("To result", result);
        if (result) {
          satisfied = true;
          return true;
        }
      });
      if (satisfied) return true;
      return false;
    });
    setFiltered(newFilter);
  }, [search]);

  useEffect(() => {
    setFiltered(data);
  }, [data]);

  return (
    <>
      <Grid item container direction="column">
        <SearchBar value={search} setValue={setSearch} />
        {filtered?.length !== 0 ? (
          <>
            <List>
              {filtered
                .slice((page - 1) * itemPerPage, page * itemPerPage)
                .map((elem) => (
                  <>{listItem(elem)}</>
                ))}
            </List>
            <Divider />
            <Box display="flex" justifyContent="center">
              <Pagination
                count={Math.ceil(filtered.length / itemPerPage)}
                page={page}
                onChange={handleChange}
                defaultPage={1}
                color="primary"
                size="large"
                showFirstButton
                showLastButton
              />
            </Box>
          </>
        ) : (
          <Typography
            style={{ marginTop: "20px" }}
            align="center"
            variant="body1"
          >
            <b>No Results</b>
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default ListWithPagination;
