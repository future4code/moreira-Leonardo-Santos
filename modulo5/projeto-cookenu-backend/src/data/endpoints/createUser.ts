import { Request, Response } from "express";
import connection from "../connection/connection";
import { user } from "../Types/types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address, cep, number } = req.body

      if (!name || !nickname || !email || !address || !cep || !number) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'address', 'cep', 'number' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, address }

      await connection('aula51_users').insert(newUser)

      res.status(201).send("Usuário criado!")

   } catch (error: any) {

      if (typeof error === "string") {
         res.send(error)
      } else {
         console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")
      }

   }
}