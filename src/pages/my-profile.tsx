// import { useGetIdentity, useOne } from "@refinedev/core";

// import { Profile } from "components";

// const MyProfile = () => {
//     const { data: user } = useGetIdentity({
//         v3LegacyAuthProviderCompatible: true,
//     });
//     const { data, isLoading, isError } = useOne({
//         resource: "users",
//         id: user?.userid,
//     });

//     const myProfile = data?.data ?? [];

//     if (isLoading) return <div>loading...</div>;
//     if (isError) return <div>error...</div>;

//     return (
//         <Profile
//             type="My"
//             name={myProfile.name}
//             email={myProfile.email}
//             avatar={myProfile.avatar}
//             properties={myProfile.allProperties}
//         />
//     );
// };

// export default MyProfile;





import { Box } from "@mui/material";
import { useGetIdentity, useOne } from "@refinedev/core";

import { Profile } from "components";

const MyProfile = () => {
    const { data: user } = useGetIdentity({
        v3LegacyAuthProviderCompatible: true,
    });
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: user?.userid || "",
    });

    const myProfile = data?.data ?? {};

    if (!user) return <div>loading...</div>;
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
            type="My"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            properties={myProfile.allProperties}
        />
        </Box>
    );
};

export default MyProfile;
