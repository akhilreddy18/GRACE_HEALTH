THIS_FILE := $(lastword $(MAKEFILE_LIST))
.PHONY: build up serve

build:
	docker-compose -f docker-compose.yml build
up:
	docker-compose -f docker-compose.yml up -d
serve:
	node football/app.js
