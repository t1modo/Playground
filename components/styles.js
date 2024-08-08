import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    black: "#000000"
};

const {primary, secondary, tertiary, darkLight, brand, green, red} = Colors;

//Login Styles
export const LoginContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: 20px;
    background-color: ${primary};
`;

export const RegisterContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 40}px;
    background-color: ${primary};
`;

export const InnerLoginContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const PageLogo = styled.Image`
    width: 180px;
    height: 180px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${green};
    padding: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: deepskyblue;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;

    ${(props) => props.google == true && `
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;

    ${(props) => props.google == true && `
        left: 8px;
    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;

//KeyBoardAvoidingView Styles
export const KeyboardContainer = styled.View`
    flex: 1;
`;

//Loading Screen Styles

export const LoadingContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;

export const InnerLoadingContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding: 100px;
`;

export const LoadingLogo = styled.Image`
    justify-content: center;
    width: 350px;
    height: 350px;
`;

export const TempNextButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: deepskyblue;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
`;

export const LoadingButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;
`;

//Search Styles
export const SearchContainer = styled.View`
    margin-vertical: 15px;
    width: 90%;
    margin-left: 25px;
    align-items: center;
`;

export const InnerSearchContainer = styled.View`
    padding: 10px;
    flex-direction: row;
    width: 95%;
    background-color: #D9DBDA;
    border-radius: 10px;
    align-items: center;
    border: 1px solid #ccc;
`;

export const SearchTextInput = styled.TextInput`
    flex: 1;
    font-size: 15px;
    padding: 8px;
`;

export const FilterButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: grey;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 5px;
    height: 40px;
`;

export const FilterButtonText = styled.Text`
    color: ${primary};
    font-size: 20px;
`;

export const RecipesContainer = styled.View`
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

//Search Page Recipe Box Styles
export const RecipeButton = styled.TouchableOpacity`
    padding: 10px;
    background-color: seagreen;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-vertical: 15px;
    width: 70%;
    height: 10%;
    align-self: center;
`;

export const RecipeButtonText = styled.Text`
    color: ${primary};
    font-size: 30px;
`;

//Recipe1 Styles
export const RecipeContainer = styled.View`
    flex: 1;
    padding-top: 20px;
    background-color: ${primary};
    justify-content: flex-start;
`;

export const InnerRecipeContainer = styled.View`
    flex: 1;
    padding: 20px;
    width: 100%;
    height: 90%;
    flex-direction: row;
    justify-content: space-between;
`;

export const RecipeBox = styled.View`
    flex: 1; 
    height: 100%;
    margin: 7px;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 20px;
`;

export const InnerRecipeContainer2 = styled.View`
    flex: 1.2;
    align-items: center;
    justify-content: space-between;
`;

export const InnerRecipeContainer3 = styled.View`
    flex: 0.2;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const InstructionsBox = styled.View`
    width: 90%;
    height: 100%;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 20px;
`;

export const RecipeText = styled.Text`
    text-align: center;
    font-weight: bold;
`;

export const RecipeSpecificButton = styled.TouchableOpacity`
    padding: 20px;
    background-color: cornflowerblue;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-vertical: 5px;
    height: 60px;
`;

export const RecipeSpecificText = styled.Text`
    color: ${primary};
    font-size: 20px;
`;

//Planner Styles
export const PlannerContainer = styled.View`
    flex: 1;
    padding: 10px;
    padding-top: 20px;
    background-color: ${primary};
`;

export const InnerPlannerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const PlannerBox = styled.TouchableOpacity`
    width: 90%;
    height: 12%;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 20px;
`;

export const PlannerText = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;

//Shop Styles
export const ShopContainer = styled.View`
    flex: 1;
    padding: 10px;
    padding-top: 20px;
    background-color: ${primary};
`;

export const InnerShopContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;

export const ShopButton = styled.TouchableOpacity`
    width: 70%;
    height: 10%;
    background-color: seagreen;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 20px;
`;

export const StoresText = styled.Text`
    font-size: 40px;
    text-align: center;
`;

export const ChecklistContainer = styled.View`
    width: 90%;
    height: 85%;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 30px;
    margin-bottom: 10px;
`;

export const CheckboxContainer = styled.View`
    flex-direction: row;
`;

export const ChecklistText = styled.Text`
    color: black;
    font-size: 20px;
    text-align: center;
    margin-bottom: 15px;
    font-weight: bold;
`;

export const CheckboxStyles = styled.TouchableOpacity`
    color: black;
    padding: 10px;
`;

export const CheckboxText = styled.Text`
    color: black;
    font-size: 15px;
    padding: 10px;
`;

//Stores Styles
export const StoresContainer = styled.View`
    flex: 1;
    padding: 10px;
    padding-top: 20px;
    background-color: ${primary};
`;

export const InnerStoresContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const StoresBox = styled.TouchableOpacity`
    width: 80%;
    height: 12%;
    background-color: powderblue;
    padding: 25px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    elevation: 3;
    border-radius: 20px;
`;

//Profile Styles
export const ProfileContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 20}px;
    background-color: ${primary};
`;

export const InnerProfileContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: start;
`;

export const ProfileTitle = styled.Text`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: black;
    padding: 40px;
`;

export const ProfileBox = styled.View`
    width: 65%;
    height: 10%;
    background-color: white;
    padding: 15px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 40px;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const ProfileText = styled.Text`
    weight: bold;
    text-align: center;
    font-size: 20px;
    padding: 5px;
`;

export const ProfileInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const FriendButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: #ADB5BD;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    margin-vertical: 15px;
    width: 80%;
    height: 60px;
`;

export const ProfilePicture = styled.TouchableOpacity`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: cornflowerblue;
    margin-bottom: 20px;
`;

//Friend's List Styles
export const FriendsListSearchContainer = styled.View`
    flex: 1;
    padding-top: 30px;
    margin: 25px;
    width: 90%;
    align-items: center;
`;

export const FriendsListInnerSearchContainer = styled.View`
    padding: 10px;
    flex-direction: row;
    width: 100%;
    background-color: #D9DBDA;
    border-radius: 10px;
    align-items: center;
    border: 1px solid #ccc;
`;

export const BoxContainer = styled.View`
    flex-grow: 1;
    width: 100%;
    align-items: center;
    flex-direction: column;
`;

export const FriendsListBox = styled.TouchableOpacity`
    width: 90%;
    height: 80px;
    background-color: white;
    margin-top: 15px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 35px;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 10px;
`;

export const ProfilePic = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: cornflowerblue;
`;

export const UserText = styled.Text`
    font-size: 25px;
    padding: 25px;
`;

//Fetch Location Styles

export const LocationContainer = styled.View`
    width: 100%;
    align-items: center;
`

export const InnerLocationContainer = styled.View`
    padding: 10px;
    flex-direction: row;
    background-color: #D9DBDA;
    border-radius: 10px;
    align-items: center;
    border: 1px solid #ccc;
`