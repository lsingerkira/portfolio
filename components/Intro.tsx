'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Intro() {
	return (
		<section className='flex max-w-2xl flex-col gap-6 p-6'>
			{/* Profile image */}
			<div>
				<Image
					src='/profile.jpeg' // replace with your image path
					alt='Profile picture'
					width={56}
					height={56}
					className='rounded-full'
				/>
			</div>

			{/* Heading */}
			<h1 className='font-bold text-5xl leading-tight'>Data Analyst, Problem Solver, and Lifelong Learner</h1>

			{/* Description */}
			<p className='text-base text-gray-600 leading-relaxed dark:text-zinc-400'>
				Focused on building systems that transform raw data into clarity. Passionate about solving complex problems, improving
				processes, and developing intelligent tools that make information easier to understand and act on. Work centers at the
				intersection of analytics, technology, and artificial intelligence, applying data modeling, automation, and AI-driven
				solutions to deliver measurable results.
			</p>

			{/* Social links */}
			<div className='flex gap-4 text-gray-600'>
				<Link href='https://x.com/lsingerkira' target='_blank' rel='noopener noreferrer' className='hover:opacity-70'>
					<Image src='/X.svg' alt='X (Twitter)' width={24} height={24} />
				</Link>
				<Link href='https://github.com/lsingerkira' target='_blank' rel='noopener noreferrer' className='hover:opacity-70'>
					<Image src='/GitHub.svg' alt='GitHub' width={24} height={24} />
				</Link>
				<Link
					href='https://www.linkedin.com/in/afonso-leandro/'
					target='_blank'
					rel='noopener noreferrer'
					className='hover:opacity-70'
				>
					<Image src='/LinkedIn.svg' alt='LinkedIn' width={24} height={24} />
				</Link>
			</div>
		</section>
	);
}
