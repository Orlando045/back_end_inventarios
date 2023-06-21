import { Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, Entity, ManyToMany } from "typeorm";
import { MateriaP } from "./materia_p.entity";
import { Recepcione } from "src/recepciones/entities/recepcione.entity";

@Entity()
export class RegistrarP {

    @PrimaryGeneratedColumn( 'uuid')
    id : string

   @Column()
   materiaP: string

   @Column()
   cantidad: number

   @Column()
   dateCreate: Date

   @Column()
   dateupdate:Date

   @ManyToMany(
    ()=> MateriaP,
    (materiap)=> materiap.resgitro
   )
   materiap : MateriaP

   @ManyToOne(
    ()=> Recepcione,
    (partida)=> partida.partidas
   )
   recepciones : Recepcione;

   
}