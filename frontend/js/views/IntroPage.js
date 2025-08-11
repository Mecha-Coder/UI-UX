const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export default function IntroPage()
{
	document.title = "Welcome";

	return html`
		<!-- Intro Page Layout -->
		<div class="flex h-full flex-col items-center justify-around">

			<!-- Title -->
			<div class="border-y-4 border-yellow-400 py-6 text-6xl pixel-font tracking-widest">
				FT_TRANSCENDENCE
			</div>
			
			<!-- Button container -->
			<div class="flex flex-col space-y-6">
				
				<button 
					data-nav="/main/pong"
					class="button-secondary">
					<i class="fa-brands fa-google text-yellow-400 text-2xl"></i>
					<span>Enter with Google</span>
				</button>

				<button
					data-nav="/about" 
					class="button-primary">
					About
				</button>
			</div>

		</div>
	`;
}
