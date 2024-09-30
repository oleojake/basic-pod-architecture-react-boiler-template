import { AppLayout } from "@/layout";
import { ListContainer } from "@/pods/list/list.container";
import React from "react";

export const ListScene: React.FC = () => {
	return (
		<AppLayout>
			<ListContainer />
		</AppLayout>
	);
};
