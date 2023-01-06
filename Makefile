NAME := apito_backend

deps:


lint:


vet:


run:


test:


imports:


build:


api:

watch:


dbclean:
	PGPASSWORD=${DATABASE_PASSWORD} psql -U apito -d apito_development -a -f ops/sql/clean.sql
