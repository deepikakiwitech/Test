import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByEmailPass(username: string, pass: string): Promise<any>;
    delete(id: any): Promise<number>;
    update(id: any, data: any): Promise<{
        numberOfAffectedRows: number;
        updatedUser: User;
    }>;
}
