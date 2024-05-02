import {DataSource, Repository} from "typeorm";
import {Controller} from "../decorator/Controller";
import {Get} from "../decorator/Get";
import {RouteController} from "../config/types";
import {Party} from "../entity/Party";
import {Request} from "express";

@Controller("/party")
export class PartyController implements RouteController<Party> {
	repository: Repository<Party>;

	constructor(appDataSource: DataSource) {
		this.repository = appDataSource.getRepository(Party);
	}

	@Get("/")
	async all() {
		return this.repository.find();
	}

	@Get("/:category")
	async category(req: Request) {
		const category = req.params.category;
		return this.repository.find({
			where: {
				category,
			},
		});
	}
}
