<script>
	export let segment;
</script>

<style>
	nav {
		/* border-bottom: 1px solid rgba(255,62,0,0.1); */
		font-weight: 300;
		padding: 0 1em;
		background: #d16943;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #556262;
		display: block;
		bottom: -1px;
		left: 50%;
		transform: translateX(-50%);
	}

	a {
		text-decoration: none;
		text-transform: uppercase;
		/* padding: 1em 0.5em; */
		margin-right: 1rem;
		display: block;
		font-size: 21px;
		line-height: 56px;
		letter-spacing: -1px;
		margin-bottom: 0;
		color: #f6e9ca;
		font-weight: bold;
	}
</style>

<nav>
	<ul>
		<li><a class='{segment === undefined ? "selected" : ""}' href='.'>Resume</a></li>
		<!-- <li><a class='{segment === "about" ? "selected" : ""}' href='about'>about</a></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>Blog</a></li>
	</ul>
</nav>