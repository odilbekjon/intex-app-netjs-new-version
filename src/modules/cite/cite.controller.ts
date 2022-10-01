import { Body, Controller, Get, HttpException, HttpStatus, Put, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CiteService } from "./cite.service";
import { JwtAuthGuard } from "../LoginAdmin/jwt.guard";
import { CiteDto } from "./dto/cite.dto";

@ApiTags('api/cite')
@Controller('api/cite')
export class CiteController {
    constructor(private readonly citeService:CiteService ) {}

    // GET
    @Get()
    async GetAll() {
        try {
            const getCite = await this.citeService.GET();
            return getCite
        } catch (error) {
            console.log(error);

            throw new HttpException('SERVER_ERROR', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    // PUT
  @UseGuards(JwtAuthGuard)
    @Put()
    async UpdateCite(
        @Body() CiteDto:CiteDto
    ) {
        const putCite = await this.citeService.PUT(CiteDto.phone,CiteDto.addressRu,CiteDto.addressUz,CiteDto.timeRu,CiteDto.timeUz,CiteDto.telegram,CiteDto.instagram,CiteDto.citeId)

        return putCite
      
    }
    
}
