import React from "react";

import {
    StoresContainer,
    InnerStoresContainer,
    StoresBox,
    StoresText
} from "../components/styles";

const Stores = () => {
    return (
        <StoresContainer>
            <InnerStoresContainer>
                <StoresBox>
                    <StoresText>Costco</StoresText>
                </StoresBox>
                <StoresBox>
                    <StoresText>Walmart</StoresText>
                </StoresBox>
                <StoresBox>
                    <StoresText>Sprouts</StoresText>
                </StoresBox>
            </InnerStoresContainer>
        </StoresContainer>
    )
}

export default Stores;