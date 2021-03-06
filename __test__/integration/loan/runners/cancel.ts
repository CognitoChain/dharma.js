import { LoanRequest } from "../../../../src/loan";

import { DebtOrderParams } from "../../../../src/loan/debt_order";

import { Dharma } from "../../../../src/types/dharma";

export async function testCancel(dharma: Dharma, params: DebtOrderParams) {
    describe("for an open loan request", () => {
        let loanRequest: LoanRequest;

        beforeAll(async () => {
            loanRequest = await LoanRequest.create<LoanRequest>(dharma, params);
        });

        describe("calling cancel before the request has been signed by the debtor", () => {
            test(`throws`, async () => {
                await expect(loanRequest.cancel()).rejects.toThrow();
            });
        });

        describe("calling cancel once the request has been signed by the debtor", () => {
            beforeAll(async () => {
                await loanRequest.signAsDebtor();
            });

            test(`returns a tx hash`, async () => {
                const txHash = await loanRequest.cancel();

                expect(txHash).toBeDefined();
                expect(typeof txHash).toEqual("string");
            });
        });
    });
}
