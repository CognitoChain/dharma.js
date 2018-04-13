import { DebtTokenScenario } from "./scenarios";
import { Orders } from "./orders";
import { DebtTokenAPIErrors } from "src/apis/debt_token_api";

const defaults = {
    orderFilledByCreditorOne: Orders.CREDITOR_ONE_ORDER,
    orderFilledByCreditorTwo: Orders.CREDITOR_TWO_ORDER,
    tokenID: (creditorOneTokenID, creditorTwoTokenID, nonexistentTokenID, malFormedTokenID) =>
        creditorOneTokenID,
    approvee: Orders.APPROVEE,
};

const successfulDefaults = {
    ...defaults,
    shouldSucceed: true,
};

const unsuccessfulDefaults = {
    ...defaults,
    shouldSucceed: false,
    isApproved: false,
};

export namespace GetApprovedScenarios {
    export const SUCCESSFUL: DebtTokenScenario.GetApprovedScenario[] = [
        {
            description: "debt token specifies an approved account",
            ...successfulDefaults,
            isApproved: true,
        },
        {
            description: "debt token does not specify an approved account",
            ...successfulDefaults,
            isApproved: false,
        },
    ];
    export const UNSUCCESSFUL: DebtTokenScenario.GetApprovedScenario[] = [
        {
            description: "debt token does not exist",
            ...unsuccessfulDefaults,
            tokenID: (
                creditorOneTokenID,
                creditorTwoTokenID,
                nonexistentTokenID,
                malFormedTokenID,
            ) => nonexistentTokenID,
            errorType: "TOKEN_WITH_ID_DOES_NOT_EXIST",
            errorMessage: DebtTokenAPIErrors.TOKEN_WITH_ID_DOES_NOT_EXIST(),
        },
        {
            description: "debt token id is malformed",
            ...unsuccessfulDefaults,
            tokenID: (
                creditorOneTokenID,
                creditorTwoTokenID,
                nonexistentTokenID,
                malFormedTokenID,
            ) => malFormedTokenID,
            errorType: "DOES_NOT_CONFORM_TO_SCHEMA",
            errorMessage: /instance does not conform to the "wholeBigNumber" format/,
        },
    ];
}
