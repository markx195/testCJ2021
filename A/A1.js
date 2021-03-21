let A1 = [1,2,'a'];
let A2 = [1,3,'b'];
const A = A1.concat(A2);

// var Afitler = A.filter((item, index) => A.indexOf(item) === index);

for(i=0; i<A.length;i++){
    for(k=i+1;k<A.length;k++){
        if(A[i] == A[k]){
            A.splice(i,1)
            A.splice(k-1,1)
        }
    }
}

console.log(A)