import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {


  @Get() // GET /users or /users?role=value
  findAll(@Query('role') role: "INTERN" | "ENGINEER" | "ADMIN") {
    return []
  }
  // @Get("interns") //GET /interns
  // findAllInterns() {
  //   return []
  // }
  @Get(":id") //GET /users:id
  findOne(@Param("id") id: string) {
    return { id }
  }
  @Post() // POST
  create(@Body() user: {}) {
    return user
  }
  @Patch(":id") // PATCH  /users:id
  update(@Param("id") id: string, @Body() updateUser: {}) {
    return { id, ...updateUser }
  }
  @Delete(":id") // DELETE /users:id
  delete(@Param("id") id: string) {
    return { id }
  }
}
