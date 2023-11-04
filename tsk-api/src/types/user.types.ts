export interface IUser {
    id: String;
    name?: String;
    givenName?: String;
    familyName?: String;
    gender?: String;
    picture?: String;
    email: String;
    emailVerified: Boolean;
    city: String;
    state: String;
    country: String;
    locale: String;
    timezone: String;
    createdAt: Date;
    updatedAt: Date;
}
