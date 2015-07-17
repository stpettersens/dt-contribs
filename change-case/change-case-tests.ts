/// <require path="change-case.d.ts" />

import changeCase = require('change-case');


console.log(changeCase.isUpperCase('STRING')); 
console.log(changeCase.isUpperCase('String')); 
console.log(changeCase.isUpperCase('string')); 


console.log(changeCase.isLowerCase('string')); 
console.log(changeCase.isLowerCase('String')); 
console.log(changeCase.isLowerCase('STRING')); 


console.log(changeCase.upperCase(null));       	 
console.log(changeCase.upperCase('string'));  	 
console.log(changeCase.upperCase('string', 'tr'));	 
console.log(changeCase.upperCase({ toString: function() { return 'test' } })); 


console.log(changeCase.upperCaseFirst(null));     
console.log(changeCase.upperCaseFirst('string')); 


console.log(changeCase.lowerCaseFirst(null));     
console.log(changeCase.lowerCaseFirst('STRING')); 


console.log(changeCase.lowerCase(null));       	 
console.log(changeCase.lowerCase('STRING'));  	 
console.log(changeCase.lowerCase('string', 'tr'));	 
console.log(changeCase.lowerCase({ toString: function() { return 'TEST' } })); 


console.log(changeCase.sentenceCase(null)); 		
console.log(changeCase.sentenceCase('string'));		
console.log(changeCase.sentenceCase('dot.case'));		
console.log(changeCase.sentenceCase('camelCase'));		
console.log(changeCase.sentenceCase('Beyoncé Knowles'));	
console.log(changeCase.sentenceCase('A STRING', 'tr'));	
console.log(changeCase.sentenceCase('HELLO WORLD!', null, '_')); 


console.log(changeCase.titleCase('string')); 	
console.log(changeCase.titleCase('PascalCase'));	
console.log(changeCase.titleCase('STRING', 'tr'));	


console.log(changeCase.camelCase('string')); 	  
console.log(changeCase.camelCase('dot.case'));	  
console.log(changeCase.camelCase('PascalCase'));	  
console.log(changeCase.camelCase('version 1.2.10')); 
console.log(changeCase.camelCase('STRING 1.2', 'tr')); 


console.log(changeCase.pascalCase('string')); 	   
console.log(changeCase.pascalCase('camelCase'));	   
console.log(changeCase.pascalCase('sentence case'));  
console.log(changeCase.pascalCase('MY STRING', 'tr')); 


console.log(changeCase.camelCase('string')); 	  
console.log(changeCase.camelCase('camelCase'));	  
console.log(changeCase.camelCase('sentence case'));  
console.log(changeCase.camelCase('MY STRING', 'tr')); 


console.log(changeCase.paramCase('string')); 	  
console.log(changeCase.paramCase('camelCase'));	  
console.log(changeCase.paramCase('sentence case'));  
console.log(changeCase.paramCase('MY STRING', 'tr')); 


console.log(changeCase.dotCase('string')); 	 
console.log(changeCase.dotCase('camelCase'));	 
console.log(changeCase.dotCase('sentence case'));   
console.log(changeCase.dotCase('MY STRING', 'tr')); 


console.log(changeCase.pathCase('string')); 	 
console.log(changeCase.pathCase('camelCase'));	 
console.log(changeCase.pathCase('sentence case'));  
console.log(changeCase.pathCase('MY STRING', 'tr')); 


console.log(changeCase.constantCase('string')); 	     
console.log(changeCase.constantCase('PascalCase'));     
console.log(changeCase.constantCase('myString', 'tr')); 


console.log(changeCase.swapCase(null));		
console.log(changeCase.swapCase('string')); 	
console.log(changeCase.swapCase('PascalCase'));	
console.log(changeCase.swapCase('Iñtërnâtiônàlizætiøn')); 
console.log(changeCase.swapCase('My String', 'tr')); 
