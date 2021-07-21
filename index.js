function hi(){

}
function a(){
    console.log("what up")
}

function receivesAFunction(hi){
    hi();
}

receivesAFunction(a);


function returnsANamedFunction(){
   return a;
}

function returnsAnAnonymousFunction(){
    return () => console.log("we got this!")
}