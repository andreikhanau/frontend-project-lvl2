install:  
		 
		 npm install

publish:
		 
		 npm publish --dry-run

link:	 
		 
		 npm link	

lint:

		 npx eslint .

test:    
		 
		 npx -n --experimental-vm-modules jest

test-coverage: 

		 npx -n --experimental-vm-modules jest --coverage --coverageProvider=v8