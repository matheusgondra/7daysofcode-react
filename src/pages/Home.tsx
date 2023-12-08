import { Link } from "react-router-dom";

export function Home() {
	return (
		<div className="flex h-screen justify-center items-center flex-col gap-3">
			<h1 className="text-3xl font-bold text-blue-400">7 Days of Code - React</h1>
			<Link to="/cadastro" className="w-64 bg-blue-600 rounded text-center p-2 text-white">
				Cadastro
			</Link>
		</div>
	);
}
