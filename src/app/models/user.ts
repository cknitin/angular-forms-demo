export class User {
    name: string;
    email: string;
    password: string;
    retypepassword: string;
    gender: string;
    age: number;

    constructor(name: string, email: string, password: string,  retypepassword: string, gender: string, age: number) {
        this.email = email;
        this.name = name;
        this.password = password;
        this.retypepassword = retypepassword;
        this.gender = gender;
        this.age = age;
    }
}
