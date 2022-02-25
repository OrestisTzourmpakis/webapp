import { Box, Divider, Grid, List } from "@material-ui/core";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Pagination from "@material-ui/lab/Pagination";

function ListWithPagination({ data, listItem }) {
  const itemPerPage = 3;
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => setPage(value);

  return (
    <>
      <Grid item container direction="column">
        <SearchBar />
        <List>
          {data
            .slice((page - 1) * itemPerPage, page * itemPerPage)
            .map((elem) => (
              <>{listItem(elem)}</>
            ))}
        </List>
        <Divider />
        <Box display="flex" justifyContent="center">
          <Pagination
            count={Math.ceil(data.length / itemPerPage)}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </Box>
      </Grid>
    </>
  );
}

export default ListWithPagination;
