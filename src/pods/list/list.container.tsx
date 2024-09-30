import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { ListComponent } from "./list.component";
import { MemberEntity } from "./list.vm";
import { getMemberCollection } from "./api/list.repository";

export const ListContainer: React.FC = () => {
	const [members, setMembers] = React.useState<MemberEntity[]>([]);
	const [company, setCompany] = React.useState<string>("Lemoncode");
	const [error, setError] = React.useState<string | null>(null);
	const companyInputRef = React.useRef<HTMLInputElement>(null);
	const location = useLocation();

	React.useEffect(() => {
		if (location.state?.company) {
			setCompany(location.state.company);
		}
	}, [location.state]);

	React.useEffect(() => {
		getMemberCollection(company)
			.then((memberCollection) => {
				setMembers(memberCollection);
				setError(null);
			})
			.catch(() => setError("Error searching the company. Check the name."));
	}, [company]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (companyInputRef.current) {
			setCompany(companyInputRef.current.value);
		}
	};

	return (
		<>
			<ListComponent
				members={members}
				company={company}
				companyInputRef={companyInputRef}
				handleSubmit={handleSubmit}
				error={error}
			/>
		</>
	);
};
