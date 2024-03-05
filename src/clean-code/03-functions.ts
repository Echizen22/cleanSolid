(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie {
        cast:          string[];
        descripcition: string;
        rating:        number;
        title:         string;
    }
    function createMovie( { title, descripcition, rating, cast }: Movie ) {
        console.log({ title, descripcition, rating, cast });
    }


    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    // Continuar 
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        
        if ( isDead ) return 1500;
        
        if ( isSeparated ) return 2500;

        return ( isRetired ) ? 3000 : 4000;

    }
    


})();




