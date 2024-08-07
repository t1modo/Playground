import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
    InnerSearchContainer,
    SearchContainer,
    SearchTextInput,
    FilterButton,
    FilterButtonText,
    TextLink,
    RecipeButton,
    RecipeButtonText,
    RecipesContainer,
} from "../components/styles";

import Feather from 'react-native-vector-icons/Feather';

const Cookbook = ({navigation}) => {
    const [query, setQuery] = useState('');

    const handleChange = (text) => {
        setQuery(text);
    };

    const handleSearch = () => {
        // Perform search action with query
        console.log('Searching for:', query);
    };

    return (
        <SearchContainer>
            <InnerSearchContainer>
                <Feather
                    name="search"
                    size={20}
                    color="black"
                    style={{ marginLeft: 8, marginRight: 8 }}
                />
                <SearchTextInput
                    placeholder="Type to search . . ."
                    value={query}
                    onChangeText={handleChange}
                    onSubmitEditing={handleSearch}
                />
                {query.length > 0 && (
                    <TouchableOpacity onPress={() => setQuery('')}>
                        <Feather name="x" size={30} color="black" />
                    </TouchableOpacity>
                )}
            </InnerSearchContainer>

            <RecipesContainer>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <RecipeButton><TextLink onPress={() => navigation.navigate("Recipe1")}>
                        <RecipeButtonText>Recipe 1</RecipeButtonText>
                    </TextLink></RecipeButton>

                    <RecipeButton><TextLink>
                        <RecipeButtonText>Recipe 2</RecipeButtonText>
                    </TextLink></RecipeButton>

                    <RecipeButton><TextLink>
                        <RecipeButtonText>Recipe 3</RecipeButtonText>
                    </TextLink></RecipeButton>
                </ScrollView>
            </RecipesContainer>

        </SearchContainer>
    );
}

export default Cookbook;
