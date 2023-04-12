import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-2_oSZovcWpJ",
    ClientId: "5hdpafn256heq85rj1b78dqnvo"
}
export default new CognitoUserPool(poolData);