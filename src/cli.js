import { program } from "commander";

export function init (args){

    program       
        .name('weather')
        .description('CLI to get current weather by city or zip code')
        .version('1.0.0');        

    program
        .command('token <token>')        
        .action( (token) => {
            console.log(token)            
        })
    program
        .command('cep <cep>')        
        .action( (cep ) => {
            console.log(cep)            
        })
    program
        .command('city <city>')        
        .action( (city ) => {
            console.log(city)            
        })

    program.parse(args);
}