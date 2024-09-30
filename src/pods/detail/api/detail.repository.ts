import { MemberDetail } from "../detail.vm";
import { getMemberDetail as getMemberDetailApi } from "./detail.api";
import { mapMemberDetailFromApiToVm } from "./detail.mapper";

export const getMemberDetail = (id: string): Promise<MemberDetail> => {
	return new Promise<MemberDetail>((resolve) => {
		getMemberDetailApi(id).then((result) => {
			resolve(mapMemberDetailFromApiToVm(result));
		});
	});
};