import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";
import { Box, Button, Card, Typography } from "@mui/material";
import classes from "./detail.component.module.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BadgeIcon from "@mui/icons-material/Badge";

interface DetailComponentProps {
	member: MemberDetail;
	company: string;
}

export const DetailComponent: React.FC<DetailComponentProps> = (props) => {
	const { member, company } = props;

	return (
		<Box className={classes.detailContainer}>
			<Card className={classes.cardMember}>
				<img src={member.avatarUrl} alt={member.login} />
				{member.name && (
					<Typography component="h1" variant="body1" className={classes.name}>
						<AccountCircleIcon /> {member.name}
					</Typography>
				)}
				<Typography component="p" variant="body2" className={classes.rowInfo}>
					<BadgeIcon />
					{member.login}
					<span className={classes.id}>#{member.id}</span>
				</Typography>

				<Box className={classes.descriptionContainer}>
					{member.company && (
						<Typography component="p" variant="body1">
							<span className={classes.title}>Company:</span> {member.company}
						</Typography>
					)}

					{member.bio && (
						<Typography component="p" variant="body1">
							<span className={classes.title}>Description:</span> {member.bio}
						</Typography>
					)}

					{member.location && (
						<Typography component="p" variant="body1">
							<span className={classes.title}>Location:</span> {member.location}
						</Typography>
					)}
				</Box>
				<Button
					className={classes.button}
					component={Link}
					to={routes.root}
					state={{ company: company }}
					variant="contained"
					color="primary"
				>
					Back to list page
				</Button>
			</Card>
		</Box>
	);
};
