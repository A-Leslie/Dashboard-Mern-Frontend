import React from "react";
import { useRouterContext, TitleProps } from "@refinedev/core";
import { Button } from "@mui/material";

import { logo } from "assets";
import { apartech} from "assets"

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={logo} alt="AparTech" width="140px" style={{
                        position:"relative",
                        left:"50px"
                    }} />
                ) : (
                    
                    <>
                    <img src={logo} alt="logo" width="140px"
                    style={{position:"relative",top:"46px"}} />
                    <img src={apartech} alt="Apartech"
                    style={{position:"relative",bottom:"10px",left:"20px"}}
                      />
                    </>
                )}
            </Link>
        </Button>
    );
};