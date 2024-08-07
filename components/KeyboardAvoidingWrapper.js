import React from "react";
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { KeyboardContainer } from "./../components/styles";

const KeyboardAvoidingWrapper = ({ children }) => {
    return (
        <KeyboardContainer>
            <KeyboardAvoidingView>
                <ScrollView>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
                </ScrollView>
            </KeyboardAvoidingView>
        </KeyboardContainer>
    );
}

export default KeyboardAvoidingWrapper;