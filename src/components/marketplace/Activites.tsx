import React, { useState } from 'react';
import { listedd } from "@/data/marketplace";
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { styled } from "@mui/system"; // Add this line to import the 'styled' function

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

function Activites() {
    const itemsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = listedd.slice(startIndex, endIndex);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <table className="w-full border-collapse">
                <thead className="">
                    <tr>
                        <th className="p-2 text-left font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Tick</th>
                        <th className="p-2 text-left font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Total Value</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Price</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Amount</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Seller</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Buyer</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Hash</th>
                        <th className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">Time</th>
                    </tr>
                </thead>

                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : ''}>
                            <td className="p-2 text-left font-medium text-1xl leading-6 table-cell align-middle p-4 text-amber-500" >{item.Tick}</td>
                            <td className="p-2 text-left font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Total_Value}</td>
                            <td className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Price}<br /><span className="mt-5 font-normal text-sm text-gray-400 text-center">{item.span}</span></td>
                            <td className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Amounts}</td>
                            <td className="p-2 text-left font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Seller}</td>
                            <td className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Buyer}</td>
                            <td className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Hash}</td>
                            <td className="p-2 text-center font-medium text-1xl leading-6 table-cell align-middle p-4 text-white">{item.Time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="py-[40px] flex justify-center">
                <Stack spacing={2}>
                    <MarketPlacePagination
                        count={Math.ceil(listedd.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </div>
        </div>
    );
}

export default Activites;
