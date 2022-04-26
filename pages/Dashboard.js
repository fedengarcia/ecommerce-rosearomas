import { useState} from "react"
import DashboardContainer from "./components/DashboardContainer/DashboardContainer"
import DashboardLogin from "./components/DashboardLogin/DashboardLogin"

export default function Dashboard({}){

    // LOGIN------------------------------
    const [login, setLogin]=useState(true)


    

    return(
        <>
            {login?
               <DashboardLogin setLogin={setLogin} login={login}/>
                :
                <DashboardContainer/>
            }
        </>    
    )
}