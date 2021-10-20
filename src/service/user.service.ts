import {AxiosResponse} from 'axios';
import {UserModel} from 'models/user.model';
import {appAxios} from 'api/interceptor/auth.interceptor';


const fetchCurrentUsers = async (): Promise<UserModel | undefined> =>{
    const response:AxiosResponse<UserModel> = await appAxios.get(`/user/findCurrent`)
    if(response && response.data){
        return response.data;
    }
    return undefined
}

export const UserService = {
    fetchCurrentUsers
}
