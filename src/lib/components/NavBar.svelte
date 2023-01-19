<script lang="ts">
	import { onMount } from 'svelte';
	let y = 0;
	let header: HTMLElement | null;
	// hunburger
	// const hamburger = document.querySelector("#hamburger");

	// hamburger?.addEventListener('click', function() {
	//     hamburger.classList.toggle('hamburger-active')
	// })

	// navbar fixed
	// window.onscroll = function () {
	// 	const header = document.querySelector('header');
	// 	const fixedNav = header?.offsetTop;
	// 	if (window.pageYOffset > fixedNav) {
	// 		header?.classList.add('navbar-fixed');
	// 	} else {
	// 		header?.classList.remove('navbar-fixed');
	// 	}
	// }

	onMount(() => {
		header = document.querySelector('header');
	});
	function parseScroll(y: number) {
		// alert('The scroll event only triggers when there is content to scroll.')
		// const header = document.querySelector('header');
		if (y > 0) {
			header?.classList.add('navbar-fixed');
		} else {
			header?.classList.remove('navbar-fixed');
		}
	}

	function handleSwitchActive() {
		const hamburger = document.querySelector("#hamburger");
		const navMenu = document.querySelector("#nav-menu");
		hamburger?.classList.toggle("hamburger-active");
		navMenu?.classList.toggle("hidden");
	}

	$: parseScroll(y);
</script>

<svelte:window bind:scrollY={y}/>

<!-- <div class="report mt-56">
	<div>horizontal: {y}</div>
</div> -->

<header class="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
	<div class="container">
		<div class="flex items-center justify-between relative">
			<div class="px-4">
				<a href="/" class="font-bold text-lg text-primary block py-6">Tobi Albertino</a>
			</div>
			<div class="flex items-center px-4">
				<button on:click={handleSwitchActive} id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
					<span class="hanburger-line origin-top-left transition duration-300 ease-in-out" />
					<span class="hanburger-line transition duration-300 ease-in-out" />
					<span class="hanburger-line origin-bottom-left transition duration-300 ease-in-out" />
				</button>

				<nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
					<ul class="block lg:flex">
						<li class="group">
							<a href="/" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Go: Home</a>
						</li>
						<li class="group">
							<a href="/portfolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Go: Portfolio</a>
						</li>
						<li class="group">
							<a href="/try" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Go: try tailwind</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
