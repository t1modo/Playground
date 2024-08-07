import React from "react";

import { InnerLoadingContainer, LoadingButtonText, LoadingContainer, LoadingLogo, TempNextButton, TextLink } from "../components/styles";

const Loading = ({navigation}) => {
    return (
        <LoadingContainer>
            <InnerLoadingContainer>
                <LoadingLogo resizeMode="cover" source={require('./../assets/mushroom_stew_mc.png')} />
                <TempNextButton><TextLink onPress={() => navigation.navigate("Welcome")}>
                    <LoadingButtonText>Next</LoadingButtonText>
                </TextLink></TempNextButton>
            </InnerLoadingContainer>
        </LoadingContainer>
    )
};

export default Loading;