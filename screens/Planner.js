import React from "react";

import {
    PlannerContainer,
    InnerPlannerContainer,
    PlannerBox,
    PlannerText
} from "../components/styles";

const Planner = () => {
    return (
        <PlannerContainer>
            <InnerPlannerContainer>
                <PlannerBox>
                    <PlannerText>Sunday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Monday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Tuesday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Wednesday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Thursday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Friday</PlannerText>
                </PlannerBox>
                <PlannerBox>
                    <PlannerText>Saturday</PlannerText>
                </PlannerBox>
            </InnerPlannerContainer>
        </PlannerContainer>
    )
}

export default Planner;