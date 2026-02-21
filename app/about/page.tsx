import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
	return (
		<main className='mx-auto w-full max-w-7xl px-6 pt-12 pb-16 md:px-8 md:pt-16 lg:px-36'>
			{/* Mobile: Photo on top */}
			<div className='mb-8 md:hidden'>
				<div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl'>
					<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' priority />
				</div>
			</div>

			{/* Two-column layout */}
			<div className='flex flex-col gap-10 md:flex-row md:gap-16'>
				{/* Left Column - Heading + Text */}
				<div className='flex-1'>
					<h1 className='mb-8 font-bold text-[32px] text-foreground leading-[1.15] tracking-tight md:text-5xl'>
						Leandro Singer Afonso – Skilled Data Analyst
					</h1>

					<div className='space-y-6 text-base text-zinc-600 leading-7 dark:text-zinc-400'>
						<p>
							Analytical and detail-oriented professional with experience in data analysis, business intelligence, and software
							engineering. Skilled in transforming complex data into actionable insights using Power BI, SQL, ETL processes,
							data validation, and AI tools to support executive decision-making. Proven ability to build automated reporting
							solutions and maintain data accuracy across large, complex data models.
						</p>
						<p>
							Brings strong leadership and project management skills developed through prior experience as a business founder
							and legal professional. Currently completing a Bachelor’s degree in Software Engineering with a focus on
							data-driven systems and analytics.
						</p>
					</div>
				</div>

				{/* Right Column - Photo (desktop) + Social Links */}
				<div className='w-full shrink-0 md:w-95'>
					{/* Desktop Photo */}
					<div className='mb-8 hidden md:block'>
						<div className='relative aspect-4/5 w-full overflow-hidden rounded-2xl'>
							<Image src='/profile.jpg' alt='Profile photo' fill className='object-cover' priority />
						</div>
					</div>

					{/* Social Links */}
					<div className='space-y-4 text-zinc-800 dark:text-zinc-300'>
						<Link
							href='https://x.com/lsingerkira'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/X.svg' alt='X' width={20} height={20} className='dark:invert' />
							<span>Follow me on X</span>
						</Link>

						<Link
							href='https://github.com/lsingerkira'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/GitHub.svg' alt='GitHub' width={20} height={20} className='dark:invert' />
							<span>Follow me on GitHub</span>
						</Link>

						<Link
							href='https://www.linkedin.com/in/afonso-leandro/'
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center gap-3 text-muted-foreground text-sm transition-colors hover:text-foreground'
						>
							<Image src='/LinkedIn.svg' alt='LinkedIn' width={20} height={20} className='dark:invert' />
							<span>Follow me on LinkedIn</span>
						</Link>

						<div className='w-fit'>
							{/* Divider */}
							<div className='my-2 mt-8 border-zinc-100 border-t dark:border-zinc-300' />

							{/* Email */}
							<Link
								href='mailto:lsingerafonso@gmail.com'
								className='mt-8 flex items-center gap-3 text-sm text-zinc-800 transition-colors hover:text-foreground dark:text-zinc-300'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									strokeWidth='1.5'
									strokeLinecap='round'
									strokeLinejoin='round'
									className='h-5 w-5'
								>
									<rect width='20' height='16' x='2' y='4' rx='2' />
									<path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
								</svg>
								<span>lsingerafonso@gmail.com</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
