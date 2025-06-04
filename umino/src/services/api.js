import axios from "axios"
const AxiosInstance=axios.create({
    baseURL:"http://localhost:1337/api",
    timeout:10000,
})
export const GetApiService=async(url)=>{
    try{
        const res= await AxiosInstance.get(url);
        return res.data

    } catch(error){
        return new Error("Error"+error.message);
    }
}