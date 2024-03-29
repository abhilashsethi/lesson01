import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatedUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      "id": 1,
      "name": "Abhilash",
      "email": "abhilash@gmail.com",
      "role": "ADMIN",
    },
    {
      "id": 2,
      "name": "Prasad",
      "email": "prasad@gmail.com",
      "role": "INTERN",
    },
    {
      "id": 3,
      "name": "Sunil",
      "email": "sunil@gmail.com",
      "role": "INTERN",
    },
    {
      "id": 4,
      "name": "Gaurav",
      "email": "gaurav@gmail.com",
      "role": "ENGINEER",
    }
  ]
  findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
    if (role) {
      return this.users.filter((user) => user.role === role)
    }
    return this.users
  }
  findOne(id: number) {
    const user = this.users.find((user) => user?.id === id);
    return user
  }
  create(createUserDto: CreateUserDto) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id)
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...createUserDto
    }
    this.users.push(newUser)
    return newUser;
  }
  update(id: number, updatedUserDto: UpdatedUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto }
      }
      return user
    })
    return this.findOne(id)
  }
  delete(id: number) {
    const removedUsers = this.findOne(id)
    this.users = this.users.filter((user) => user.id !== id)

    return removedUsers
  }
}
