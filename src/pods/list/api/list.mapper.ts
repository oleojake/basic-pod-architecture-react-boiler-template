import { MemberEntity } from "../list.vm";
import { MemberEntityApi } from "./list.api-model";

export const mapMemberFromApiToVm = (
	member: MemberEntityApi
): MemberEntity => ({
	id: member.id.toString(),
	login: member.login,
	avatar_url: member.avatar_url,
});

export const mapMemberCollectionFromApiToVm = (
	memberCollection: MemberEntityApi[]
): MemberEntity[] =>
	memberCollection.map((member) => mapMemberFromApiToVm(member));