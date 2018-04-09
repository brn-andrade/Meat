export class User {
    constructor(public email: string, public name: string, private password: string) { }

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password
    }
}


export const users: {[key: string]: User} = {
    'bruno@gmail.com': new User('bruno@gmail.com', 'Bruno', 'bruno123'),
    'teste@gmail.com': new User('teste@gmail.com', 'Teste', 'teste123')
}
