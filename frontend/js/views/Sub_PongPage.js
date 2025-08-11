const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

function gameCard(short, long) {
	return html`
		<div class="bg-white/20 rounded-lg p-8 text-center space-y-4">
			<div class="h-60">
				<h2 class="text-3xl font-bold mb-6">${short}</h2>
				<p>${long}</p>
			</div>
			<button class="w-full button-secondary tracking-widest">
				Online
			</button>
			<button class="w-full button-secondary tracking-widest">
				Offline
			</button>
		</div>
	`;
}

function statsDetails(playerRank, totalPlayers, rating, winStreak, totalMatch, totalWin, totalLose, winRate) {
	return html`
		<h2 class="text-xl font-bold mb-6 flex items-center">
			<i class="fa-solid fa-chart-pie mr-3"></i>
			Statistics
		</h2>

		<div class="grid grid-cols-2 grid-rows-3 gap-4">

			<!-- Ranking -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fas fa-map-pin text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Ranking</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${playerRank}<span class="text-xl">/ ${totalPlayers}</span>
				</div>
			</div>

			<!-- Rating -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fas fa-star text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Rating</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${rating}
				</div>
			</div>

			<!-- Winning Streak -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fas fa-fire text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Winning Streak</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${winStreak}
				</div>
			</div>

			<!-- Total Matches -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fas fa-gamepad text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Total Matches</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${totalMatch}
				</div>
			</div>

			<!-- Total Wins -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fas fa-face-laugh-squint text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Total Wins</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${totalWin}
				</div>
			</div>

			<!-- Total Loses -->
			<div class="bg-white/20 rounded-lg px-4 py-2">
				<div class="flex items-center mb-2">
					<i class="fa-solid fa-face-sad-cry text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Total Loses</span>
				</div>
				<div class="text-5xl font-bold text-end">
					${totalLose}
				</div>
			</div>
			
			<!-- Win Rate -->
			<div class="bg-white/20 rounded-lg px-4 py-2 col-span-2">
				<div class="flex items-center mb-4">
					<i class="fas fa-balance-scale text-yellow-400 text-2xl mr-3"></i>
					<span class="font-semibold">Win Rate</span>
				</div>
				<div class="mb-4 w-full bg-red-500 rounded-full h-4">
					<div class="bg-green-500 h-4 rounded-l-full" style="width: ${winRate}%"></div>
				</div>
				<div class="text-2xl font-semibold text-end">${winRate}%</div>
			</div>
		</div>
	`;
}

function historyAgainst(players) {
	return players.map(player => html`
		
		<div class="group relative w-10 h-10">
			<img class="size-full rounded-full object-cover" src="${player.avatar}" alt="player">
			<span class="absolute opacity-0 -bottom-5 left-1/2 -translate-x-1/2 text-sm px-3 bg-yellow-400 text-black font-semibold group-hover:opacity-100 transition-opacity rounded-lg whitespace-nowrap z-10">
				${player.name}
			</span>
		</div>
	
	`).join('');
}

function historyDetails(historyList) {

	return html`
		<h2 class="text-xl font-bold mb-4 flex items-center">
			<i class="fa fa-history mr-3"></i>
			Match History
		</h2>

		<!-- Table Header -->
		<div class="grid grid-cols-[2fr_2fr_3fr_1fr] gap-4 pr-9 px-4 mb-1 font-semibold">
			<span>Date</span>
			<span>Match Type</span>
			<span>Against</span>
			<span>Result</span>
		</div>
		
		<!-- Table Entry -->
		<div class="h-[72vh] overflow-y-auto pr-2 space-y-2">
			${historyList.map(history => html`
				
				<!-- Entry -->
				<div class="bg-white/20 rounded-lg px-4 py-1 grid grid-cols-[2fr_2fr_3fr_1fr] gap-4 items-center">
					<span>${history.date}</span>
					<span>${history.type}</span>
					<div class="flex space-x-1">
						${historyAgainst(history.against)}
					</div>
					${history.result? 
						html`<span class="text-green-500 font-bold tracking-widest">Win</span>`
						:
						html`<span class="text-red-500 font-bold tracking-widest">Lose</span>`
					}
				</div>
				
			`).join('')}	
		</div>
	`;
}

export default function Sub_PongPage() {

	const gameAI = html`
		<div class="bg-white/20 rounded-lg p-8 text-center space-y-4">
			<div class="h-60">
				<h2 class="text-3xl font-bold mb-6">Practice</h2>
				<p>Train up and sharpen your skills by battling the AI</p>
			</div>
			<button class="w-full button-secondary tracking-widest">
				vs AI
			</button>
		</div>
	`;

	const analyticButton = html`
		<div class="flex justify-end">
			<button
				data-slide="left"
				class="flex items-center font-semibold text-xl border-b-0 border-yellow-400 transition duration-200 hover:border-b-4">
				<span class="pr-4">Analytics</span>
				<i class="fas fa-chevron-right text-yellow-400 text-2xl"></i>
				<i class="fas fa-chevron-right text-yellow-400 text-2xl"></i>
			</button>
		</div>
	`;

	const gameSelectButton = html`
		<div class="flex justify-start">
			<button
				data-slide="right"
				class="flex items-center font-semibold text-xl border-b-0 border-yellow-400 transition duration-200 hover:border-b-4">
				<i class="fas fa-chevron-left text-yellow-400 text-2xl"></i>
				<i class="fas fa-chevron-left text-yellow-400 text-2xl"></i>
				<span class="pl-4">Game Selection</span>
			</button>
		</div>
	`;

	const data = [
		{
			date: "2025/08/05",
			type: "2 VS 2",
			result: false,
			against: [
				{avatar: "../asset/friend_1.jpg", name: "Zep"},
				{avatar: "../asset/friend_2.jpg", name: "Mira"},
				{avatar: "../asset/friend_3.jfif", name: "Harry"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R1)",
			result: true,
			against: [
				{avatar: "../asset/friend_4.jpg", name: "Siti"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R2)",
			result: false,
			against: [
				{avatar: "../asset/friend_5.jpg", name: "Donald"},
			],
		},
		{
			date: "2025/08/05",
			type: "1 VS 1",
			result: true,
			against: [
				{avatar: "../asset/friend_6.jpg", name: "Trump"},
			]
		},
				{
			date: "2025/08/05",
			type: "2 VS 2",
			result: false,
			against: [
				{avatar: "../asset/friend_1.jpg", name: "Zep"},
				{avatar: "../asset/friend_2.jpg", name: "Mira"},
				{avatar: "../asset/friend_3.jfif", name: "Harry"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R1)",
			result: true,
			against: [
				{avatar: "../asset/friend_4.jpg", name: "Siti"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R2)",
			result: false,
			against: [
				{avatar: "../asset/friend_5.jpg", name: "Donald"},
			],
		},
		{
			date: "2025/08/05",
			type: "1 VS 1",
			result: true,
			against: [
				{avatar: "../asset/friend_6.jpg", name: "Trump"},
			]
		},
				{
			date: "2025/08/05",
			type: "2 VS 2",
			result: false,
			against: [
				{avatar: "../asset/friend_1.jpg", name: "Zep"},
				{avatar: "../asset/friend_2.jpg", name: "Mira"},
				{avatar: "../asset/friend_3.jfif", name: "Harry"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R1)",
			result: true,
			against: [
				{avatar: "../asset/friend_4.jpg", name: "Siti"},
			],
		},
		{
			date: "2025/08/05",
			type: "Tournament (R2)",
			result: false,
			against: [
				{avatar: "../asset/friend_5.jpg", name: "Donald"},
			],
		},
		{
			date: "2025/08/05",
			type: "1 VS 1",
			result: true,
			against: [
				{avatar: "../asset/friend_6.jpg", name: "Trump"},
			]
		}
	]

	return html`
	
	<main class="relative h-full">

		<!-- Game Selection ----------------------------------------------------------------->
		<section id="game-selection" 
			class="px-12 h-full absolute inset-0 transform transition-transform duration-500 ease-in-out">

			<!-- Game Card -->
			<div class=" px-8 h-4/5 flex justify-center items-center space-x-8">
				<div class="grid gap-8 grid-cols-4">
					
					<!-- Game Selection ----------------------------------------------------------------->
					${gameCard("1 vs 1","Classic 1-on-1 clash outplay your rival in a fast-paced duel")}
					<!-- 2 vs 2 -->
					${gameCard("2 vs 2","Team up with a friend and crush the competition in thrilling 2v2 battles")}
					<!-- Tournament -->
					${gameCard("Tournament","Climb the bracket and compete for glory. Each player competes in 2 rounds to determine the winner")}
					<!-- Practice -->
					${gameAI}

				</div>
			</div>

			<!-- Analytics Button -->
			${analyticButton}
		</section>

		<!-- Analytics ----------------------------------------------------------------->
		<section id="analytics"
			class="px-12 h-full absolute inset-0 flex translate-x-full transform transition-transform duration-500 ease-in-out">
			
			<!-- Left --------------------------->
			<div class="w-5/12 h-full">
				<!-- Statistics -->
				<div class="h-4/5 px-8 pt-8">
					${statsDetails(20, 55, 96, 4, 100, 80, 20, 15)}
				</div>
				
				<!-- Game Selection Button -->
				${gameSelectButton}
			</div>

			<!-- Right: Match History ----------->
			<div class="w-7/12 px-8 pt-8">
				${historyDetails(data)}
			</div>

		</section>

	</main>
	`;
}