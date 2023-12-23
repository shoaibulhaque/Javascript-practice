var createCounter = function(init) {
    let original_init = init;
    let current_val = init;
    const counter = {
        increment: function() {
          console.log("working");
            return current_val += 1;
        },
        decrement: function() {
            return current_val -=1;
        },
        reset: function(){
            return current_val = original_init;
        }
    }
    return counter;
    
};

const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());