"use client";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab"; 
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import {
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";
import ListedTabs from "@/components/marketplace/ListedTab";
import { listed } from "@/data/marketplace";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      key={index}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const MyTab = styled(Tab)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "none",
  fontSize: "0.8125rem",
  padding: "7px 16px",
  minHeight: "40px",
  "&:hover": {
    backgroundColor: "#252525",
  },
  "&.Mui-selected": {
    backgroundColor: "#4B4B4B",
    color: "#fff",
  },
  "&.MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
});
const MyTabs = styled(Tabs)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "1px solid #4B4B4B",
  height: "40px",
  minHeight: "40px",
  borderRadius: "5px",
  marginLeft: "10px",
  width: "fit-content",
  ".MuiTabs-indicator": {
    backgroundColor: "transparent",
    height: "0",
  },
});

const MarketPlaceSelect = styled(Select)({
  backgroundColor: "#121212",
  color: "#fff",
  border: "1px solid #4B4B4B",
  fontSize: "1rem",
  padding: "2px 16px",
  width: "fit-content",
  height: "40px",
  "&:hover": {
    borderColor: "#fff",
  },

  ".MuiInputBase-input": {
    padding: "7px 16px !important",
  },
  ".MuiSvgIcon-root": {
    fill: "#fff",
  },
  ".MuiMenu-paper": {
    backgroundColor: "#4B4B4B",
  },
});
const MarketPlaceSortSelect = styled(FormControl)({
  backgroundColor: "#121212",
  color: "#fff",

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fff",
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: "#4B4B4B",
  },
  ".MuiInputBase-input": {
    color: "#fff",
  },
  ".MuiInputLabel-formControl": {
    color: "#fff",
  },
  ".MuiSvgIcon-root": {
    fill: "#fff",
  },
  ".MuiFormControl-root": {
    minWidth: "90px",
  },
});

const MarketPlacePagination = styled(Pagination)({
  backgroundColor: "#121212",
  color: "#fff",

  button: {
    fontWeight: "400",
    fontSize: "0.875rem",
    lineHeight: "1.43",
    borderRadius: "4px",
    textAlign: "center",
    boxSizing: "border-box",
    minWidth: "32px",
    height: "32px",
    padding: "0px 6px",
    margin: "0px 3px",
    color: "rgb(255, 255, 255)",
    border: "1px solid rgba(255, 255, 255, 0.23)",
  },

  ".Mui-selected": {
    backgroundColor: "#4B4B4B",
  },
});

const Marketplace = () => {
  const [value, setValue] = React.useState(0);
  const [sort, setSort] = React.useState("price");
  const itemsPerPage = 20;
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const [coin, setCoin] = React.useState("nano");

  const handleInputChange = (event: SelectChangeEvent) => {
    setCoin(event.target.value);
  };

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    console.log(value);

    setCurrentPage(value);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageItems = listed.slice(startIndex, endIndex);

  const matches900px = useMediaQuery("(min-width:900px)");

  return (
    <div className="flex flex-col items-center justify-center py-[40px] container mx-auto">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <div className="mt-8 flex md:flex-row flex-wrap items-center px-2">
            <div className="mr-[16px] ">
              <MarketPlaceSelect
                value={coin}
                onChange={handleInputChange}
                displayEmpty
                className=""
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="nano">nano</MenuItem>
                <MenuItem value="bolt20">bolt20</MenuItem>
                <MenuItem value="ton">ton</MenuItem>
                <MenuItem value="dedust.io">dedust.io</MenuItem>
                <MenuItem value="gram">gram</MenuItem>
                <MenuItem value="fish">fish</MenuItem>
                <MenuItem value="notcoin">notcoin</MenuItem>
              </MarketPlaceSelect>
            </div>

            <MyTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="order-3 md:order-[unset] w-full m-0   md:w-auto"
            >
              <MyTab label="Listed" {...a11yProps(0)} />
              <MyTab label="My Orders" {...a11yProps(1)} />
              <MyTab label="Activites" {...a11yProps(2)} />
            </MyTabs>
            <div className="flex-1"> </div>

            <MarketPlaceSortSelect sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="sort-label">Sort</InputLabel>
              <Select
                labelId="sort-label"
                id="sort-small"
                value={sort}
                label="Sort"
                onChange={(e: any) => setSort(e.target.value)}
              >
                <MenuItem value={"total-value"}>Total Value</MenuItem>
                <MenuItem value={"price"}>Price</MenuItem>
              </Select>
            </MarketPlaceSortSelect>

            {matches900px && (
              <button className="bg-[#0098ea]  hover:scale-10 text-[#fff] text-lg font-bold py-2 px-[24px] rounded-full inline-flex items-center">
                Quick List
              </button>
            )}
          </div>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Box>
            <Box className="flex flex-row mt-16 mb-16">
              <div className="bg-none text-white transition-shadow border border-opacity-25 overflow-x-scroll  rounded-lg py-[16px]">
                <div className="flex flex-row items-center">
                  <h5 className="m-0 text-1.5xl leading-1.334 text-yellow-400 font-bold pl-6">
                    {coin}
                  </h5>
                  {/* --- Total Vol ---  */}
                  <div className="ml-8 text-center">
                    <p className="m-0 font-normal text-base leading-1.5 whitespace-nowrap">
                      Total Vol
                    </p>
                    <p className="m-0 font-normal text-xs leading-1.43 whitespace-nowrap">
                      434,059.403 Ton
                    </p>
                    <span className="m-0 font-normal text-xs leading-1.66 text-white opacity-45 whitespace-nowrap">
                      ≈ $941,908.904
                    </span>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="m-0 mx-4 flex-shrink-0 border-t border-r border-b border-opacity-25 border-white"
                  />
                  {/* --- Hour Vol ---  */}
                  <div className="  text-center">
                    <p className="m-0 font-normal text-base leading-1.5 whitespace-nowrap">
                      24H Vol
                    </p>
                    <p className="m-0 font-normal text-xs leading-1.43 whitespace-nowrap">
                      31,431.885 TON
                    </p>
                    <span className="m-0 font-normal text-xs leading-1.66 text-white opacity-45 whitespace-nowrap">
                      ≈ $68,207.19
                    </span>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="m-0 mx-4 flex-shrink-0 border-t border-r border-b border-opacity-25 border-white"
                  />
                  {/* ---Floor Price ---  */}
                  <div className="  text-center">
                    <p className="m-0 font-normal text-base leading-1.5 whitespace-nowrap">
                      Floor Price
                    </p>
                    <p className="m-0 font-normal text-xs leading-1.43 whitespace-nowrap">
                      0.00155 TON
                    </p>
                    <span className="m-0 font-normal text-xs leading-1.66 text-white opacity-45 whitespace-nowrap">
                      ≈ $0.0033635
                    </span>
                  </div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    className="m-0 mx-4 flex-shrink-0 border-t border-r border-b border-opacity-25 border-white"
                  />
                  {/* ---Floor Price ---  */}
                  <div className="text-center pr-[24px]">
                    <p className="m-0 font-normal text-base leading-1.5 whitespace-nowrap">
                      Market Cap
                    </p>
                    <p className="m-0 font-normal text-xs leading-1.43 whitespace-nowrap">
                      3,255,000 TON
                    </p>
                    <span className="m-0 font-normal text-xs leading-1.66 text-white opacity-45 whitespace-nowrap">
                      ≈ $7,063,350
                    </span>
                  </div>
                </div>
              </div>
            </Box>

            <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {currentPageItems.map((item: any, index: number) => (
                <ListedTabs items={item} key={index} coin={coin} />
              ))}
            </div>
            <div className="py-[40px] flex justify-center">
              <MarketPlacePagination
                count={Math.ceil(listed.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                shape="rounded"
              />
            </div>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Box>
    </div>
  );
};
export default Marketplace;
