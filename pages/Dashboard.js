import { useState} from "react"
import DashboardContainer from "./Components/DashboardContainerX/DashboardContainer"
import DashboardLogin from "./Components/DashboardLoginX/DashboardLogin"

export default function Dashboard({}){

    // LOGIN------------------------------
    const [login, setLogin]=useState(false)

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