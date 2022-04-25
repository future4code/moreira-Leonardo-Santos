import { Request, Response } from "express";
import { connection } from "../data/connection";
import { recipe } from "../types";

const toRecipe = (input: any): recipe => {
   return {
      id: input.id,
      title: input.title,
      description: input.description,
      userId: input.user_id,
      createdAt: input.created_at
   };
};

export async function getAllRecipes(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const result = await connection("aula49_recipes")

      const recipes = result.map(toRecipe)

      res.status(200).send(recipes)

   } catch (error) {
      res.status(500).send("Internal server error")
   };
};

// Exercício 1
/* a)
 */
export const getByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const result = await connection("aula48_exercicio").where('name', 'like', `%${req.query.name}%`);
      
      const users = result;

      res.status(200).send(users);
   } 
   catch(error){
      res.status(500).send("Internal server error");      
   };
};

/* b)
 */
export const getByType = async (req: Request, res: Response): Promise<void> => {
   try {
      const type: string = req.params.type;
      const table: string = 'aula48_exercicio';

      const result = await connection(table).where('type', type);

      res.status(200).send(result);
   } 
   catch (error) {
      res.status(500).send('Internal error');      
   }
};

// Exercício 2
export const getByTypeOrName = async (req: Request, res: Response): Promise<void> => {
   try {
      const type: string = req.query.type as string;
      const name: string = req.query.name as string;
      const order: string = req.query.order as string;
      const table: string = 'aula48_exercicio';

      const result = await connection(table).where('name', 'like', `%${name}%`).andWhere('type', 'like', `%${type}%`).orderBy('email', order); 
      
      res.status(200).send(result);
   } 
   catch (error) {
      res.status(500).send('Internal error');      
   }
};

// Exercício 3 
export const getFive = async (req: Request, res: Response): Promise<void> => {
   try {
      let page: number = Number(req.query.page);
      let offset: number = 5 * (page - 1);
      const table: string = 'aula48_exercicio';

      const result = await connection(table).limit(5).offset(offset);

      res.status(200).send(result);
   } 
   catch (error) {
      res.status(500).send('Internal error');      
   }
};

// Exercicio 4
export const getUsersUltimate = async (req: Request, res: Response): Promise<void> => {
   try {
      const table: string = 'aula48_exercicio';
      const name: string = req.query.name as string;   
      const type: string = req.query.type as string;
      let filter: string = req.query.filter as string;   
      let order: string = req.query.order as string;
      const size: number = Number(req.query.size);
      let page: number = Number(req.query.page);
      let offset: number = size * (page - 1);

      if(order === '' || order === undefined) {
         order = 'desc';
      }
      console.log(order)

      if (filter === '' || filter === undefined) {
         filter = 'email';
      }

      if (page <= 0 || isNaN(page)) {
         page = 1;
      }

      const result = await connection(table).where('name', 'like', `%${name}%`).andWhere('type', 'like', `%${type}%`).orderBy(filter, `${order}`).limit(size).offset(offset);

      res.status(200).send(result);
   } 
   catch (error) {
      res.status(500).send('internal error');
   }
};