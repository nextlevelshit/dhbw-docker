import {MigrationInterface, QueryRunner} from "typeorm";
import {fakerDE as faker} from "@faker-js/faker";
import {Party} from "../entity/Party";

function createParty(): Partial<Party> {
	const category = faker.helpers.arrayElement(["techno", "dnb", "student", "hiphop", "rock", "jazz", "pop", "metal", "indie", "reggae"]);

	return {
		category,
		date: faker.date.soon().toString().split("T")[0],
		location: faker.location.city(),
		name: (`${faker.word.adjective()} ${category} Party`).toUpperCase(),
		time: faker.helpers.arrayElement(["20:00", "18:00", "22:00", "19:00", "21:00", "23:59"]),
	};
}

export class SeedFakeParties0000000000100 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const partyRepository = queryRunner.connection.getRepository(Party);
		const partys = faker.helpers.multiple(createParty, {
			count: 1_000,
		});
		await partyRepository.insert(partys);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const partyRepository = queryRunner.connection.getRepository(Party);
		await partyRepository.delete({});
	}
}
