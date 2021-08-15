build:
	tsc

dev:
	tsc -watch

start:
	cd test-builds/next-ts && npm run dev