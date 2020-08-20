import { UserDetails } from './../user.details.entity';
import { IsNotEmpty } from "class-validator";
import { RoleType } from "src/modules/role/roletype.enum";

export class UserDto {
    @IsNotEmpty()
    id:number;

    @IsNotEmpty()
    Username:string

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    roles:RoleType[];

    @IsNotEmpty()
    details: UserDetails

}