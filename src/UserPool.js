import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-2_NHeJ73hA7",
    ClientId: "7nncivve476ghsi5lea9jq55gv"
}
export default new CognitoUserPool(poolData);