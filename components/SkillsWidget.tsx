type Skill = {
	icon: string;
	name: string;
	proficiency: number;
};

type SkillsWidgetProps = {
	title: string;
	content: string;
	skills?: Skill[];
};

export function SkillsWidget({ title, content, skills = [] }: SkillsWidgetProps) {
	return (
		<section
			data-testid='skillsWidget'
			className='w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:w-[398px] dark:border-zinc-700 dark:bg-zinc-900'
		>
			<h2
				data-testid='skillsWidgetTitle'
				className='font-bold text-2xl text-gray-800 leading-tight dark:text-gray-100'
				style={{ wordWrap: 'break-word' }}
			>
				{title}
			</h2>

			<p
				data-testid='skillsWidgetContent'
				className='text-gray-600 text-sm leading-snug dark:text-zinc-400'
				style={{ wordWrap: 'break-word' }}
			>
				{content}
			</p>

			<ul className='m-0 flex flex-col gap-6 p-0'>
				{skills.map((item, index) => (
					<li key={index}>
						<div className='flex flex-row items-center gap-3'>
							<img src={item.icon} alt={`${item.name} icon`} className='h-12 w-12 rounded' />

							<div className='flex flex-1 flex-col gap-1'>
								<h3
									className='font-bold text-base text-gray-800 leading-tight dark:text-gray-100'
									style={{ wordWrap: 'break-word' }}
								>
									{item.name}
								</h3>

								<div className='flex h-8 w-full items-center rounded bg-gray-200'>
									<div
										className='h-full rounded bg-teal-500 transition-all duration-500'
										style={{ width: `${item.proficiency}%` }}
									></div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
}
