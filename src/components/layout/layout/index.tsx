import React from "react";
import { LayoutProps } from "@refinedev/core";
import { Box } from "@mui/material";
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
    Footer,
    OffLayoutArea,
    children,
    
}): JSX.Element => {
    const SiderToRender = Sider ?? DefaultSider;
    const HeaderToRender = Header ?? DefaultHeader;

    return (
        <>
        <Box display="flex" flexDirection="row">
            <SiderToRender />
            {/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minHeight: "100vh",
                }}
            > */}
                <HeaderToRender />
                {/* <BookProperty/> */}
                {/* <Box
                    // component="main"
                    sx={{
                        p: { xs: 1, md: 2, lg: 3 },
                        flexGrow: 1,
                        bgcolor:"#e2e2e2",
                        
                    }}
                >
                    {children}
                  
                    
                </Box> */}
             
                {Footer && <Footer />}
            </Box>
            {OffLayoutArea && <OffLayoutArea />}
         
        {/* </Box> */}
        
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/book" element={<BookProperty/>} />
            <Route path="/edit-property" element={<EditProperty/>} />
            <Route path="/properties" element={<AllProperties/>} />
            <Route path="/create-property" element={<CreateProperty/>} />
            <Route path="/agents" element={<Agents/>} />
            <Route path="/my-profile" element={<MyProfile/>} />
            <Route path="/properties/show/:id" element={<PropertyDetails/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/agent/:id" element={<AgentProfile/>} />
        </Routes>
        </>
       
    );
};