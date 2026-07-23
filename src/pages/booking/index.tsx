import { SearchIcon } from "lucide-react";
import { Header } from "../../componens/header";
import { Table } from "../../componens/table/table";
import { TableHeader } from "../../componens/table/table-header";

export function Booking() {
	return (
		<>
			<Header />
			<main className="flex flex-col mt-16 px-9 w-full">
				<section className="flex items-center justify-between w-full">
					<div className="flex items-center gap-8 ">
						<h2 className="font-bold text-2xl">Agendamentos</h2>
						<button
							type="button"
							className="bg-blue-600 hover:bg-blue-700 transition-colors duration-500 rounded-md w-44 h-[46px] cursor-pointer text-sm flex items-center justify-center px-2 py-4"
						>
							Novo Agendamento
						</button>
					</div>
					<div className="flex items-center space-x-11">
						<div className="space-x-2">
							<input
								type="date"
								className="bg-zinc-700 w-40 h-[46px] px-2 py-4 rounded-md"
							/>
							<span className="text-sm w-8 h-6">até</span>
							<input
								type="date"
								className="bg-zinc-700 w-40 h-[46px] px-2 py-4 rounded-md"
							/>
						</div>
						<div>
							<div className="flex items-center gap-5">
								<div className="bg-zinc-700 w-40 h-[46px] px-2 py-4 rounded-md flex items-center gap-1">
									<SearchIcon className="size-5" />
									<input
										type="search"
										placeholder="procurar"
										className="w-full placeholder:text-zinc-500 placeholder:text-sm focus:ring-0 outline-none"
									/>
								</div>
								<button
									type="button"
									className="bg-blue-600 hover:bg-blue-800 transition-colors duration-150 w-[86px] h-11 rounded-md"
								>
									filtrar
								</button>
							</div>
						</div>
					</div>
				</section>
				<div className="mt-12">
					<Table>
						<thead>
							<tr>
								<TableHeader>Paciente</TableHeader>
								<TableHeader>Médico</TableHeader>
								<TableHeader>Serviço</TableHeader>
								<TableHeader>Data/Hora</TableHeader>
								<TableHeader>Valor</TableHeader>
								<TableHeader style={{ width: 64 }}></TableHeader>
							</tr>
						</thead>
					</Table>
				</div>
			</main>
		</>
	);
}
