export interface RegisterAccount {
    email: string;
    last_name: string;
    first_name: string;
    password: string;
}

export interface LoginAccount {
    email: string;
    password: string;
}

export interface FullRegisterAccount extends RegisterAccount {
    repassword: string | undefined;
    term?: boolean;
}

export interface TokenData {
    token: string;
    refreshToken: string;
}