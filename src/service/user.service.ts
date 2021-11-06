import {AxiosResponse} from 'axios';
import {UserModel} from 'models/user.model';

const fakeResponse = () => Promise.resolve({
    data: {
        email:'email',
        _id:'1',
        accountStatus:"Active",
        roles:['User']
    },
    status:200
} as AxiosResponse<UserModel>);

const fetchCurrentUsers = async (): Promise<UserModel | undefined> =>{
    const response:AxiosResponse<UserModel> = await fakeResponse() //appAxios.get(`/user/findCurrent`)
    if(response && response.data){
        return response.data;
    }
    return undefined
}

export const UserService = {
    fetchCurrentUsers
}
