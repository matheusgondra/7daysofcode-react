export function Register() {
	return (
		<div className="flex justify-center items-center h-screen flex-col font-roboto bg-white">
			<h1 className="text-[#0EA5E9] text-[28px] mb-6">Aluritter</h1>
			<form className="flex flex-col gap-[10px] w-[378px]">
				<input
					className="border border-[#94A3B8] text-[#94A3B8] rounded px-2 pb-[14px] pt-2 w-full outline-[#94A3B8]"
					type="email"
					placeholder="email@exemplo.com"
				/>
				<input
					className="border border-[#94A3B8] text-[#94A3B8] rounded px-2 pb-[14px] pt-2 w-full outline-[#94A3B8]"
					type="password"
					placeholder="Senha"
				/>
				<button
					type="submit"
					className="text-[#F1F5F9] bg-[#10B981] rounded w-full pt-1 pb-3 mt-7 outline-[#10B981]"
				>
					Criar uma nova conta
				</button>
			</form>
			<span className="text-[#6B7280] text-sm mt-1">
				Já possui uma conta?{" "}
				<a href="#" className="text-[#0EA5E9]">
					Acesse agora!
				</a>
			</span>
		</div>
	);
}
