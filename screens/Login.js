import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";

//Formik
import {Formik} from 'formik';

//Icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import {
    LoginContainer,
    InnerLoginContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledInputLabel,
    StyledTextInput,
    StyledButton,
    ButtonText,
    Colors,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
} from './../components/styles';

import { View } from "react-native";

//Colors
const { brand, darkLight, primary } = Colors;

//Keyboard Avoiding View
import KeyboardAvoidingWrapper from "./../components/KeyboardAvoidingWrapper";

const Login = ({navigation}) => {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <LoginContainer>
            <StatusBar style="dark" />
            <InnerLoginContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/mushroom_stew_mc.png')} />
                <PageTitle>Meal Plan-It</PageTitle>
                <SubTitle>Account Login</SubTitle>

                <Formik
                    initialValues={{ username: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                            <MyTextInput
                                label="Username"
                                icon="person"
                                placeholder="Username"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                                keyboardType="default"
                            />

                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="Password"
                                placeholderTextColor={darkLight}
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MsgBox>...</MsgBox>
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText>Login</ButtonText>
                            </StyledButton>
                            <Line />
                            <StyledButton google={true} onPress={handleSubmit}>
                                    <Fontisto name="google" color={primary} size={25} right={10}/>
                                <ButtonText google={true}>Sign in with Google</ButtonText>
                            </StyledButton>
                            <ExtraView>
                                <ExtraText>Don't have an account? </ExtraText>
                                <TextLink onPress={() => navigation.navigate("Register")}>
                                    <TextLinkContent>Sign Up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>
            </InnerLoginContainer>
        </LoginContainer>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={"grey"} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
                </RightIcon>
            )}
        </View>
    )
}

export default Login;