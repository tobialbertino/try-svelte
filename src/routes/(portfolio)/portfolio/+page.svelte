<script lang="ts">
	import NavBar from "$lib/components/portfolio/NavBar.svelte";
	import About from "$lib/components/portfolio/About.svelte";
	import Blog from "$lib/components/portfolio/Blog.svelte";
	import Clients from "$lib/components/portfolio/Clients.svelte";
	import HeroSection from "$lib/components/portfolio/HeroSection.svelte";
	import Portfolio from "$lib/components/portfolio/Portfolio.svelte";
	import Contact from "$lib/components/portfolio/Contact.svelte";
	import Footer from "$lib/components/portfolio/Footer.svelte";
	import ToTop from "$lib/components/portfolio/ToTop.svelte";

	Footer;
	Contact;
	Blog;
	Portfolio;
	Clients;
	About;
	NavBar;
	HeroSection;
	ToTop;

	// add scroll-smooth html tag
	document.documentElement.classList.add("scroll-smooth");
</script>

<!-- header start  -->
<NavBar />
<!-- header end  -->

<!-- Hero section start  -->
<HeroSection />
<!-- Hero section end  -->

<!-- About section start  -->
<About />
<!-- About section end  -->

<!-- portfolio start  -->
<Portfolio />
<!-- portfolio end  -->

<!-- clients start -->
<Clients />
<!-- clients end -->

<!-- Blog start -->
<Blog />
<!-- Blog end -->

<!-- contact start -->
<Contact />
<!-- contact start -->

<!-- footer start -->
<Footer />
<!-- footer end -->

<!-- back to top -->
<ToTop />
<!-- back to top end -->
