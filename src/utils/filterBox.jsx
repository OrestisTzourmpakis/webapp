import { Box, Checkbox, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { getCategories } from "../services/categoriesService";
import _ from "lodash";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";

function FilterBox({
  initialList,
  setFilterList,
  categories,
  setCategories,
  idString,
  mobile,
}) {
  // useEffect(() => {
  //   const Init = async () => {
  //     try {
  //       const { data } = await getCategories();
  //       let categoryWithChecked = data.map((model) => {
  //         return { ...model, checked: false };
  //       });
  //       let allValue = {
  //         id: "all",
  //         name: "All",
  //         checked: true,
  //       };
  //       setCategories([allValue, ...categoryWithChecked]);
  //     } catch (ex) {}
  //   };
  //   Init();
  // }, []);

  useEffect(() => {
    let checkedArray = [];
    categories.map((category) => {
      if (category.checked) checkedArray = [...checkedArray, category.id];
    });
    // an to all einai checked emfanise ta ola!!!
    console.log("Checked array:", checkedArray);
    if (checkedArray.length === 0) {
      // kane check to all!!
      let defaultValue = categories.map((cat) => {
        if (cat.id === "all") {
          cat.checked = true;
        }
        return cat;
      });
      setCategories([...defaultValue]);
    }
    if (checkedArray.includes("all")) {
      console.log("Ta companies!!", initialList);
      setFilterList([...initialList]);
      return;
    }
    let initialCopy = [...initialList];
    let filter = initialCopy.filter((model) =>
      // checkedArray.includes(model.categoryId)
      checkedArray.includes(_.get(model, idString))
    );
    setFilterList(filter);
  }, [categories]);

  const useStyles = makeStyles((theme) => ({
    mobile: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "background.paper",
      boxShadow: 24,
      p: 4,
    },
    default: {
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  const filterStyles = clsx({
    [classes.mobile]: mobile === true,
    [classes.default]: !mobile,
  });
  return (
    <Box className={filterStyles}>
      {/* <div style={{ flex: 1 }}></div> */}
      <div style={{ flex: 2 }}>
        <Paper>
          <Box
            display="flex"
            flexDirection="column"
            style={{
              minWidth: "200px",
              maxWidth: "200px",
              overflow: "scroll",
              minHeight: "400px",
              maxHeight: "400px",
              padding: "20px",
            }}
          >
            <Typography style={{ alignSelf: "center" }}>Categories</Typography>
            {categories?.map((category) => (
              <Box
                key={category.id}
                display="flex"
                style={{ width: "100%" }}
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography variant="subtitle1">{category.name}</Typography>
                <Checkbox
                  color="primary"
                  checked={category.checked}
                  onChange={(e) => {
                    // find the with the id!!!
                    let filterObj = categories.map((cat) => {
                      if (cat.id === category.id) {
                        cat.checked = e.target.checked;
                      }
                      return cat;
                    });
                    setCategories([...filterObj]);
                  }}
                />
              </Box>
            ))}
          </Box>
        </Paper>
      </div>
      {/* <div style={{ flex: 2 }}></div> */}
    </Box>
  );
}

export default FilterBox;
