.POSIX:
APP_NAME=Review-MobileApp
.DEFAULT_GOAL := help
cat := $(if $(filter $(OS),Windows_NT),type,cat)
TAG_VERSION := $(shell $(cat) version)

help:
	@echo "Usage: make [OPTION]"
	@echo "App build helpers that can be used for TESTING, BUILDING, DEPLOYING, ..."
	@echo " "
	@echo "=> DEVELOPMENT"
	@echo "	build                  Builds ${APP_NAME} application. (Development)"
	@echo "	start                  Starts ${APP_NAME} application and listens for changes (IONIC)"
	@echo "	watch                  Watches for changes on ${APP_NAME} application and rebuilds if needed. (IONIC)"


# DEVELOPMENT
.PHONY: build
build:
	@echo "🍳 Building $(APP_NAME)"
	ionic build

.PHONY: watch
watch:
	@echo "🍳 Building and Watching for changes on $(APP_NAME)"
	ionic build --watch

.PHONY: start
start:
	@echo "🍳 Serving IONIC $(APP_NAME) on localhost:8080"
	ionic serve --external -p 8080
