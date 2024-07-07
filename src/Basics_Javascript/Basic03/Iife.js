// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( ()=> {
    console.log(`DB DISCONNECTED ${name}` );
} )("Indian Army Lieutenant Mobashir");

// Arrow Function : ()=>