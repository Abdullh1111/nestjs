import { Controller, Get } from '@nestjs/common';

@Controller({
    host:"localhost",
    path: "/admin",
})
export class AdminController {
    @Get()
    getAdmin(): string {
        return "this is admmin page"
    }
}
