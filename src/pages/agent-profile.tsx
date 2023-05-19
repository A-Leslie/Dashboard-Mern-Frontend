
import { useOne } from "@refinedev/core";
import { useParams } from "react-router-dom";

import { Profile } from "components";
import { BorderHorizontal } from "@mui/icons-material";
import { Box } from "@mui/material";

const AgentProfile = () => {
    const { id } = useParams<{ id: string }>();

    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id,
    });

    console.log(data);

    const myProfile = data?.data ?? {};

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        
        <Box
        ml={"200px"}
        
        sx={{
            p: { xs: 1, md: 2, lg: 3 },
            flexGrow: 1,
            bgcolor:"#e2e2e2",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            minHeight: "100vh",
            
            
        }}>
        <Profile
    
            type="Agent"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
           
        />
        </Box>
          
    );
};

export default AgentProfile;
