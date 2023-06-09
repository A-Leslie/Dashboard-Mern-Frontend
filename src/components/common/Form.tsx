//Creating property form
import {
    Box,
    Typography,
    FormControl,
    FormHelperText,
    TextField,
    TextareaAutosize,
    Stack,
    Select,
    MenuItem,
    Button,
} from "@mui/material";

import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";

const Form = ({
    type,
    register,
    handleSubmit,
    handleImageChange,
    formLoading,
    onFinishHandler,
    propertyImage,
}: FormProps) => {
    return (
        <Box color="black">
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                {type} a Property
            </Typography>

            <Box color="black">
                <form
                    style={{
                        marginTop: "20px",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        color: "#000 !important", // Add !important here
                        
                      
                    }}
                    onSubmit={handleSubmit(onFinishHandler)}
                >
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                                
                            }}
                        >
                            Enter property name
                        </FormHelperText>
                        {/* <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            style={{color:"black !important"}}
                            {...register("title", { required: true })}
                        /> */}
                         <TextareaAutosize
                            maxRows={1}
                            required
                            placeholder="Enter Property name"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "black",
                            }}
                            {...register("title", { required: true })}
                        />
                    </FormControl>
                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Description
                        </FormHelperText>
                        <TextareaAutosize
                            minRows={5}
                            required
                            placeholder="Write description"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "black",
                            }}
                            {...register("description", { required: true })}
                        />
                    </FormControl>

                    <Stack direction="row" gap={4}>
                        <FormControl sx={{ flex: 1 }}>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Select Property Type
                            </FormHelperText>
                            <Select
                                variant="outlined"
                                color="info"
                                displayEmpty
                                required
                                inputProps={{ "aria-label": "Without label" }}
                                defaultValue="apartment"
                                style={{backgroundColor : "#475be8",
                             borderRadius:"20",color:"white"}}
                                {...register("propertyType", {
                                    required: true,
                                })}
                            >
                                <MenuItem value="apartment">Apartment</MenuItem>
                                <MenuItem value="villa">Villa</MenuItem>
                                <MenuItem value="farmhouse">farmhouse</MenuItem>
                                <MenuItem value="condos">Condos</MenuItem>
                                <MenuItem value="townhouse">Townhouse</MenuItem>
                                <MenuItem value="duplex">Duplex</MenuItem>
                                <MenuItem value="studio">Studio</MenuItem>
                                <MenuItem value="chalet">Chalet</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormHelperText
                                sx={{
                                    fontWeight: 500,
                                    margin: "10px 0",
                                    fontSize: 16,
                                    color: "#11142d",
                                }}
                            >
                                Enter property price
                            </FormHelperText>
                            <TextField
                                fullWidth
                                required
                                defaultValue="40" 
                                id="outlined-basic"
                                color="info"
                                type="number"
                                variant="outlined"
                                style={{backgroundColor : "#475be8",
                             borderRadius:"4%",color:"white"}}
                                {...register("price", { required: true })}
                            />
                        </FormControl>
                    </Stack>

                    <FormControl>
                        <FormHelperText
                            sx={{
                                fontWeight: 500,
                                margin: "10px 0",
                                fontSize: 16,
                                color: "#11142d",
                            }}
                        >
                            Enter Location
                        </FormHelperText>
                        {/* <TextField
                            fullWidth
                            required
                            id="outlined-basic"
                            color="info"
                            variant="outlined"
                            style={{color:"black"}}
                            {...register("location", { required: true })}
                        /> */}
                          <TextareaAutosize
                            maxRows={1}
                            required
                            placeholder="Enter location"
                            color="info"
                            style={{
                                width: "100%",
                                background: "transparent",
                                fontSize: "16px",
                                borderColor: "rgba(0,0,0,0.23)",
                                borderRadius: 6,
                                padding: 10,
                                color: "black",
                                backgroundColor:"transparent"
                            }}
                            {...register("location", { required: true })}
                        />
                    </FormControl>

                    <Stack
                        direction="column"
                        gap={1}
                        justifyContent="center"
                        mb={2}
                    >
                        <Stack direction="row" gap={2}>
                            <Typography
                                color="#11142d"
                                fontSize={16}
                                fontWeight={500}
                                my="10px"
                            >
                                Property Photo
                            </Typography>

                            <Button
                                component="label"
                                sx={{
                                    width: "fit-content",
                                    color: "#2ed480",
                                    textTransform: "capitalize",
                                    fontSize: 16,
                                }}
                            >
                                Upload *
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>,
                                    ) => {
                                        handleImageChange(e.target.files![0]);
                                    }}
                                />
                            </Button>
                        </Stack>
                        <Typography
                            fontSize={14}
                            color="#808191"
                            sx={{ wordBreak: "break-all" }}
                        >
                            {propertyImage?.name}
                        </Typography>
                    </Stack>

                    <CustomButton
                        type="submit"
                        title={formLoading ? "Submitting..." : "Submit"}
                        backgroundColor="#475be8"
                        color="#fcfcfc"
                    />
                </form>
            </Box>
        </Box>
    );
};

export default Form;