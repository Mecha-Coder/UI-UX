const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

function techStack(dev, iconList, techList) 
{
	return html`
		<div class="bg-white col-span-3 space-y-8 rounded-xl p-8 shadow-md shadow-gray-200">
			<div>
				<i class="fas ${iconList[0]} text-2xl mr-4"></i>
				<span class="text-2xl font-bold">${dev}</span>
			</div>
			<ul class="list-disc pl-5 space-y-2 text-gray-700">
				<li>${techList[0]}</li>
				<li>${techList[1]}</li>
				<li>${techList[2]}</li>
			</ul>
			<div class="flex justify-around">
				<img class="w-12 h-12" src="${iconList[1]}" alt="logo">
				<img class="w-12 h-12" src="${iconList[2]}" alt="logo">
			</div>
		</div>
	`
}

function teamMember(name, intra, img) 
{
	return html`
		<div class="flex flex-col text-center">
			<img class="w-24 h-24 rounded-full object-cover" src="${img}" alt="member">
			<span class="font-bold text-lg">${name}</span>
			<span class="text-gray-500">${intra}</span>
		</div>
	`;
}

export default function AboutPage()
{
	document.title = "About";

	const iconList = [
		"fa-code", 
		"../asset/tailwind.svg", 
		"../asset/typescript.svg",
		"fa-server",
		"../asset/fastify.svg",
		"../asset/sqlite.svg"
	]
	
	const techList = [
		"HTML5", 
		"Tailwind", 
		"Typescript",
		"Node.js",
		"Fastify",
		"Sqlite"
	]

	const projectDescription = html`
		<div class="col-span-6 space-y-6 text-lg">
			<p>
				Part of the 42 school curriculum, this project focuses on the design, 
				development, and deployment of a full-stack web application.
			</p>   
			<p>
				The application features a modern take on the classic 1970s Pong 
				game. Players can compete in real-time matches with friends or 
				sharpen their skills in practice mode against AI. Progress can be tracked 
				through detailed analytics and game history.
			</p>
			<p>
				Feeling bored or want a change of pace? Try out our secondary game: 
				<br>Tic-Tac-Toe
			</p>
		</div>
	`; 

	return html`
		<!-- About Page Layout -->
		<div class="bg-gray-100 h-full text-gray-700">

			<!-- Header ------------------------------------------------------------------>
			<div class="bg-gray-950 text-white px-12 flex items-center justify-between">
				<span class="text-3xl font-bold">About</span>
				<img class="h-20 object-cover" src="../asset/42-KL.png" alt="42-KL">
			</div>

			<!-- Middle content ----------------------------------------------------------->
			<div class="py-16 px-32 grid grid-cols-12 gap-12 items-center">
				<!-- Project Description -->
				${projectDescription}
				<!-- Frontend Tech** -->
				${techStack("Frontend", iconList.slice(0, 3), techList.slice(0, 3))}
				<!-- Backend Tech** -->
				${techStack("Backend", iconList.slice(3), techList.slice(3))}

			</div>

			<!-- Team Members ------------------------------------------------------------->
			<div class="text-center text-3xl font-bold pb-10">Team members</div>
			
			<div class=" px-32 flex justify-center items-center gap-20">
				${teamMember("Adya", "abinti-a", "../asset/abinti-a.jpg")}	
				${teamMember("Chee Kit", "cheelim", "../asset/cheelim.jpg")}
				${teamMember("Jason", "jpaul", "../asset/jpaul.jpg")}
				${teamMember("Rui Sheng", "rng", "../asset/rng.jpg")}
			</div>

		</div>
		`
}
