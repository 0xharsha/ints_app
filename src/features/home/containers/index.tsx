import React from 'react'
import {globalGetService} from '../../../utils/globalApiServices'

type res = {
    statusCode: string,
    currencies : []
}

function home() {
    const getCurrencies = () : void => {
        type params = {
            test?: string
        }
        globalGetService<params, res>(`/okr/constant/currency/`)
        .then(response => {
            if (response.statusCode == 200) {
               
            }
        })
    }

    return (
        <div>
            Home
        </div>
    )
}

export default home
