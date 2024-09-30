import React from "react";
import { PropsWithChildren } from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import classes from "./app.layout.module.scss";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<Container maxWidth="xl" className={classes.appContainer}>
			<Box className={classes.headerContainer}>
				<PeopleAltIcon className={classes.icon} />
				<Typography variant="h4" component="h1" className={classes.title}>
					Basic Pod architecture in a React project
				</Typography>
			</Box>
			<Divider />
			<Container className={classes.bodyContainer}>{children}</Container>
		</Container>
	);
};
