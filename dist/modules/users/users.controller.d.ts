import { UsersService } from './users.service';
import { UserDto } from '../users/dto/user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    signUp(user: UserDto): Promise<import("./user.entity").User>;
    login(req: any): Promise<any>;
    update(id: number, user: UserDto, req: any): Promise<import("./user.entity").User>;
    remove(id: number, req: any): Promise<string>;
}
