.PHONY: dev dev\:up dev\:down \
    query \
    migration\:create migration\:generate migration\:revert migration\:run migration\:list


dev:
	docker-compose -p "dhbw-docker-app" \
		-f compose.yml \
		--env-file .env \
		up \
		--build \
		--remove-orphans \
		--force-recreate

dev\:up:
	docker-compose -p "dhbw-docker-app" \
		-f compose.yml \
		--env-file .env \
		up \
		-d \
		--build \
		--remove-orphans \
		--force-recreate

dev\:down:
	docker-compose -p "dhbw-docker-app" down

query:
	@docker exec dhbw-api npm run typeorm query "$(filter-out $@,$(MAKECMDGOALS))" -- -d src/AppDataSource.ts

migration\:create:
	@docker exec dhbw-api npm run typeorm migration:create src/migration/$(filter-out $@,$(MAKECMDGOALS))

migration\:generate:
	@docker exec dhbw-api npm run typeorm migration:generate src/migration/$(filter-out $@,$(MAKECMDGOALS)) -- -d src/AppDataSource.ts

migration\:revert:
	docker exec dhbw-api npm run typeorm migration:revert -- -d src/AppDataSource.ts

migration\:run:
	docker exec dhbw-api npm run typeorm migration:run -- -d src/AppDataSource.ts

migration\:list:
	docker exec dhbw-api npm run typeorm migration:show -- -d src/AppDataSource.ts

help:
	@echo ""
	@echo "============================================================"
	@echo "DHBW Docker App"
	@echo "============================================================"
	@echo ""
	@echo "Available targets:"
	@echo "  dev              		: Start containers for development"
	@echo "  dev:up          		: Start containers for development in the background"
	@echo "  dev:down        		: Stop and remove development containers"
	@echo "  query            		: Execute a TypeORM query"
	@echo "  migration:create 		: Create a new TypeORM migration"
	@echo "  migration:generate		: Generate a TypeORM migration from changes in the entities"
	@echo "  migration:revert 		: Revert the last TypeORM migration"
	@echo "  migration:run    		: Run pending TypeORM migrations"
	@echo "  migration:list   		: Show a list of applied TypeORM migrations"
	@echo "  help             		: Show this help message"