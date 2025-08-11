import IntroPage from "./views/IntroPage.js";
import AboutPage from "./views/AboutPage.js";
import MainPage from "./views/MainPage.js";

const app = document.getElementById("app");

const routes = {
	"/": () => IntroPage(),
	"/about": () => AboutPage(),
	"/main/pong": () => MainPage(1),
	"/main/xox": () => MainPage(2),
	"/main/friends": () => MainPage(3),
	"/main/settings": () => MainPage(4)
};


//===========================================================================
// Init stage

// 1 Back and Forth button
window.addEventListener("popstate", ()=>{app.innerHTML = routes[location.pathname]();});

// 2 
// - Listen to all clicks happening in the body
// - Then, set default start page
document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
	
	// Handle button click event
	const button = e.target.closest("button");
	if (!button) return;

	if (button.dataset?.nav)
	{
		const url = button.dataset.nav;
		history.pushState(null, null, url);
		app.innerHTML = routes[url]();
	}
	else if (button.dataset?.slide)
	{
		const slide = button.dataset.slide;
		const gameSelect =  document.getElementById("game-selection");
		const analytics = document.getElementById("analytics");
		
		if (slide === "left") 
		{ 
			gameSelect.classList.add("-translate-x-full"); 
			analytics.classList.remove("translate-x-full");
		}
		else 
		{
			gameSelect.classList.remove("-translate-x-full"); 
			analytics.classList.add("translate-x-full");
		}
	}


})
	// Handle manual URL 
    if (routes[location.pathname]) {
        app.innerHTML = routes[location.pathname]();
    } else {
        history.replaceState(null, null, "/");
        app.innerHTML = routes["/"]();
    }
});







