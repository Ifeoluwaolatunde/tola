import { Outlet } from 'react-router-dom';
import Mami from "./page";
export default function Rootlayout(){
    return(
        <>
        <Mami/>
        <Outlet/>
        </>
    )
}