import { MemberDetail } from "../detail.vm";
import { MemberDetailApi } from "./detail.api-model";

export const mapMemberDetailFromApiToVm = (
	member: MemberDetailApi
): MemberDetail => ({
	id: member.id.toString(),
	login: member.login,
	name: member.name,
	company: member.company,
	bio: member.bio,
	avatarUrl: member.avatar_url,
	location: member.location,
});