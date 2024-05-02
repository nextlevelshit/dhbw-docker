import {MigrationInterface, QueryRunner} from "typeorm";
import {fakerDE as faker} from "@faker-js/faker";
import {User} from "../entity/User";

function createUser(): Partial<User> {
	return {
		firstName: faker.person.firstName(),
		lastName: faker.person.lastName(),
		age: faker.number.int({min: 18, max: 65}),
	};
}

export class SeedFakeUsers0000000000100 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		const userRepository = queryRunner.connection.getRepository(User);
		const users = faker.helpers.multiple(createUser, {
			count: 100,
		});
		await userRepository.insert(users);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		const userRepository = queryRunner.connection.getRepository(User);
		await userRepository.delete({});
	}
}
