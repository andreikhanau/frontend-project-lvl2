install:  
	npm install

publish:
	npm publish --dry-run

link:	 
	npm link	

lint:
	npx eslint .

test:    
	npm run test

test-coverage: 
	npx -n --experimental-vm-modules jest --coverage --coverageProvider=v8