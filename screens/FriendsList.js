import React, { useState } from "react";
import { TouchableOpacity, ScrollView } from "react-native";
import {
    FriendsListInnerSearchContainer,
    FriendsListSearchContainer,
    SearchTextInput,
    FriendsListBox,
    BoxContainer,
    UserText,
    ProfilePic
} from "../components/styles";
import Feather from 'react-native-vector-icons/Feather';

const FriendsList = ({ navigation }) => {
    const [query, setQuery] = useState('');

    const handleChange = (text) => {
        setQuery(text);
    };

    const handleSearch = () => {
        // Perform search action with query
        console.log('Searching for:', query);
    };

    return (
        <FriendsListSearchContainer>
            <FriendsListInnerSearchContainer>
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
            </FriendsListInnerSearchContainer>

            <ScrollView contentContainerStyle={{ flexGrow: 1, width: '100%' }}>
                <BoxContainer>
                    <FriendsListBox>
                        <ProfilePic />
                        <UserText>t1modo</UserText>
                    </FriendsListBox>
                    <FriendsListBox>
                        <ProfilePic />
                        <UserText>LeadsM2</UserText>
                    </FriendsListBox>
                    <FriendsListBox>
                        <ProfilePic />
                        <UserText>...</UserText>
                    </FriendsListBox>
                </BoxContainer>
            </ScrollView>
        </FriendsListSearchContainer>
    );
}

export default FriendsList;
