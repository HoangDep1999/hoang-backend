import { IsEmail, IsPhoneNumber, IsString, Length, Matches } from "class-validator";

export class UserDto{
    @Length(2,50)
    readonly name:string;
    @IsEmail()
    readonly email:string;
    @IsString()
    @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
        message: 'It must be at least 8 characters long, include uppercase letters, lowercase letters, numbers, and special characters.',
      })
    readonly password:string;
    @IsPhoneNumber('VN', {message: 'SĐT phải đủ 10 số . Và các đầu số như 03x, 05x, 07x, 08x, 09x'})
    @Matches(/^(?!02)\d+$/, {
        message: 'Số điện thoại bắt đầu bằng 02 là sđt bàn. Mời bạn nhập sđt di động cá nhân. Và các đầu số như 03x, 05x, 07x, 08x, 09x.',
      })
    readonly phone:string;
}