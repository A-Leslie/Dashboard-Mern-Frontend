import React from "react";
import { useGetIdentity } from "@refinedev/core";
import { AppBar, Avatar, Stack, Toolbar, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

export const Header: React.FC = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const showUserInfo = user && (user.name || user.avatar);

    return (
        <AppBar
            color="default"
            position="sticky"
            elevation={0}
            sx={{ background: "#475be8",position:"relative",top:"0px" }}
        
        >
            <Toolbar>
                <Stack
                    direction="row"
                    width="100%"
                    // height="100px"
                    padding={0}
                    margin={0}
                    position="relative"
                  justifyContent="flex-end"
                    alignItems="center"
                   
                >
                    {showUserInfo && (
                        <Stack direction="row" gap="16px" alignItems="center">
                            {user.avatar && (
                                <Avatar src={user?.avatar} alt={user?.name} />
                            )}
                            {user.name && (
                                <Typography variant="subtitle2">
                                    {user?.name}
                                </Typography>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
};