import { Controller, Body, Post, Delete, Put, Param, NotFoundException, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from '../users/dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Post('signup')
    async signUp(@Body() user: UserDto) {
        return await this.usersService.create(user);
    }

    @Post('login')
    async login(@Request() req) {
        return await this.usersService.findOneByEmailPass(req.body.username, req.body.pass);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() user: UserDto, @Request() req) {
        const { numberOfAffectedRows, updatedUser } = await this.usersService.update(id, user);

        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }

        // return the updated user
        return updatedUser;
    }

    @Delete(':id')
    async remove(@Param('id') id: number, @Request() req) {
        const deleted = await this.usersService.delete(id);
        if (deleted === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }
        // return success message
        return 'Successfully deleted';
    }

}
