import { MemberEntity } from "../list.vm";
import { getMemberCollection as getMemberCollectionApi } from "./list.api";
import { mapMemberCollectionFromApiToVm } from "./list.mapper";

export const getMemberCollection = (company: string): Promise<MemberEntity[]> => {
	return new Promise<MemberEntity[]>((resolve, reject) => {
		getMemberCollectionApi(company)
			.then((result) => {
				const mappedMembers = mapMemberCollectionFromApiToVm(result);
				resolve(mappedMembers);
			})
			.catch((error) => {
				reject(error);
			});
	});
};
