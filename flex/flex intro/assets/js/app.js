let cl = console.log;

// function printRange(n,m){
//     while(n <= m){
//         if(n <= m){
//             cl(n);
//             n++
//         }
//     }
// }

function printRange(n,m){
    if(n <= m){
        cl(n);
        n++;
        printRange(n,m)
    }
}
printRange(1,10);
(function printNo(n,m){
    if(n <= m){
        cl(n);
        n++;
        printNo(n,m);
    }
}(1,10));