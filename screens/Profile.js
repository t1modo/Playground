import React from "react";

import {
    ProfileContainer,
    InnerProfileContainer,
    ProfileTitle,
    ProfileBox,
    ProfileText,
    ProfileInputLabel,
    FriendButton,
    ProfilePicture,
    TextLink
} from "../components/styles";

const Profile = ({navigation}) => {
    return (
        <ProfileContainer>
            <ProfileTitle>Your Profile</ProfileTitle>
            <InnerProfileContainer>
                <ProfilePicture></ProfilePicture>
                <ProfileInputLabel>Username</ProfileInputLabel>
                <ProfileBox>
                    <ProfileText>Billysniper123</ProfileText>
                </ProfileBox>
                <FriendButton><TextLink onPress={() => navigation.navigate("EditProfile")}>
                    <ProfileText>Edit Profile</ProfileText>
                </TextLink></FriendButton>
                <FriendButton><TextLink onPress={() => navigation.navigate("FriendsList")}>
                    <ProfileText>Friend's List</ProfileText>
                </TextLink></FriendButton>
                <FriendButton><TextLink onPress={() => navigation.navigate("")}>
                    <ProfileText>Settings</ProfileText>
                </TextLink></FriendButton>
                <FriendButton><TextLink onPress={() => navigation.navigate("Login")}>
                    <ProfileText>Sign Out</ProfileText>
                </TextLink></FriendButton>
            </InnerProfileContainer>
        </ProfileContainer>
    )
}

export default Profile;