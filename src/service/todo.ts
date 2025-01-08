import { AxiosResponse } from "axios";
import { axios } from "./axios"

export type Post={
    id :number;
    userId:number;
    title:string ;
    body:string;
}

export const fetchListTodo = async (): Promise<[unknown,Post[]|null]> =>{
    try{
        const response: AxiosResponse<Post[]> = await axios.get("/posts")
        console.log(response.data)
        return [null,response.data]
    } catch (err){
        return[err,null]
    }
}

export const postCreateTodo = async (body:{title:string; body:string;}):Promise<[unknown,Post|null]> =>{
    try {
        const response: AxiosResponse<Post> = await axios.post("/posts",body)
        return [null,response.data]
    } catch (err){
        return[err,null]
    }
    }
export const updateTodo = async (id:string,body:{title:string; body:string;}):Promise<[unknown,Post|null]> =>{
        try {
            const response: AxiosResponse<Post> = await axios.post(`/posts/${id}`,body)
            return [null,response.data]
        } catch (err){
            return[err,null]
        }
        }
export const getTodoByTd = async (id:string):Promise<[unknown,Post|null]> =>{
        try {
                const response: AxiosResponse<Post> = await axios.post(`/posts/${id}`)
                return [null,response.data]
            } catch (err){
                return[err,null]
            }
            }
    