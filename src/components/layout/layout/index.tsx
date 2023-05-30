import React from "react";
import { LayoutProps } from "@refinedev/core";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { Sider as DefaultSider } from "../sider";
import { Header as DefaultHeader } from "../header";
import {
    Login,
    Home,
    Agents,
    MyProfile,
    PropertyDetails,
    AllProperties,
    CreateProperty,
    AgentProfile,
    EditProperty,
    BookProperty,
} from "pages";



export const Layout: React.FC<LayoutProps> = ({
    Sider,
    Header,
    
}): JSX.Element => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    return (
        <>
       
            <SiderToRender />
                <HeaderToRender />
        {/* Defining routes */}
                <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/book" element={<BookProperty/>} />
            <Route path="/properties/edit/:id" element={<EditProperty/>} />
            <Route path="/properties" element={<AllProperties/>} />
            <Route path="/properties/create" element={<CreateProperty/>} />
            <Route path="/agents" element={<Agents/>} />
            <Route path="/my-profile" element={<MyProfile/>} />
            <Route path="/properties/show/:id" element={<PropertyDetails/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/agent/:id" element={<AgentProfile/>} />
            <Route path="/agents/show/:id" element={<AgentProfile/>} /> 
        </Routes>
        </> 
       
    );
};