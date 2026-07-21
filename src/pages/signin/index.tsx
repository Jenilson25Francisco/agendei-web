import { LockIcon, MailIcon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "../../componens/button";
import { Input } from "../../componens/input";

export function Signin() {
	return (
		<main className="min-h-screen grid grid-cols-2">
			<section className="w-full mt-16 px-20">
				<div className="flex flex-col justify-center space-y-32">
					<div className="space-y-11 flex flex-col justify-center items-center">
						<img
							src="/logo.png"
							alt="logotipo do site"
							width={165}
							height={38}
						/>
						<h1 className="font-bold text-2xl text-zinc-300 text-center">
							Gerencie seus agendamentos <br /> de forma descomplicada.
						</h1>
					</div>

					<form className="space-y-6 w-full flex flex-col">
						<h2 className="font-normal text-2xl text-center">
							Acesse sua conta
						</h2>
						<div className="space-y-5">
							<div className="flex items-center px-2 gap-1 bg-zinc-900 w-full rounded-lg space-x-1">
								<MailIcon className="size-4 text-zinc-50" />
								<Input type="email" placeholder="Digite o seu e-mail" />
							</div>
							<div className="flex items-center px-2 gap-1 bg-zinc-900 w-full rounded-lg space-x-1">
								<LockIcon className="size-4 text-zinc-50" />
								<Input type="password" placeholder="Digite a sua senha" />
							</div>
							<Button title="Acessar" />
						</div>
					</form>

					<span className="mt-auto mb-12 text-center text-base">
						Não tenho conta.{" "}
						<Link to="/signup" className="text-blue-700">
							Criar uma!
						</Link>
					</span>
				</div>
			</section>
			<section className="w-full overflow-hidden">
				<img src="/fundo.png" alt="imagem de fundo" />
			</section>
		</main>
	);
}
