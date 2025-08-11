import Sub_PongPage from "./Sub_PongPage.js"
import Sub_XOXPage from "./Sub_XOXPage.js"
import Sub_SettingPage from "./Sub_SettingPage.js"
import Sub_FriendPage from "./Sub_PongPage.js";

const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

function userProfile(name, avatar) {
	return html`
		<div class="flex space-x-4 items-center">
			<img class="w-16 h-16 rounded-full" src="${avatar}" alt="avatar">
			<span class="text-xl font-semibold">${name}</span>
		</div>
	`;
}

function navButton(navURL, icon, tooltip, state) {
	return html`
		<button
			data-nav="${navURL}" 
			class="relative group px-3 py-1 rounded-lg ${state? "bg-yellow-400": ""}">
			<i class="fas ${icon} text-xl ${state? "text-black":""}"></i>
			<span class="absolute opacity-0 -bottom-9 left-1/2 -translate-x-1/2 text-sm py-1 px-3 bg-white/20 group-hover:opacity-100 transition-opacity rounded-lg whitespace-nowrap z-10">
				${tooltip}
			</span>
		</button>
	`;
}

function navBar(subPage) {
	return html`
		<div class="flex">

			<!-- Game Section -->
			<div class="border-l border-gray-600 pt-1 pb-2 px-4">
				<div class="text-sm tracking-widest mb-1">Game</div>
				<div class="flex items-center space-x-2">

					<!-- Pong -->
					${navButton("/main/pong", "fa-table-tennis", "Pong", subPage === 1)}
					<!-- XOX -->
					${navButton("/main/xox", "fa-th", "Tic-Tac-Toe", subPage === 2)}
				</div>
			</div>

			<!-- Menu Selection -->
			<div class="border-l border-gray-600 pt-1 pb-2 pl-4">
				<div class="text-sm tracking-widest mb-1">Menu</div>
				<div class="flex items-center space-x-2">

					<!-- Friends -->
					${navButton("/main/friends", "fa-users", "Friends", subPage === 3)}
					<!-- Profile -->
					${navButton("/main/settings", "fa-cog", "Settings", subPage === 4)}
					<!-- Exit -->
					${navButton("/", "fa-sign-out-alt", "Exit", false)}
				</div>
			</div>
		</div>
	`;
}

export default function MainPage(subPage)
{
	document.title = "Dashboard";

	return html`
		<!-- Header ------------------------------------------------------------------------>
		<header class="px-4 border-b border-gray-600 flex items-center justify-between">
		
			<!-- User profile -->
			${userProfile("Jason S.K", "../asset/user-avatar.jpg")}

			<!-- Navigation Layout-->
			${navBar(subPage)}
		</header>

		${(() => {
            switch (subPage) {
                case 1: return Sub_PongPage();
                //case 2: return Sub_XOXPage();
                //case 3: return Sub_FriendPage();
				//case 4: return Sub_SettingPage();
            }
        })()}
	`;
}
