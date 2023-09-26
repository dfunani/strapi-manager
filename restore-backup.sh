docker exec -i postgres-db pg_restore -Fc -c -U postgres -d strapipostgres < backups/$1
