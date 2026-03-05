interface Data<T> {
    success: boolean,
    message: string,
    item: T
}
interface UserEmail {
    public_id: string,
    email: string
}
interface User {
    public_id: string,
    first_name: string,
    middle_name: string,
    last_name: string,
    emails: UserEmail[],
}

interface Session {
    user?: User,
    authenticated: boolean
}