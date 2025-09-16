import React, { useEffect } from "react";
import AuthForm from "./auth";
import { useNavigate } from "react-router-dom";

interface Props {
    isAuthenticated: boolean,
    setIsAuthenticated: (val:boolean) => void
}

const AuthPage: React.FC<Props> = (props) => {

    const navigate = useNavigate();

    useEffect(() => {
        if(props.isAuthenticated){
            navigate("/");
        }
    }, [props.isAuthenticated]);

    return(
        <>
            <div className="flex-1 flex items-center justify-center">
                <AuthForm setIsAuthenticated={props.setIsAuthenticated}/>
            </div>
        </>
    )
}

export default AuthPage;