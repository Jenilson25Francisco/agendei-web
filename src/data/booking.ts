import { faker } from "@faker-js/faker";

export const booking = Array.from({ length: 100 }).map(() => {
	return {
		id: faker.number.bigInt(),
		paciente: faker.person.fullName(),
		doctor: faker.person.fullName(),
		servico: faker.lorem.word(),
		data: faker.date.birthdate(),
		valor: faker.finance.currency(),
	};
});
