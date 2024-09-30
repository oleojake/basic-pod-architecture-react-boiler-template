export interface MemberDetail {
	id: string;
	login: string;
	name: string;
	company: string;
	bio: string;
	avatarUrl: string;
	location: string;
}

export const createDefaultMemberDetail = () => ({
	id: "",
	login: "",
	name: "",
	company: "",
	bio: "",
	avatarUrl: "",
	location: "",
});