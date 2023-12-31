import SortBy from "../SortBy";
import Filter from "../Filter";
import styled from "styled-components";

const TableOperations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.6rem;
`;

const Heading = styled.h3`
    color: #191e3b;
    font-size: 2rem;
    font-weight: 500;
    /* text-align: center; */

    line-height: 24px;
`;

function CabinTableOperations() {
    return (
        <TableOperations>
            <Heading>Filter By</Heading>
            <Filter
                filterField="discount"
                options={[
                    { value: "all", label: "All" },
                    { value: "no-discount", label: "No discount" },
                    { value: "with-discount", label: "With discount" },
                ]}
            />

            <Heading>Sort By</Heading>
            <SortBy
                options={[
                    { value: "name-asc", label: "Sort by name (A-Z)" },
                    { value: "name-desc", label: "Sort by name (Z-A)" },
                    {
                        value: "regularPrice-asc",
                        label: "Sort by price (low first)",
                    },
                    {
                        value: "regularPrice-desc",
                        label: "Sort by price (high first)",
                    },
                    {
                        value: "maxCapacity-asc",
                        label: "Sort by capacity (low first)",
                    },
                    {
                        value: "maxCapacity-desc",
                        label: "Sort by capacity (high first)",
                    },
                ]}
            />
        </TableOperations>
    );
}

export default CabinTableOperations;
