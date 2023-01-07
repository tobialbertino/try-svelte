<script lang="ts">
	// const html = document.querySelector('body');
	// const checkBox = document.querySelector('#toggle');

	// checkBox?.addEventListener("click", function() {
	//     checkBox?.ariaChecked ? html?.classList.add('dark') : html?.classList.remove('dark');
	// });
	let darkMode = false;

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		darkMode ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
	}

	// add scroll-smooth html tag
	document.documentElement.classList.add("scroll-smooth");
</script>

<svelte:head>
	<title>Learn TailwindCSS</title>
</svelte:head>

<body class="dark:bg-slate-800 dark:text-slate-200">
	<h1 class="text-8xl font-bold text-center my-10">Mari Belajar <span class="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">TailwindCSS</span></h1>

	<section class="mb-10 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-200">
		<h2 class="text-3xl text-center">Spacing</h2>
		<div class="m-4 bg-red-200">Margin</div>
		<div class="py-8 bg-red-200">Padding</div>
	</section>

	<section class="mb-10 bg-green-200">
		<h2 class="text-3xl text-center">Sizing</h2>
		<div class="w-32 h-32 bg-yellow-200">Kotak 1</div>
	</section>

	<section class="mb-4 font-sans max-w-3xl mx-auto ">
		<h2 class="mb-2 text-4xl font-bold">Belajar Mengenai Typography pada TailwindCSS</h2>
		<div class="mb-4 text-lg text-gray-500">By <a href="/" class="text-gray-700 font-semibold">Tobi Albertino</a>, 1 Januari 2023</div>
		<p class="mb-4">
			Lorem ipsum dolor, sit amet <a href="/" class="font-semibold underline text-blue-600">consectetur</a> adipisicing elit. Molestiae, fugit suscipit. Rerum sequi deserunt autem modi quidem, ex quisquam nobis aut, sed, iure dignissimos facilis. Accusantium
			similique tempore corrupti voluptatem, consequatur laboriosam, officiis neque necessitatibus earum assumenda aspernatur, doloremque eos at ullam minus! Ea iste explicabo doloremque? Quaerat, maxime eum.
		</p>
		<blockquote class="mb-4 italic font-thin text-xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum aut maiores ea corporis nihil laudantium dignissimos nemo quas et!""</blockquote>
		<p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse laborum corporis nihil, minus unde sapiente. Nobis voluptates blanditiis ad, doloremque natus minus suscipit voluptas eligendi maiores perferendis repellat iste.</p>
	</section>

	<div class="max-w-xl h-96 bg-[#bada55] mx-auto mt-[42px] overflow-y-scroll bg-fixed" style="background-image: url(https://source.unsplash.com/1000x600?computer);">
		<p class="p-5 text-2xl">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit officiis molestiae aut voluptates nam quos porro architecto debitis aliquid atque quibusdam reprehenderit id officia, incidunt ex quis, quaerat deleniti natus ad reiciendis ratione
			vero magni eligendi alias. Quidem suscipit recusandae iste laudantium iure necessitatibus quam asperiores aperiam molestiae nisi perspiciatis architecto corrupti in, reprehenderit nostrum perferendis temporibus cupiditate. Nemo, aperiam laudantium!
			Magni natus ipsum ullam delectus, saepe qui amet laboriosam reiciendis aut similique ducimus voluptate! Dolor quidem veritatis corrupti eius inventore quia accusantium nobis debitis architecto quo ratione neque adipisci cumque exercitationem vitae
			in, eos harum culpa magni molestias quasi expedita nulla, velit officia? Ex repellat est, qui harum sapiente ducimus quaerat dolore enim vero dolorum! Officiis, quam nam perferendis suscipit esse dolorum libero corporis accusantium, hic, numquam
			cupiditate mollitia quo tempore. Autem dolore quos quis nobis rerum in eum debitis magnam eaque at amet veniam aliquid eveniet voluptates dolor placeat, nesciunt accusamus neque. Sit pariatur modi iure, corrupti nesciunt dignissimos enim ducimus.
			Cupiditate amet voluptas voluptatum minima numquam reiciendis cum pariatur. Quam facilis velit perferendis alias veniam earum maxime sunt provident, amet quae magnam molestiae aliquam dolorem recusandae obcaecati sed beatae at minus aspernatur
			distinctio error atque maiores necessitatibus!
		</p>
	</div>

	<div class="mt-32 max-w-xl mx-auto h-96 bg-slate-300 bg-contain bg-no-repeat bg-center rounded-2xl border-8 border-slate-400 shadow-xl shadow-slate-500 opacity-90 overflow-hidden flex" style="background-image: url(/img/1.jpg);">
		<!-- <div class="w-full h-full bg-blue-300 mix-blend-multiply"></div> -->
		<div class="w-[200px] h-[200px] bg-white/30 m-auto backdrop-blur-md rounded-full" />
	</div>

	<hr class="my-20" />

	<div class="flex justify-center">
		<span class="text-sm text-slate-500 mr-2">Light</span>
		<input type="checkbox" id="toggle" class="hidden" checked={darkMode} on:click={handleSwitchDarkMode} />
		<label for="toggle">
			<div class="w-9 h-5 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer">
				<div class="w-4 h-4 bg-white rounded-full toggle-circle" />
			</div>
		</label>
		<span class="text-sm text-slate-500 ml-2">Dark</span>
	</div>

	<button
		class="my-10 bg-sky-500 px-5 py-2 rounded-full text-white font-semibold font-sans block mx-auto hover:bg-sky-600 active:bg-sky-700 focus:ring focus:ring-sky-300 dark:bg-slate-300 dark:text-slate-800 dark:hover:text-slate-900 dark:hover:bg-slate-100"
		>Save</button
	>

	<div class="max-w-lg my-10 border border-slate-200 rounded-xl mx-auto p-5 shadow-md font-sans hover:bg-sky-500 group dark:hover:bg-slate-300">
		<h5 class="font-bold text-slate-700 text-lg mb-3 group-hover:text-white dark:group-hover:text-slate-800">My Card</h5>
		<p class="text-slate-600 group-hover:text-white selection:bg-lime-300 selection:text-slate-900 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:float-left first-letter:mr-3 dark:group-hover:text-slate-800">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias cumque autem minima dicta, aliquam quidem velit saepe fugiat perspiciatis rem hic dolorum temporibus nihil sint explicabo corrupti delectus similique.
		</p>
	</div>

	<div class="max-w-lg my-10 border border-slate-200 rounded-xl mx-auto p-5 shadow-md font-sans ">
		<form action="">
			<label for="email">
				<span class="block font-semibold mb-1 text-slate-700 after:content-['*'] after:text-pink-600 after:ml-0.5">Email</span>
				<input
					type="email"
					id="email"
					placeholder="masukkan email.."
					class="px-3 py-2 border shadow rounded w-full block text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500 invalid:text-pink-700 invalid:focus:ring-pink-700 invalid:focus:border-pink-700 peer"
				/>
				<p class="text-sm m-1 text-pink-700 invisible peer-invalid:visible">Email tidak valid</p>
			</label>
		</form>
	</div>

	<hr class="my-20" />

	<div class="w-40 h-40 bg-sky-500 mx-auto rounded-lg shadow-lg hover:scale-125 hover:rotate-45 hover:translate-x-16 hover:bg-pink-500 transition" />

	<div class="w-40 h-40 mx-auto rounded-lg mt-20 group">
		<div class="w-full h-full bg-sky-500 rounded-lg shadow-lg group-hover:rotate-180 origin-top-left transition duration-1000 delay-1000" />
	</div>

	<div class="w-40 h-40 mt-20 bg-pink-500 mx-auto rounded-lg shadow-lg animate-goyang" />

	<hr class="my-20 border-t-4" />

	<div class="container mx-auto">
		<div class="border rounded-lg shadow-lg p-10 relative">
			<div class="w-10 h-10 bg-pink-200 rounded-full flex absolute -top-5 -right-5"><span class="text m-auto">❌</span></div>

			<div class="w-10 h-10 bg-sky-200 rounded-full flex fixed bottom-5 right-5"><a href="#top" class="text-xl m-auto">🔝</a></div>

			<img src="img/1.jpg" alt="laptop" width="150" class="float-left mr-3" />
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque harum non asperiores officiis, pariatur ipsam molestias, nihil voluptas provident qui recusandae quae cum velit repudiandae aut dolorem voluptatibus debitis ullam repellendus beatae?
				Iure mollitia repellat reprehenderit, tempora cum totam consectetur voluptatem at enim porro dolorem impedit eos qui laborum veritatis!
			</p>
		</div>
	</div>

	<div class="container mx-auto border rounded-lg shadow-lg p-10 mt-20 columns-3">
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
		<img src="https://source.unsplash.com/600x400" alt="random" class="mb-4" />
	</div>

	<hr class="my-24 border-t-4" />

	<div class="container px-6 font-sans max-w-md mx-auto sm:max-w-xl md:max-w-5xl lg:flex lg:max-w-full lg:p-0">
		<div class="lg:p-12 lg:flex-1">
			<h3 class="text-4xl font-bold text-slate-800 sm:text-5xl md:text-6xl">Tobi <span class="text-sky-500">Alber</span>tino</h3>
			<img src="img/2.jpg" alt="laptop" class="mt-4 rounded-xl shadow-xl sm:mt-6 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden" />
			<h2 class="mt-6 text-2xl font-semibold text-slate-800 sm:mt-8 sm;text-4xl">Mari belajar programming bersama</h2>
			<p class="mt-2 text-slate-600 sm:mt-4 sm:text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero modi fuga facere, provident, alias ipsam quisquam incidunt cumque in quis cupiditate. Facilis reprehenderit vero saepe facere eum minima aliquid nobis!
			</p>

			<div class="mt-4 sm:mt-6 sm:">
				<a href="#top" class="inline-block px-5 py-3 bg-red-600 text-white rounded-lg shadow-lg uppercase font-semibold tracking-wider text-sm sm:text-base">Subscribe</a>
			</div>
		</div>
		<div class="hidden lg:flex lg:w-1/2 ">
			<img src="img/2.jpg" alt="laptop" class="object-cover rounded-l-3xl" />
		</div>
	</div>

	<h2 class="mt-24 mb-10 text-center font-bold text-3xl text-slate-700">My Gallery</h2>

	<div class="container mx-auto px-6 font-sans sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
		<div class="rounded-xl shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
			<img src="https://source.unsplash.com/600x400" alt="random" class="w-full" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-slate-700">Image Title</div>
				<p class="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum.</p>
			</div>
		</div>
		<div class="rounded-xl shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
			<img src="https://source.unsplash.com/600x400" alt="random" class="w-full" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-slate-700">Image Title</div>
				<p class="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum.</p>
			</div>
		</div>
		<div class="rounded-xl shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
			<img src="https://source.unsplash.com/600x400" alt="random" class="w-full" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-slate-700">Image Title</div>
				<p class="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum.</p>
			</div>
		</div>
		<div class="rounded-xl shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
			<img src="https://source.unsplash.com/600x400" alt="random" class="w-full" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-slate-700">Image Title</div>
				<p class="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum.</p>
			</div>
		</div>
		<div class="rounded-xl shadow-lg overflow-hidden mb-10 sm:mb-0 sm:w-64 md:w-80 lg:w-72">
			<img src="https://source.unsplash.com/600x400" alt="random" class="w-full" />
			<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2 text-slate-700">Image Title</div>
				<p class="text-sm text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, eum.</p>
			</div>
		</div>
	</div>

	<div class="mt-64 p-2 font-sans grid grid-cols-2 gap-2 md:grid-cols-4 md:p-4">
		<h2 class="h-15 text-xl font-semibold text-slate-700 md:col-start-4 md:row-start-2 md:flex"><span class="self-center">Hello Tobi</span></h2>
		<div class="h-15 text-lg font-bold text-slate-600 md:col-start-2 md:row-start-2 md:flex"><span class="self-end">@tobialbertino</span></div>

		<div class="grid-card group">
			<div class="grid-card-img bg-[url('https://source.unsplash.com/640x480')]" />
		</div>
		<div class="grid-card group md:col-start-3">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group md:col-start-2">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group md:col-start-4">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group md:col-start-3">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
		<div class="grid-card group md:col-start-3">
			<div class="w-full h-full bg-[url('https://source.unsplash.com/640x480')] absolute bg-cover bg-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
		</div>
	</div>

	<div class="mb-96" />
</body>

<h1>Hello World!</h1>

<style lang="postcss">
	/* * {
		border: 1px solid red;
	} */
	/* #toggle:checked ~ label div.toggle-circle {
		@apply translate-x-3;
	} */
</style>
