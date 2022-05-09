import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				{/* FAVICON */}
				<link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
				<link rel='manifest' href='/favicon/site.webmanifest' />
				<link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#0D6931' />
				<meta name='msapplication-TileColor' content='#ffffff' />
				<meta name='theme-color' content='#ffffff'></meta>

				{/* Primary Meta Tags */}
				<title>Estudantina Universitária de Lisboa</title>
				<meta name='title' content='Estudantina Universitária de Lisboa' />
				<meta name='description' content='Página Oficial Estudantina Universitária de Lisboa' />

				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				{/* <meta property="og:url" content="https://metatags.io/" /> */}
				<meta property='og:title' content='Estudantina Universitária de Lisboa' />
				<meta property='og:description' content='Página Oficial Estudantina Universitária de Lisboa' />
				<meta property='og:image' content='/eul-banner.jpg' />

				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				{/* <meta property="twitter:url" content="https://metatags.io/" /> */}
				<meta property='twitter:title' content='Estudantina Universitária de Lisboa' />
				<meta property='twitter:description' content='Página Oficial Estudantina Universitária de Lisboa' />
				<meta property='twitter:image' content='/eul-banner.jpg'></meta>
			</Head>
			<main>
				<section className='bg-eul-banner bg-center bg-no-repeat bg-cover min-h-screen'>
					<div className='flex items-center justify-center flex-col pt-16'>
						<Image
							src='/eul-logo.png'
							alt='Logo Estudantina Universitária de Lisboa'
							width={250}
							height={250}
						/>
					</div>
				</section>
				<section>
					<svg id='visual' viewBox='0 0 900 100' xmlns='http://www.w3.org/2000/svg' version='1.1'>
						<path
							d='M0 68L10 65.3C20 62.7 40 57.3 60 57.8C80 58.3 100 64.7 120 66.5C140 68.3 160 65.7 180 63.7C200 61.7 220 60.3 240 57.5C260 54.7 280 50.3 300 50.7C320 51 340 56 360 57.7C380 59.3 400 57.7 420 58.7C440 59.7 460 63.3 480 66.3C500 69.3 520 71.7 540 72C560 72.3 580 70.7 600 70.2C620 69.7 640 70.3 660 67C680 63.7 700 56.3 720 55.8C740 55.3 760 61.7 780 61.2C800 60.7 820 53.3 840 53.2C860 53 880 60 890 63.5L900 67L900 0L890 0C880 0 860 0 840 0C820 0 800 0 780 0C760 0 740 0 720 0C700 0 680 0 660 0C640 0 620 0 600 0C580 0 560 0 540 0C520 0 500 0 480 0C460 0 440 0 420 0C400 0 380 0 360 0C340 0 320 0 300 0C280 0 260 0 240 0C220 0 200 0 180 0C160 0 140 0 120 0C100 0 80 0 60 0C40 0 20 0 10 0L0 0Z'
							fill='#141310'
							strokeLinecap='round'
							strokeLinejoin='miter'
						></path>
					</svg>
					<div className='px-10 py-6 md:px-32 md:py-16 flex flex-col justify-center'>
						<div className='flex flex-col text-center gap-6 justify-center py-10 md:flex-row'>
							<div className='md:w-1/4 w-full'>
								<div className='border-2 bg-gray-100 border-gray-100 px-4 py-6 rounded-lg'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										className='text-[#0D6931] w-12 h-12 mb-3 inline-block'
										viewBox='0 0 24 24'
									>
										<path d='M8 17l4 4 4-4m-4-5v9'></path>
										<path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
									</svg>
									<h2 className='title-font font-medium text-3xl text-gray-900'>2.7K</h2>
									<p className='leading-relaxed'>Downloads</p>
								</div>
							</div>
							<div className='md:w-1/4 w-full'>
								<div className='border-2 bg-gray-100 border-gray-100 px-4 py-6 rounded-lg'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										className='text-[#0D6931] w-12 h-12 mb-3 inline-block'
										viewBox='0 0 24 24'
									>
										<path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
										<circle cx='9' cy='7' r='4'></circle>
										<path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
									</svg>
									<h2 className='title-font font-medium text-3xl text-gray-900'>1.3K</h2>
									<p className='leading-relaxed'>Users</p>
								</div>
							</div>
							<div className='md:w-1/4 w-full'>
								<div className='border-2 bg-gray-100 border-gray-100 px-4 py-6 rounded-lg'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										className='text-[#0D6931] w-12 h-12 mb-3 inline-block'
										viewBox='0 0 24 24'
									>
										<path d='M3 18v-6a9 9 0 0118 0v6'></path>
										<path d='M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z'></path>
									</svg>
									<h2 className='title-font font-medium text-3xl text-gray-900'>74</h2>
									<p className='leading-relaxed'>Files</p>
								</div>
							</div>
							<div className='md:w-1/4 w-full'>
								<div className='border-2 bg-gray-100 border-gray-100 px-4 py-6 rounded-lg'>
									<svg
										fill='none'
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										className='text-[#0D6931] w-12 h-12 mb-3 inline-block'
										viewBox='0 0 24 24'
									>
										<path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
									</svg>
									<h2 className='title-font font-medium text-3xl text-gray-900'>46</h2>
									<p className='leading-relaxed'>Places</p>
								</div>
							</div>
						</div>
						<div className='flex flex-wrap -m-4'>
							<div className='p-4 md:w-1/2 w-full'>
								<div className='h-full bg-gray-100 p-8 rounded'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										className='block w-5 h-5 text-[#0D6931] mb-4'
										viewBox='0 0 975.036 975.036'
									>
										<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
									</svg>
									<p className='leading-relaxed mb-6'>
										Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before
										they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo,
										post-ironic heirloom try-hard pabst authentic iceland.
									</p>
									<a className='inline-flex items-center'>
										<span className='flex-grow flex flex-col'>
											<span className='title-font font-bold text-[#0D6931]'>
												Holden Caulfield
											</span>
											<span className='text-gray-500 text-sm'>UI DEVELOPER</span>
										</span>
									</a>
								</div>
							</div>
							<div className='p-4 md:w-1/2 w-full'>
								<div className='h-full bg-gray-100 p-8 rounded'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										className='block w-5 h-5 text-[#0D6931] mb-4'
										viewBox='0 0 975.036 975.036'
									>
										<path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
									</svg>
									<p className='leading-relaxed mb-6'>
										Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before
										they sold out fixie 90s microdosing. Tacos pinterest fanny pack venmo,
										post-ironic heirloom try-hard pabst authentic iceland.
									</p>
									<a className='inline-flex items-center'>
										<span className='flex-grow flex flex-col'>
											<span className='title-font font-bold text-[#0D6931]'>
												Holden Caulfield
											</span>
											<span className='text-gray-500 text-sm'>UI DEVELOPER</span>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='px-10 py-6 md:px-32 md:py-16 flex flex-col justify-center'>
					<div className='container mx-auto flex flex-wrap'>
						<div className='flex flex-col md:flex-row md:flex-wrap md:-m-2 -m-1'>
							<div className='flex flex-wrap md:w-1/2'>
								<div className='md:p-2 p-1 md:w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/500x300'
									/>
								</div>
								<div className='md:p-2 p-1 md:w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/501x301'
									/>
								</div>
								<div className='md:p-2 p-1 w-full'>
									<img
										alt='gallery'
										className='w-full h-full object-cover object-center block'
										src='https://dummyimage.com/600x360'
									/>
								</div>
							</div>
							<div className='flex flex-wrap md:w-1/2'>
								<div className='md:p-2 p-1 w-full'>
									<img
										alt='gallery'
										className='w-full h-full object-cover object-center block'
										src='https://dummyimage.com/601x361'
									/>
								</div>
								<div className='md:p-2 p-1 md:w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/502x302'
									/>
								</div>
								<div className='md:p-2 p-1 md:w-1/2'>
									<img
										alt='gallery'
										className='w-full object-cover h-full object-center block'
										src='https://dummyimage.com/503x303'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='px-10 py-6 md:px-32 md:py-16 flex flex-col justify-center gap-6'>
					<div style={{ left: 0, width: '100%', height: '240px', position: 'relative' }}>
						<iframe
							src='https://open.spotify.com/embed/album/3Y4mYm3Sc1D3Rc3jr9UVWZ?utm_source=oembed'
							style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
							allowFullScreen
							allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture;'
						></iframe>
					</div>
					<div style={{ left: 0, width: '100%', height: '240px', position: 'relative' }}>
						<iframe
							src='https://open.spotify.com/embed/album/73qp4iiDQ9xTdJlXKmTS5W?utm_source=oembed'
							style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
							allowFullScreen
							allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture;'
						></iframe>
					</div>
					<div style={{ left: 0, width: '100%', height: '240px', position: 'relative' }}>
						<iframe
							src='https://open.spotify.com/embed/album/07Pr3I1yAnuzi3vNVj8T3i?utm_source=oembed'
							style={{ top: 0, left: 0, width: '100%', height: '100%', position: 'absolute', border: 0 }}
							allowFullScreen
							allow='clipboard-write; encrypted-media; fullscreen; picture-in-picture;'
						></iframe>
					</div>
				</section>
				<section className='flex flex-col justify-center relative'>
					<div className='absolute inset-0 bg-gray-300'>
						<iframe
							width='100%'
							height='100%'
							frameBorder='0'
							marginHeight={0}
							marginWidth={0}
							title='map'
							scrolling='no'
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.906779038351!2d-9.133346848791692!3d38.742901363540454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1933ba51f429df%3A0x7139f6a008cfb2cf!2sEstudantina%20Universitaria%20De%20Lisboa!5e0!3m2!1spt-PT!2spt!4v1651944431799!5m2!1spt-PT!2spt'
							style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
						></iframe>
					</div>
					<div className='container px-5 py-24 mx-auto flex'>
						<div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md justify-center items-center gap-12'>
							<span className='w-12'>
								<a
									href='https://www.facebook.com/estudantinadelisboa'
									className='cursor-pointer'
									rel='noopener noreferrer'
									target='_blank'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#6b7280'>
										<path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
									</svg>
								</a>
							</span>
							<span className='w-12'>
								<a
									href='https://www.instagram.com/estudantinadelisboa/'
									className='cursor-pointer'
									rel='noopener noreferrer'
									target='_blank'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' fill='#6b7280'>
										<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
									</svg>
								</a>
							</span>
							<span className='w-12'>
								<a
									href='https://open.spotify.com/artist/6k28XTjcSkzrqnHAaDBMVr?si=Chdy7bXQTDmzVMNgZy72kQ'
									className='cursor-pointer'
									rel='noopener noreferrer'
									target='_blank'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512' fill='#6b7280'>
										<path d='M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z' />
									</svg>
								</a>
							</span>
							<span className='w-12'>
								<a
									href='mailto:estudantina@estudantinadelisboa.eu'
									className='cursor-pointer'
									rel='noopener noreferrer'
									target='_blank'
								>
									<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='#6b7280'>
										<path d='M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z' />
									</svg>
								</a>
							</span>
						</div>
					</div>
				</section>
			</main>
			<footer>
				<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
					<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
						<div className='flex items-center justify-center flex-col'>
							<Image
								src='/eul-logo.png'
								alt='Logo Estudantina Universitária de Lisboa'
								width={75}
								height={75}
							/>
						</div>
					</a>
					<p className='text-sm flex justify-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
						© 2022 Estudantina Universitária de Lisboa
					</p>
					<p className='text-sm flex justify-center text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
						<a
							href='https://www.joaommota.com'
							className='cursor-pointer'
							rel='noopener noreferrer'
							target='_blank'
						>
							@joaommota.work | www.joaommota.com
						</a>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home
