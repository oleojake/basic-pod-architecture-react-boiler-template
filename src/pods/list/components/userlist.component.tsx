import React from "react";
import { MemberEntity } from "../list.vm";
import { Link } from "react-router-dom";
import { routes } from "@/router";
import classes from "./userlist.component.module.scss";
import { Box, Card, Chip, Container, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

interface UserListComponentProps {
	error: string | null;
	members: MemberEntity[];
	company: string;
}

export const UserListComponent: React.FC<UserListComponentProps> = (props) => {
	const { error, members, company } = props;
	return (
		<Box>
			{!error && (
				<Box>
					<Typography
						variant="h6"
						component="h2"
						sx={{ marginY: "1em", ":first-letter": { textTransform: "capitalize" } }}
					>
						{company} has{" "}
						<Chip color="primary" label={members.length} deleteIcon={<DoneIcon />} />{" "}
						active members
					</Typography>

					{members.map((member) => (
						<React.Fragment key={member.id}>
							<Card variant="outlined" className={classes.memberElement}>
								<img src={member.avatar_url} className={classes.memberImg} />
								<Box className={classes.memberInfo}>
									<Link
										to={routes.detail(company, member.login)}
										state={{ company }}
										className={classes.name}
									>
										{member.login}
									</Link>
									<Typography component="p" variant="body1" className={classes.id}>
										#{member.id}
									</Typography>
								</Box>
							</Card>
						</React.Fragment>
					))}
				</Box>
			)}
		</Box>
	);
};
