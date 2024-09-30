import { AppLayout } from "@/layout";
import { NotFoundContainer } from "@/pods/not-found";
import React from "react";

export const NotFoundScene: React.FC = () => {
	return (
		<AppLayout>
			<NotFoundContainer />
		</AppLayout>
	);
};
