import React from "react";
import Registration from "../../../m2-features/f1-auth/a2-register/Registratiion";
import Profile from "../Profile/Profile";
import Error404 from "../error/error";
import { Route } from "react-router-dom";
import Login from "../../../m2-features/f1-auth/a1-login/Login";



export const Routes  = () =>  {

return (
    <div className='app-routes'>
        <div className='routes-wrapper-content'>
            <Route path='/login' render={() => < Login />}/>
            <Route path='/registration' render={() => < Registration/>}/>
            <Route path='/profile' render={() => < Profile/>}/>
            <Route path='/error' render={() => <Error404/>}/>
        </div>
    </div>
)
}