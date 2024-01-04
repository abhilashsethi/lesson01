import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from "./users.service"

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) { }

  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role: "INTERN" | "ENGINEER" | "ADMIN") {
    return this.usersService.findAll(role);
  }
  // @Get("interns") //GET /interns
  // findAllInterns() {
  //   return []
  // }
  @Get(":id") //GET /users:id
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(+id);
  }
  @Post() // POST
  create(@Body() user: { name: string, email: string, role: "ENGINEER" | "ADMIN" | "INTERN" }) {
    return this.usersService.create(user)
  }
  @Patch(":id") // PATCH  /users:id
  update(@Param("id") id: string, @Body() updateUser: { name?: string, email?: string, role?: "INTERN" | "ADMIN" | "ENGINEER" }) {
    return this.usersService.update(+id, updateUser)
  }
  @Delete(":id") // DELETE /users:id
  delete(@Param("id") id: string) {
    return this.usersService.delete(+id);
  }
}
