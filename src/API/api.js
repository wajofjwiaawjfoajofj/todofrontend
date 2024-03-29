import axios from "axios";

//バックエンド側のURL
const URL_API = 'http://localhost:3000';

//Todo一覧を表示するAPIを叩く
 const GetTodos  = async () => {
    try{
        const res = await axios.get(`${URL_API}/todomodels`)
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
        const res = await axios.post(`${URL_API}/todomodels`, todoData)
        return res.data;
    }
    catch(error)
    {
        console.log('エラーが発生しました' ,error);
        throw error;
    }
}



//Todoの削除用API
export const Delete = async (todoId) => {
    try{
    const res = await axios.delete(`${URL_API}/todomodels/${todoId}`)
    return res.data;
    }
    catch(error)
    {
        console.log('エラーが発生しました' ,error);
        throw error;
    }
}


//TodoのコンプリートAPI
export const Complete = async (todoId,todoData) => {
    try{
        const res = await axios.post(`${URL_API}/todomodels/${todoId}` , todoData)
        return res.data;
        }
        catch(error)
        {
            console.log('エラーが発生しました' ,error);
            throw error;
        }
}

//Todoのコンプリートを入手するAPI
export const getComplete = async (todoId) => {
    try{
        const res = await axios.get(`${URL_API}/todomodels/${todoId}`)
        return res.data;
    }
    catch(error)
        {
            console.log('エラーが発生しました' ,error);
            throw error;
        }
}

//編集用のAPI
export const Update = async (todoId, todoData) => {
    try{
        const res = await axios.put(`${URL_API}/todomodels/${todoId}`, todoData);
        return res.data;
    }
    catch(error){
        console.log(error);
        throw error
    }
}