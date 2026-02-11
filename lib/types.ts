export type MenuItem = {
	title: string;
	path: string;
};

export const MENU_ITEMS: MenuItem[] = [
	{
		title: 'Home',
		path: '/',
	},
	{
		title: 'About',
		path: '/about',
	},
	{
		title: 'Projects',
		path: '/projects',
	},
	{
		title: 'Uses',
		path: '/uses',
	},
];
