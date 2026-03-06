interface Data<T> {
    success: boolean,
    message: string,
    item: T
}

interface DataList<T> {
    success: boolean,
    message: string,
    items: T[]
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

interface PostCategory {
    public_id: string,
    name: string,
    slug: string,
    parent_public_id: string
}

interface PostTag {
    public_id: string,
    name: string,
    slug: string
}

interface Post {
    public_id: string,
    title: string,
    body: string,
    slug: string,
    excerpt: string,
    categories: PostCategory[]
    tags: PostTag[]
    user_public_id: string
}

interface Session {
    user?: User,
    authenticated: boolean
}