import React from "react";
import {
	Alert,
	Box,
	IconButton,
	InputAdornment,
	TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classes from "./searchbar.component.module.scss";

interface SearchBarComponentProps {
	companyInputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
}

export const SearchBarComponent: React.FC<SearchBarComponentProps> = (
	props
) => {
	const { companyInputRef, handleSubmit, error } = props;

	return (
		<Box className={classes.container}>
			<form onSubmit={handleSubmit}>
				<TextField
					className={classes.searchBar}
					inputRef={companyInputRef}
					label="Search by company..."
					variant="outlined"
					size="small"
					slotProps={{
						input: {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										style={{ backgroundColor: "transparent" }}
										disableRipple
										type="submit"
									>
										<SearchIcon fontSize="medium" />
									</IconButton>
								</InputAdornment>
							),
						},
					}}
				/>
			</form>
			{error && (
				<Alert className={classes.error} severity="error">
					{error}
				</Alert>
			)}
		</Box>
	);
};
