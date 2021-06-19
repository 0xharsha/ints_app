import React, {useEffect} from 'react'
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios';
import {globalPostService} from '../../../utils/globalApiServices'

type LogingResponse = {
    data: any
    statusCode: number,
    message: string
}

interface LoginData{
    email: string
    password: string
}

interface OrganisationData{
    name: string,
    size: number,
    category: number,
    designation: string
    logo?: File
}

function Home() {

    useEffect(() => {
        
    }, []);

    const submitLogin = () : void => {

        const loginData: LoginData = {
            email: 'harsha+02@designstring.com',
            password: 'Password@123'
        }

        globalPostService<LogingResponse, LoginData>(`/auth/login/`, loginData)
        .then(response  => {
            if (response.statusCode === 200) {
                debugger
                localStorage.setItem('userInfo', JSON.stringify(response.data));
            }
        })
    }

    const orgCreate = () : void => {
        const orgData: OrganisationData = {
            name: 'Lorem',
            size: 1,
            category: 1,
            designation: 'Lorem'
        }

        globalPostService<LogingResponse, OrganisationData>(`/organisation/create/`, orgData)
        .then(response  => {
            if (response.statusCode === 200) {
                debugger
            }
        })
    }

    return (
        <div>
            Home
        </div>
    )
}

export default Home
