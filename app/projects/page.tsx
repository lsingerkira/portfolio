'use client';

import { useEffect, useState } from 'react';

export default function Projects() {
	const [darkMode, setDarkMode] = useState(false);

	// Load saved theme preference
	useEffect(() => {
		const saved = localStorage.getItem('theme');
		if (saved === 'dark') setDarkMode(true);
	}, []);

	// Apply dark mode to the <html> element
	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [darkMode]);

	const projects = [
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
		{
			img: <img src='/icons/logo.svg' alt='Company Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
		{
			img: <img src='/icons/logo.svg' alt='Portfolio Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
		{
			img: <img src='/icons/logo.svg' alt='Study Helper Logo' className='mb-4 h-12 w-12' />,
			title: 'Company',
			description: 'Under Development',
			link: 'https://github.com/lsingerkira',
		},
	];

	return (
		<main className='min-h-screen px-6 py-12 transition-colors duration-300 md:px-24 dark:bg-zinc-900'>
			{/* ---------------------- */}
			{/*        HERO SECTION     */}
			{/* ---------------------- */}
			<section className='flex max-w-2xl flex-col gap-6'>
				<h1 className='font-bold text-5xl text-foreground leading-tight tracking-tight'>
					Things I’ve made trying to put my dent in the universe.
				</h1>

				<p className='text-base text-zinc-600 leading-relaxed dark:text-zinc-400'>
					Here you’ll find examples of my work in data analysis, business intelligence, and software engineering. These projects
					showcase my ability to turn complex data into actionable insights, automate reporting processes, and create solutions
					that support decision-making and business growth.
				</p>
			</section>

			{/* ---------------------- */}
			{/*      PROJECTS GRID     */}
			{/* ---------------------- */}
			<section className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800'
					>
						{/* IMAGE ON TOP */}
						{project.img && <div className='mb-4'>{project.img}</div>}

						<h2 className='font-semibold text-xl text-zinc-900 dark:text-zinc-100'>{project.title}</h2>

						<p className='mt-2 text-zinc-600 dark:text-zinc-300'>{project.description}</p>

						<a
							href={project.link}
							target='_blank'
							rel='noopener noreferrer'
							className='mt-4 inline-block font-medium text-teal-600 hover:underline dark:text-teal-400'
						>
							View Project →
						</a>
					</div>
				))}
			</section>
		</main>
	);
}
