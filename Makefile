build:
	tsc

dev:
	tsc -watch

clean:
	rm -rf node_modules
	rm -rf package-lock.json
	rm -rf test-builds/next-app/.next
	rm -rf test-builds/next-app-tw/.next