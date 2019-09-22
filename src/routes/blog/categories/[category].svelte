<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/categories/${params.category}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { posts: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let posts;
</script>

<style>
	section {
		padding: 5rem 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	h1 {
		font-weight: bold;
		text-align: center;
		color: #d16943;
	}

	a {
		text-transform: capitalize;
	}

	span {
		font-size: 0.75rem;
		color: rgba(0, 0, 0, 0.5);
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<section>
	<h1>P&nbsp;O&nbsp;S&nbsp;T&nbsp;S</h1>

	<ul>
		{#each posts as post}
			<!-- we're using the non-standard `rel=prefetch` attribute to
					tell Sapper to load the data for the page as soon as
					the user hovers over the link or taps it, instead of
					waiting for the 'click' event -->
			<li>
				<a rel='prefetch' href='blog/categories/{post.category}'>
					{post.category}
				</a>
				|
				<a rel='prefetch' href='blog/{post.slug}'>
					{post.title} <span>~ {post.posted_at}</span>
				</a>
			</li>
		{/each}
	</ul>
</section>