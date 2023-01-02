<script lang="ts">
</script>

<svelte:head>
	<title>Learn TailwindCSS</title>
</svelte:head>

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
        Lorem ipsum dolor, sit amet <a href="/" class="font-semibold underline text-blue-600">consectetur</a> adipisicing elit. Molestiae, fugit suscipit. Rerum sequi deserunt autem modi quidem, ex quisquam nobis aut, sed, iure dignissimos facilis. Accusantium similique tempore corrupti voluptatem, consequatur laboriosam, officiis neque necessitatibus earum assumenda aspernatur, doloremque eos at ullam minus! Ea iste explicabo doloremque? Quaerat, maxime eum.
    </p>
    <blockquote class="mb-4 italic font-thin text-xl">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti laborum aut maiores ea corporis nihil laudantium dignissimos nemo quas et!""
    </blockquote>
    <p class="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet esse laborum corporis nihil, minus unde sapiente. Nobis voluptates blanditiis ad, doloremque natus minus suscipit voluptas eligendi maiores perferendis repellat iste.
    </p>
</section>

<div class="max-w-xl h-96 bg-[#bada55] mx-auto mt-[42px] overflow-y-scroll bg-fixed" style="background-image: url(https://source.unsplash.com/1000x600?computer);">
<p class="p-5 text-2xl">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit officiis molestiae aut voluptates nam quos porro architecto debitis aliquid atque quibusdam reprehenderit id officia, incidunt ex quis, quaerat deleniti natus ad reiciendis ratione vero magni eligendi alias. Quidem suscipit recusandae iste laudantium iure necessitatibus quam asperiores aperiam molestiae nisi perspiciatis architecto corrupti in, reprehenderit nostrum perferendis temporibus cupiditate. Nemo, aperiam laudantium! Magni natus ipsum ullam delectus, saepe qui amet laboriosam reiciendis aut similique ducimus voluptate! Dolor quidem veritatis corrupti eius inventore quia accusantium nobis debitis architecto quo ratione neque adipisci cumque exercitationem vitae in, eos harum culpa magni molestias quasi expedita nulla, velit officia? Ex repellat est, qui harum sapiente ducimus quaerat dolore enim vero dolorum! Officiis, quam nam perferendis suscipit esse dolorum libero corporis accusantium, hic, numquam cupiditate mollitia quo tempore. Autem dolore quos quis nobis rerum in eum debitis magnam eaque at amet veniam aliquid eveniet voluptates dolor placeat, nesciunt accusamus neque. Sit pariatur modi iure, corrupti nesciunt dignissimos enim ducimus. Cupiditate amet voluptas voluptatum minima numquam reiciendis cum pariatur. Quam facilis velit perferendis alias veniam earum maxime sunt provident, amet quae magnam molestiae aliquam dolorem recusandae obcaecati sed beatae at minus aspernatur distinctio error atque maiores necessitatibus!
</p>
</div>

<div class="mt-32 max-w-xl mx-auto h-96 bg-slate-300 bg-contain bg-no-repeat bg-center rounded-2xl border-8 border-slate-400 shadow-xl shadow-slate-500 opacity-90 overflow-hidden flex" style="background-image: url(/img/1.jpg);">
    <!-- <div class="w-full h-full bg-blue-300 mix-blend-multiply"></div> -->
    <div class="w-[200px] h-[200px] bg-white/30 m-auto backdrop-blur-md rounded-full"></div>
</div>

<div class="mb-96"></div>

<style>
	* {
		border: 1px solid red;
	}
</style>
