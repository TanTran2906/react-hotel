import styled from "styled-components";
import SidebarTools from "../../ui/client/SidebarTools";
import CabinList from "../../ui/client/CabinList";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const StyledContainer = styled.div`
    width: 1170px;
    max-width: calc(100% - 200px);
    margin: 0 auto;
    display: flex;
    gap: 30px;
`;

function CabinsToDisplay() {
    //Lift state
    const [search, setSearch] = useState("");
    async function fetchCabinSearchByName(name) {
        if (search.length === 0) {
            const response = await fetch(`/api/cabins`);
            const data = await response.json();
            return data;
        } else {
            const response = await fetch(`/api/cabins/search/${name}`);
            const data = await response.json();
            return data;
        }
    }

    const { data } = useQuery({
        queryKey: ["Cabins", search],
        queryFn: () => fetchCabinSearchByName(search),
    });

    return (
        <>
            <StyledContainer>
                <SidebarTools search={search} setSearch={setSearch} />
                <CabinList dataForSearch={data} />
            </StyledContainer>
        </>
    );
}

export default CabinsToDisplay;
