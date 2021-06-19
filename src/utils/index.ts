
interface UserDetail{
    access: string
    refresh: string
    user: Record<string, string | number | object | []>
}

export default function getUserDetail(): UserDetail | string{
    const userInfo = localStorage.getItem('userInfo');
    if(userInfo){
        let user: UserDetail = JSON.parse(userInfo);
        return user;
    }else{
        return '';
    }
    
}

export type {
    UserDetail
}