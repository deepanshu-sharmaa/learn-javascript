function x(){
    for(var i = 1; i <= 5; i++){
        function close(a){
            setTimeout(function() {
                console.log(a)
            }, a*1000);
        }
        close(i)
    }
    console.log("Namaste js")
}

x();