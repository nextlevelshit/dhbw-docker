

# Development

## Run services in interactive mode

```bash
docker compose -p "dhbw-docker-app" \
    -f compose.yml \
    --env-file .env \
    up \
    --build \
    --remove-orphans \
    --force-recreate
```