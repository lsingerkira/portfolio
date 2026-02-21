'use client';

import { ArticleCard } from '@/components/ArticleCard';
import { Intro } from '@/components/Intro';
import { SignupWidget } from '@/components/SignUp';
import { SkillsWidget } from '@/components/SkillsWidget';
import { WorkWidget } from '@/components/WorkWidget';

const experiences = [
	{
		logo: '/Slack.svg',
		organization: 'Slack',
		jobTitle: 'Software Engineer',
		startYear: 2016,
		endYear: null,
	},
	{
		logo: '/Spotify.svg',
		organization: 'Spotify',
		jobTitle: 'Software Engineer',
		startYear: 2014,
		endYear: 2015,
	},
	{
		logo: '/Audible.svg',
		organization: 'Audible',
		jobTitle: 'Software Engineer',
		startYear: 2012,
		endYear: 2013,
	},
	{
		logo: '/Microsoft.svg',
		organization: 'Microsoft',
		jobTitle: 'Software Engineer',
		startYear: 2010,
		endYear: 2011,
	},
];

export default function Page() {
	return (
		<main className='mx-auto flex max-w-7xl flex-col gap-6 px-4 pt-6 pb-16 lg:px-36'>
			<Intro />
			<div className='flex flex-col gap-6 lg:w-full lg:flex-row lg:items-start lg:justify-between'>
				<div className='space-y-8 lg:flex-1 dark:text-zinc-400'>
					<ArticleCard
						date='2026-01-27'
						title='Why Clean Data Matters More Than Complex Models'
						description='Strong analytics starts with reliable data. This article explores the impact of data validation, structured transformation, and why clean datasets outperform overly complex solutions in real-world decision-making.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2025-11-25'
						title='From Raw Data to Strategic Insight'
						description='A look at how structured analysis, clear KPIs, and thoughtful dashboard design can transform scattered information into meaningful business direction.'
						url='/articles/sample-article'
					/>
					<ArticleCard
						date='2025-06-02'
						title='Automation in Analytics: Working Smarter, Not Harder'
						description='Exploring how automation improves reporting efficiency, reduces manual errors, and allows analysts to focus on higher-level problem solving.'
						url='/articles/sample-article'
					/>
				</div>

				{/*  SIGNUP COLUMN  */}
				<div className='flex flex-col gap-6'>
					{/* SIGNUP WIDGET */}
					<SignupWidget
						title={'Stay up to date'}
						content={'Get notified when I publish something new, and unsubscribe at any time.'}
					/>

					<WorkWidget
						title={'Work'}
						content={
							'My professional journey combines business leadership, legal experience, and technical expertise in data analytics and software engineering.'
						}
						experiences={experiences}
					/>
					<SkillsWidget
						title={'Skills'}
						content={'Core technologies and tools I use to analyze data and build solutions.'}
						skills={[
							{ icon: '/icons/html.svg', name: 'HTML', proficiency: 50 },
							{ icon: '/icons/css.svg', name: 'CSS', proficiency: 30 },
							{ icon: '/icons/js.svg', name: 'JavaScript', proficiency: 40 },
						]}
					/>
				</div>
			</div>
		</main>
	);
}
