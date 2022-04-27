import { useState} from "react"
import DashboardContainer from "./Components/DashboardContainer/DashboardContainer"
import DashboardLogin from "./Components/DashboardLogin/DashboardLogin"

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