export class User{
    id?:number;
    name?:string;
    email?:string;
    password?:string;
    idRole?: number;
    msnv?:string;
    phone?:string;

    constructor(id?:number, name?:string, email?:string, password?:string, idRole?: number, msnv?:string, phone?:string){
        if(id !== undefined) this.id = id;
        if(name !== undefined) this.name = name;
        if(email !== undefined) this.email = email;
        if(password !== undefined) this.password = password;
        if(idRole !== undefined) this.idRole = idRole;
        if(msnv !== undefined) this.msnv = msnv;
        if(phone !== undefined) this.phone = phone;
    }
}