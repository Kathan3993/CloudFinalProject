import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData ={
    UserPoolId: "us-east-2_ugGeUorem",
    ClientId: "4oj9o6i02gkkoo2qjoukr549kh"
}
export default new CognitoUserPool(poolData);