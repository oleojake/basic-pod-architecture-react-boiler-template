import React from "react";
import { MemberEntity } from "./list.vm";
import { SearchBarComponent } from "./components/searchbar.component";
import { UserListComponent } from "./components/userlist.component";

interface ListComponentProps {
	members: MemberEntity[];
	company: string;
	companyInputRef: React.RefObject<HTMLInputElement>;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	error: string | null;
}

export const ListComponent: React.FC<ListComponentProps> = (props) => {
	const { members, company, companyInputRef, handleSubmit, error } = props;

	return (
		<>
			<SearchBarComponent
				companyInputRef={companyInputRef}
				handleSubmit={handleSubmit}
				error={error}
			/>

			<UserListComponent members={members} company={company} error={error} />
		</>
	);
};
