<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	h1 {
		color: #d16943;
		font-weight: bold;
		text-transform: uppercase;
		margin-top: 2rem;
	}

	p {
		font-size: 0.825rem;
		color: rgba(0, 0, 0, 0.65);
	}

	a {
		text-transform: capitalize;
	}

	.content {
		padding: 5rem 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class='content'>
	<h1>{post.title}</h1>
	<p>
		Posted in 
		<a rel='prefetch' href='blog/categories/{post.category}'>
			{post.category}
		</a>
		on {post.posted_at}
	</p>
	{@html post.html}
</div>