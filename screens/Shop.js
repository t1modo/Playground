import React, {useState} from "react";
import Checkbox from "expo-checkbox";

import {
    InnerShopContainer,
    ShopContainer,
    ShopButton,
    StoresText,
    TextLink,
    ChecklistContainer,
    ChecklistText,
    CheckboxStyles,
    CheckboxText,
    CheckboxContainer,
    Line
} from "../components/styles";

const Shop = ({navigation}) => {

    const [isChecked, setChecked] = useState(false);
    const [isChecked2, setChecked2] = useState(false);
    const [isChecked3, setChecked3] = useState(false);
    const [isChecked4, setChecked4] = useState(false);

    return (
        <ShopContainer>
            <InnerShopContainer>
                <ShopButton><TextLink onPress={() => navigation.navigate("FetchLocation")}>
                    <StoresText>Stores</StoresText>
                </TextLink></ShopButton>

                <ChecklistContainer>
                    <ChecklistText>Ingredients Checklist</ChecklistText>
                    <Line></Line>

                    <CheckboxContainer>
                        <CheckboxStyles><Checkbox value={isChecked} onValueChange={setChecked} /></CheckboxStyles>
                        <CheckboxText>Item 1</CheckboxText>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxStyles><Checkbox value={isChecked2} onValueChange={setChecked2} /></CheckboxStyles>
                        <CheckboxText>Item 2</CheckboxText>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxStyles><Checkbox value={isChecked3} onValueChange={setChecked3} /></CheckboxStyles>
                        <CheckboxText>Item 3</CheckboxText>
                    </CheckboxContainer>

                    <CheckboxContainer>
                        <CheckboxStyles><Checkbox value={isChecked4} onValueChange={setChecked4} /></CheckboxStyles>
                        <CheckboxText>Item 4</CheckboxText>
                    </CheckboxContainer>
                </ChecklistContainer>

            </InnerShopContainer>
        </ShopContainer>
    )
}

export default Shop;