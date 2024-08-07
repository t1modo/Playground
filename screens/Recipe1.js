import React from "react";

import {
    RecipeContainer,
    InnerRecipeContainer,
    InnerRecipeContainer2,
    RecipeBox,
    InstructionsBox,
    RecipeText,
    RecipeSpecificButton,
    RecipeSpecificText,
    InnerRecipeContainer3
} from "../components/styles";

const Recipe1 = () => {
    return (
        <RecipeContainer>
            <InnerRecipeContainer>
                <RecipeBox>
                    <RecipeText>Checklist</RecipeText>
                </RecipeBox>

                <RecipeBox>
                    <RecipeText>Recipe Image</RecipeText>
                </RecipeBox>
            </InnerRecipeContainer>

            <InnerRecipeContainer2>

                <InstructionsBox>
                    <RecipeText>Instructions</RecipeText>
                </InstructionsBox>

            </InnerRecipeContainer2>

            <InnerRecipeContainer3>
                <RecipeSpecificButton>
                    <RecipeText>Save</RecipeText>
                </RecipeSpecificButton>

                <RecipeSpecificButton>
                    <RecipeText>Share</RecipeText>
                </RecipeSpecificButton>

                <RecipeSpecificButton>
                    <RecipeText>Mark</RecipeText>
                </RecipeSpecificButton>
            </InnerRecipeContainer3>

        </RecipeContainer>
    )
};

export default Recipe1;