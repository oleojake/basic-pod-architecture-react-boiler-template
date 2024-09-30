import { generatePath } from "react-router-dom";

interface SwitchRoutes {
	root: string;
	detail: string;
}

export const switchRoutes: SwitchRoutes = {
	root: "/",
	detail: "/:company/:id",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
	detail: (company: string, id: string) => string;
}

export const routes: Routes = {
	...switchRoutes,
	detail: (company: string, id: string) => generatePath(switchRoutes.detail, { company, id }),
};