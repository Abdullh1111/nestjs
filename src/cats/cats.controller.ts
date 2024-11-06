import { Controller, Get, Header, HttpCode, Post, Req, Res } from '@nestjs/common';

@Controller('cats')
export class CatsController {
    @Get()
    @HttpCode(200)
    findAll(): string {
        return 'This action returns a list of all cats';
        }
    @Get("id")
    findOne(@Res() res){
        res.status(202).send({
            success:true,
            message:"This action returns a single cat"
        })
    }
    @Post("user")
    @Header('Cache-Controled', 'ami')
    postUser(@Req() req){
        console.log(req.body)
        return req.body;
    }
    @Get("ab*cd")
    @HttpCode(200)
    wildCard(){
        return "this is wildCard"
    }
    @Get("*")
    @HttpCode(200)
    random(){
        return "page not found"
    }
}
