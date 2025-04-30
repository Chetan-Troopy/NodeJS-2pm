# Database

<!-- Ryan Dahl => C++ combine with V8 Engine => Node JS -->

node js --------Runtime Environment of JavaScript on Server side
Express jS-------JavaScript Framework

Database--------to Store Data (SQl, NoSQL)

<!-- JavaScript -> Frontend (Vanilla JS -> Pure JavaScript)  +  Backend (Node js) -->

Frontend -> Library and Framework (For Easy Coding) => PRedifined code
(

    React =>useState = const [state, setState] = useState(initialValue)

Behind The UseState a Very Long Logical Code is Already Written using JavaScipt

 <!-- Here it is -->

let stateArray = [];
let index = 0;

function useState(initialValue) {
const currentIndex = index;

// Initialize state at this index if not already set
if (stateArray[currentIndex] === undefined) {
stateArray[currentIndex] = initialValue;
}

// Closure to capture the index for setState
const setState = (newValue) => {
stateArray[currentIndex] = newValue;
rerender(); // simulate re-render
};

index++;
return [stateArray[currentIndex], setState];
}

function rerender() {
index = 0;
// Call your component function here again to simulate re-render
MyComponent(); // example
}

sort()
reverse()

    for(let i = arr.length; i =0; i--){
        console.log(i)
    }

// Output => Reverse Order

)

Core Language -> They Are Difficult to write (Long Code )
