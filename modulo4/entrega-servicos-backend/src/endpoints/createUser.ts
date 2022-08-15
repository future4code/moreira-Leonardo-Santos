import { Request, Response } from "express";
import connection from "../connection/connection";
import baseUrl from "../constants/baseUrl";
import toAddress from "../functions/toAddress";
import getRequest from "../services/getRequest";
import { Address, AddressRaw, user } from "../types/types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, address, cep, number, complement} = req.body

      if (!name || !nickname || !email || !address || !cep || !number) {
         res.statusCode = 422
         throw "'name', 'nickname', 'email', 'address', 'cep', 'number' são obrigatórios"
      }

      const id: string = Date.now().toString()

      const newUser: user = { id, name, nickname, email, address }
      const newAddressInfo: AddressRaw = await getRequest(`${baseUrl}${cep}/json/`);
      

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