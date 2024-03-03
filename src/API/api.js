import axios from "axios";

//バックエンド側のURL
const URL_API = 'http://localhost:3000';

//Todo一覧を表示するAPIを叩く
 const GetTodos  = async () => {
    try{
        const res = await axios.get(`${URL_API}/todos`)
        return res.data;
    }
    catch(error)
    {
        console.log('エラーが発生しました' ,error)
        throw error;
    }
}
export default GetTodos;


//Todoの作成
export const Create = async (todoData) => {
    try{
        const res = await axios.post(`${URL_API}/todos`, todoData)
        return res.data;
    }
    catch(error)
    {
        console.log('エラーが発生しました' ,error)
        throw error;
    }
}


