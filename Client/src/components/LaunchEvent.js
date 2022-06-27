import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//Imports from the MUI
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function LaunchEvent() {
    const [eventTitle, setEventTitle] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("0");
    const [time, setTime] = useState("0");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState([]);

    //navigate
    const navigate = useNavigate();

    //submithandler
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("hello");
        axios
            .post(
                "http://localhost:8000/api/events",
                { eventTitle, location, date, time, description, image },
                { withCredentials: true }
                )
                .then((res) => {
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="eventLaunchBar">
            <Card sx={{ maxWidth: 450 }} className="boxDetails">
                <form>
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: "100%",
                        }}
                    >
                        <br />
                        <h1>Launch an Event</h1>
                        <TextField
                            fullWidth
                            label="Event Title"
                            id="div"
                            className="textField"
                            value={eventTitle}
                            onChange={(e) => setEventTitle(e.target.value)}
                        />
                    </Box>
                    <br />
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Street"
                            id="fullWidth"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </Box>
                    <br />
                    <Grid container item spacing={3}>
                        <Grid item xs={6}>
                            <TextField fullWidth label="City" id="fullWidth" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField fullWidth label="State" id="fullWidth" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                fullWidth
                                label="ZipCode"
                                id="fullWidth"
                            />
                        </Grid>
                    </Grid>
                    <br />
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: "100%",
                        }}
                    >
                        <TextField
                            fullWidth
                            label="Description"
                            id="fullWidth"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Box>
                    <br />
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <br />
                    <br />
                    <Stack
                        spacing={2}
                        direction="row"
                        className="eventLaunchButton"
                    >
                        <Button variant="outlined" onClick={submitHandler}>
                            Create an Event
                        </Button>
                    </Stack>
                    <br />
                </form>
            </Card>
        </div>
    );
}

export default LaunchEvent;
