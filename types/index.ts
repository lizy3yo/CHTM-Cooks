export type UserRole = 'superadmin' | 'advisor' | 'consultant' | 'student';

// This interface represents the structure of a user document in the database, including all relevant fields such as email, password, role, and timestamps for creation and updates
export interface IUser {
    _id: string;
    firstName: string;
    lastName: string;
    email: string
    password: string;
    role: UserRole;
    profilePictureUrl?: string;
    createdAt: Date;
    updatedAt: Date;

    // Additional fields for students
    year_level: number;
    block: string;
    agreement: boolean;

}

// This interface represents the structure of a refresh token document in the database, which is used for managing user sessions and token revocation
export interface IRefreshToken {
    _id: string;
    userId: string;
    token: string;
    expiresAt: Date;
    createdAt: Date;
    isRevoked: boolean;
}

// This interface represents the payload of the JWT token, which includes user information that can be used for authentication and authorization
export interface JWTPayload {
    userId: string;
    email: string;
    role: UserRole; 
    type?: 'access' | 'refresh'; // Optional field to differentiate between access and refresh tokens
}

// This interface represents the structure of the response sent to the client after successful authentication, including user information and JWT tokens
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
    accessTokenExpiresIn: string;
    refreshTokenExpiresIn: string;
}

// This interface is used for sending user data in responses, excluding sensitive information like password
export interface UserResponse {
    id:string;
    email: string;
    firstName: string;
    lastName: string;
    role: UserRole;
}