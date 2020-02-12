class Pool {
  constructor(max_size) {
    this.max = max_size;
    this.arr = [];
    this.free = max_size;
  }

  hasPlace() {
    return this.free != 0;
  }

  place(data){
      if(this.hasPlace()){
          this.free--;
          this.arr.push(data);
      }else{
          console.log("There is no space")
      }
  }

  empty(index){
    this.arr.splice(index, 1);
    this.free++;
    console.log("Element with index " + index + " was deleed")
  }

}

let p = new Pool(10);

console.log( p.arr );

for(let i = 0; i < p.max; i++){
    p.place("data");
}

console.log( "Size - " + p.arr.length);
console.log("Arr - " + p.arr + "\n");

p.place("another data");

p.empty(9)

console.log( "Size - " + p.arr.length);
console.log("Arr - " + p.arr + "\n");

p.place("another data");

console.log( "Size - " + p.arr.length);
console.log("Arr - " + p.arr + "\n");