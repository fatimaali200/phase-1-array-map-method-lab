const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = ()=>{
  return(
    tutorials.map(array => {
    const splitedArray = array.split(" ");
    const capitalizedWords = splitedArray.map(x=> x[0].toUpperCase()+ x.substring(1))
    return capitalizedWords.join(" ")})
  )
}
console.log(titleCased());
