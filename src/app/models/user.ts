export class User {
    name: string;
    email: string;
    password: string;
    gender: string;
    age: number;

    constructor(name: string, email: string, password: string, gender: string, age: number) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.gender = gender;
        this.age = age;
    }
}
