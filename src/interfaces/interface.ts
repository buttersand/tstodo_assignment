import { Dispatch, SetStateAction } from "react";

export interface Props {
         children: React.ReactNode;
         toggle?:()=> void;
}
export interface todoSchema{
         id:string,
         title:string,
         time:string,
         date:string,
         completed:boolean,
         status?:string ,
         key?:number
}
export interface GlobalStateSchema{
         todos:todoSchema[],
         fetchtodo:(type: string) => void | todoSchema[],
         addTodo:(todo: todoSchema) => void,
         deletetodo:(id: string) => void,
         settype:Dispatch<SetStateAction<string>>   ,
         updatetodo: (id:string,data?:string)    => void
}