import { useEffect, useRef } from "react";
import { useLogin } from "@refinedev/core";
import { Container, Box } from "@mui/material";
import {logo} from '../assets'
import { apartech } from "../assets";

import { CredentialResponse } from "../interfaces/google";



export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>({
        v3LegacyAuthProviderCompatible: true,
    });

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "medium",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, [])

        return <div ref={divRef} />;
    };

    return (
        <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                    Color:"blue",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <img src={logo} alt="logo" style={{
                            position:"relative",
                            left:"80px",
                            top:"-14px"
                        }}/>,
                        <img src={ apartech } alt="AparTech Logo"
                        style={{
                            position:"relative",
                            right:"50px"
                        }} />
                    </div>
                    <Box mt={4}>
                        <GoogleButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
