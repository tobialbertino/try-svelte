<script lang="ts">
	import { onMount } from "svelte";
	let y = 0;
	let header: HTMLElement | null;
	let toTop: HTMLElement | null;
	let hamburger = document.querySelector("#hamburger");
	let navMenu = document.querySelector("#nav-menu");
	console.log(hamburger)
	console.log(navMenu)
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
		header = document.querySelector("header");
		toTop = document.querySelector("#to-top");
	});
	function parseScroll(y: number) {
		if (y > 0) {
			header?.classList.add("navbar-fixed");
			toTop?.classList.remove("hidden");
			toTop?.classList.add("flex");
		} else {
			header?.classList.remove("navbar-fixed");
			toTop?.classList.add("hidden");
			toTop?.classList.remove("flex");
		}
	}
	$: parseScroll(y);

	// hamburger
	function handleSwitchActive() {
		const hamburger = document.querySelector("#hamburger");
		const navMenu = document.querySelector("#nav-menu");
		hamburger?.classList.toggle("hamburger-active");
		navMenu?.classList.toggle("hidden");
	}

	// klik diluar hamburger
	function switchOutsideH(event: any) {
		console.log(event.target)
		if (event.target != hamburger && event.target != navMenu) {
			hamburger?.classList.remove("hamburger-active");
			navMenu?.classList.add("hidden");
		}
	}

	window.addEventListener("click", function (e) {
		if (e.target != hamburger && e.target != navMenu) {
			hamburger?.classList.remove("hamburger-active");
			navMenu?.classList.add("hidden");
		}
	});
</script>

<svelte:window on:click={switchOutsideH} bind:scrollY={y}/>

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
				<button on:click|preventDefault={handleSwitchActive} id="hamburger" name="hamburger" type="button" class="block absolute right-4 lg:hidden">
					<span class="hanburger-line origin-top-left transition duration-300 ease-in-out" />
					<span class="hanburger-line transition duration-300 ease-in-out" />
					<span class="hanburger-line origin-bottom-left transition duration-300 ease-in-out" />
				</button>

				<nav id="nav-menu" class="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
					<ul class="block lg:flex">
						<li class="group">
							<a href="#home" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Beranda</a>
						</li>
						<li class="group">
							<a href="#about" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a>
						</li>
						<li class="group">
							<a href="#portfolio" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Portfolio</a>
						</li>
						<li class="group">
							<a href="#clients" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Clients</a>
						</li>
						<li class="group">
							<a href="#blog" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Blog</a>
						</li>
						<li class="group">
							<a href="#contact" class="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</header>
