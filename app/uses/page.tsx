import UsesItem from '@/components/UsesItem';
import UsesSection from '@/components/UsesSection';

export default function Uses() {
	const tools = [
		{ title: 'Power BI', description: 'Dashboarding, reporting, and analytics.' },
		{ title: 'SQL', description: 'Data extraction, transformation, and validation.' },
		{ title: 'Python', description: 'Data manipulation, automation, and analysis.' },
		{ title: 'Snowflake', description: 'Cloud data warehouse for complex queries.' },
		{ title: 'ETL Tools', description: 'Automated data pipelines for business intelligence.' },
		{ title: 'AI Tools', description: 'Assisting with reporting, modeling, and insight generation.' },
	];

	return (
		<main className='min-h-screen px-6 py-16 md:px-24'>
			<div className='mx-auto max-w-6xl'>
				<section className='flex max-w-[672px] flex-col gap-6'>
					<h1 className='font-bold text-5xl text-foreground leading-tight tracking-tight'>
						Software I use, gadgets I love, and other tools I recommend
					</h1>
					<p className='text-base text-zinc-600 leading-relaxed dark:text-zinc-400'>
						These are the tools and software I rely on for data analysis, reporting, and project management.
					</p>
				</section>

				<section className='mt-20 space-y-20'>
					<UsesSection title='Development Tools'>
						{tools.map((tool, i) => (
							<UsesItem key={i} title={tool.title} description={tool.description} />
						))}
					</UsesSection>
				</section>
			</div>
		</main>
	);
}
