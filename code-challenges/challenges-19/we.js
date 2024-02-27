let s='hackerhappy'
let k='hackerrank'
let l=9
let split =s.split("");
let split1=k.split("")
let count=0;
console.log(split1);
for(let i=0;i<split.length;i++){
    if(split[i]!==split1[i]){
        split.pop()
        count++        
    }
}
console.log(count);