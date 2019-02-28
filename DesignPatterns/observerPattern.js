function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribe to ${fn.name}`)
    },
    unsubscribe: function(fn) {
        // Filter out from the list whatever the callback function. if there is no match , the callback gets to stay on the list. The filter returns a new list and reassigns the list  of observers.
        this.observers = this.observers.filter(function(item) {
            if (item != fn) {
                return item;
            }
        })

        console.log(`You are now unsubscribed from ${fn.name}`)
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        })
    }
}

const click = new EventObserver();


//
document.querySelector('.sub-ms').addEventListener('click', function(event) {
    click.subscribe(getCurMilliseconds);
})

document.querySelector('.unsub-ms').addEventListener('click', function(event) {
    click.unsubscribe(getCurMilliseconds);
})

document.querySelector('.fire').addEventListener('click', function(event) {
    click.fire();
})


//click handler
const getCurMilliseconds = function() {
    console.log(`current milliseconds: ${Date.now()}`)
}