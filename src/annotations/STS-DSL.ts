/**
 * Types for the Authorizer Functions
 *  TOKEN:
 *      The authorizer checks the validity of a given JWT token
 *
 *  REQUEST:
 *      The authorizer contains custom logic that depends in the request parameters
 *
 *  COGNITO_USER_POOLS:
 *      The authorizer function will use a COGNITO_USER_POOL, requires to provide the ARN of the pool
 */
export enum AuthorizerFunctionType {
    TOKEN = ("TOKEN"),
    REQUEST = ("REQUEST"),
    COGNITO_USER_POOLS = ("COGNITO_USER_POOLS")
}
/**
 * Listener for Event Bridge
 * @param params
 * @constructor
 */
// @ts-ignore
export function EventBridgeListener(params: { eventBusArn: string, detailType: string }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

/**
 * Different methods for the HTTP lambda function
 */
export enum HttpFunctionMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}

/**
 * HTTP Function
 *
 * @param params
 * @constructor
 */
// @ts-ignore
export function HttpFunction(params: { path: string, method: HttpFunctionMethod, authorizer?: string }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

/**
 * HTTP Api Function
 *
 * @param params
 * @constructor
 */
// @ts-ignore
export function HttpApiFunction(params: { path: string, method: HttpFunctionMethod, authorizer?: string }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

export enum CognitoPoolTrigger {
    CreateAuthChallenge = ("CreateAuthChallenge"),
    CustomMessage = ("CustomMessage"),
    DefineAuthChallenge = ("DefineAuthChallenge"),
    PostAuthentication = ("PostAuthentication"),
    PostConfirmation = ("PostConfirmation"),
    PreAuthentication = ("PreAuthentication"),
    PreSignUp = ("PreSignUp"),
    PreTokenGeneration = ("PreTokenGeneration"),
    UserMigration = ("UserMigration"),
    VerifyAuthChallengeResponse = ("VerifyAuthChallengeResponse"),
}

/**
 * Congnito Lambda trigger function
 * @param params
 * @constructor
 */
// @ts-ignore
export function CognitoUserPoolTriggered(params: { pool: string, trigger: CognitoPoolTrigger }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}


export enum WebSocketRoutes {
    CONNECT = ("$connect"),
    DISCONNECT = ("$disconnect"),
    DEFAULT = ("$default")
}

// @ts-ignore
export function WebSocketConnector(param: { route: any }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

/**
 * Annotation that indicate that certain function is a Lambda handler function.
 *
 * It is not mandatory but it is good to have so we can locate all the Lambda handler function at glance
 * @constructor
 */
// @ts-ignore
export function LambdaFunction() {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

/**
 * Annotation for a Authorizer function, will contain details about the Authorizer nature
 *
 * @param param
 *            * identitySources
 *            * name
 *            * type
 *            * ttl
 * @constructor
 */
// @ts-ignore
export function AuthorizerFunction(param: { identitySources: string[]; name: string; type: AuthorizerFunctionType, ttl: number }) {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}

/**
 * Annotation that indicates that certain Handler is only used in Offline mode
 * @constructor
 */
export function OfflineOnly() {
    // @ts-ignore
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
    };
}


/**
 * Annotation to indicate that certain Class is holding one or more handlers
 * @constructor
 */
export function HandlersHolder() {
    // @ts-ignore
    return (target: Function) => {
    };
}
