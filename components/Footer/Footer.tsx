import Link from 'next/link';

import type { MenuItem } from '@/lib/types';

type FooterProps = {
	links: MenuItem[];
};

export default function Footer(props: FooterProps) {
	const { links } = props;
	return (
		<footer className='border-zinc-500/5 border-t bg-white py-8'>
			<div className='mx-auto px-24'>
				{links?.map((link) => (
					<Link key={link.path} href={link.path}>
						{link.title}
					</Link>
				))}
			</div>
		</footer>
	);
}
