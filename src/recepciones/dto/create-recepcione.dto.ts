import { ApiProperty } from "@nestjs/swagger"
import { IsOptional } from "class-validator"
import { MateriaP } from "src/materia_p/entities/materia_p.entity"
import { RegistrarP } from "src/materia_p/entities/registrar-partidas.entity"
import { OneToMany } from "typeorm"

export class CreateRecepcioneDto {

    @IsOptional()
    @ApiProperty()
    folio: string

    @IsOptional()
    @ApiProperty()
    estado_pedido_: string

    @IsOptional()
    @ApiProperty()
    date_llegada: string

    @IsOptional()
    @ApiProperty()
    date_create: string

    @IsOptional()
    @ApiProperty()
    date_update: string

   
}
