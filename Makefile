build:
	tsc

dev:
	tsc -watch

start:
	cd test-builds/next-app && npm run dev