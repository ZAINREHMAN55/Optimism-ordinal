"use client";

import React from "react";
import dayjs from "dayjs";
import numeral from "numeral";
import { Helmet } from "react-helmet";
import { styled } from "@mui/material/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  TablePagination,
  Card,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";

import SearchBox from "@/components/SearchBox";
import Link from "next/link";

const StyledPaper = styled(Paper)({
  marginTop: 32,
  backgroundColor: "#262323",
  borderRadius: "12px",
  color: "#fff",
  width: "100%",
  maxWidth: 1200,
  padding: 24,
});

const StyledCard = styled(Card)({
  padding: "16px",
  paddingBottom: "24px",
  margin: "16px", // Add some spacing around the card
  maxWidth: "100%", // Ensures the card is responsive
  minHeight: "100px", // Set a minimum height for the card content
  backgroundColor: "transparent",
  boxShadow: "none",
  border: 0,
});

const StyledTableContainer = styled(Table)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  border: 0,
}));

const StyledTable = styled(Table)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const StyledHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "transparent",
}));

const StyledRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "transparent",
  transition: "background-color 0.3s ease",


  "&:hover": {
    backgroundColor: "#333",
  },
}));

const StyledCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: "transparent",
  fontSize: 14,
  padding: 16,
  color: "#fff",
  borderBottom: "none",
  transition: "background-color 0.3s ease",

  "&:hover": {
    backgroundColor: "#333",
  },
}));

const StyledLineBar = styled(LinearProgress)(({ theme }) => ({
  backgroundColor: "transparent",
  ".MuiLinearProgress-bar": {
    backgroundColor: "#f6ae2d",
    borderRadius: 2,
  },
}));

const TableHeader = () => (
  <StyledHead>
    <StyledRow>
      <StyledCell scope="col" align="left">
        Tick
      </StyledCell>
      <StyledCell scope="col" align="center">
        Deploy Time
      </StyledCell>
      <StyledCell scope="col" align="center">
        Progress
      </StyledCell>
      <StyledCell scope="col" align="right">
        Holders
      </StyledCell>
      <StyledCell scope="col" align="right"></StyledCell>
    </StyledRow>
  </StyledHead>
);

// ... (previous imports)

const TableRowComponent = ({ row }) => (
  <StyledRow>
    {/* can also use Dyanmic route like this `/ton20/${row.name}` */}
    <StyledCell align="left" scope="col">
      <Link href={`/ton20/nano`} passHref>
        <div>
          <a style={{ color: "#f6ae2d" }}>{row.name}</a>
        </div>
      </Link>
    </StyledCell>
    <StyledCell align="center" scope="col">
      <Link href={`/ton20/nano`} passHref>
        <div>
          <a >{dayjs(row.deployTime).format("YYYY/MM/DD HH:mm:ss")}</a>
        </div>
      </Link>
    </StyledCell>
    <StyledCell align="center" scope="col">
      <span className="mb-6">
        <Link href={`/ton20/nano`} passHref>
          <div>
            <a>  {numeral(row.progress).divide(100).format("0.000%")}</a>
          </div>
        </Link>
      </span>
      <StyledLineBar variant="determinate" value={row.progress} />
    </StyledCell>
    <StyledCell align="right" scope="col">
      <Link href={`/ton20/nano`} passHref>
        <div>
          <a >  {numeral(row.holders).format("0,0")}</a>
        </div>
      </Link>
    </StyledCell>
    <StyledCell
      align="right"
      scope="col"
      style={{
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Link href={`/ton20/nano`} passHref>
        <div>

          <a >   <IoIosArrowForward align="right" size={20} /></a>
        </div>
      </Link>
    </StyledCell>
  </StyledRow>
);

// ... (rest of your code)


const CustomTable = ({ rows }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        {/* Other head elements */}
      </Helmet>

      <div className="capitalize text-[18px] mb-4 text-[#f6ae2d] text-center font-medium line-[12px] tracking-wider">
        The full list of ton-20
      </div>

      <div className="text-[12px] mb-8 text-[#ffffff73] tracking-widest font-normal text-center">
        Indexer progress: {dayjs().format("YYYY/MM/DD HH:mm:ss")}
      </div>

      <StyledTableContainer>
        <StyledTable stickyHeader aria-label="customized table">
          <TableHeader />
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRowComponent key={index + "_row"} row={row} />
              ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{ color: "white" }}
      />
    </>
  );
};

export default function Ton20() {
  const rows = [
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    {
      name: "nano",
      deployTime: "2023/12/01 13:29:26",
      progress: 100,
      holders: 31096,
    },
    // ... (rest of your data)
  ];

  return (
    <SearchBox>
      <StyledPaper>
        <StyledCard>
          <CustomTable rows={rows} />
        </StyledCard>
      </StyledPaper>
    </SearchBox>
  );
}