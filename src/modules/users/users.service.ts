import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';
//import { JwtService } from '@nestjs/jwt';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_REPOSITORY) private readonly userRepository: typeof User
    ) { }
    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmailPass(username: string, pass: string) {
        const user = await this.userRepository.findOne<User>({
            where: { email: username, password: pass },
        });
        if (!user) {
            return null;
        }
        const { password, ...result } = user['dataValues'];
        return result;
    }

    async delete(id) {
        return await this.userRepository.destroy({ where: { id } });
    }

    async update(id, data) {
        const [numberOfAffectedRows, [updatedUser]] = await this.userRepository.update({ ...data }, { where: { id }, returning: true });

        return { numberOfAffectedRows, updatedUser };
    }

}
