build:
	tsc

dev:
	tsc -watch

start:
	cd test-builds/next-app && npm run dev

clean:
	rm -rf node_modules
	rm package-lock.json
	rm -rf test-builds/next-app/.next