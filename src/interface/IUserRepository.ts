import { User } from "src/model/user.model";
import { IRepository } from "./IRepoInterface";


export interface IUserRepository extends IRepository<User>{
    
}