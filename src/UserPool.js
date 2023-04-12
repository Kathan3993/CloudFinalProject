import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-2_dP1UD4IKQ",
    ClientId: "13r3g3tkachn6hr3o141a04pvi"
}
export default new CognitoUserPool(poolData);