import { AppLayout } from "@/layout";
import { DetailContainer } from "@/pods/detail/detail.container";
import React from "react";

export const DetailScene: React.FC = () => {
	return (
		<AppLayout>
			<DetailContainer />
		</AppLayout>
	);
};
