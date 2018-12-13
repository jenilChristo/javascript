const array = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];

// combine them so that people with same skill are grouped together along with count.
// So result should be

// [
//   { skill: 'css', users: [ 'Bill', 'Sue' ], count: 2 },
//   { skill: 'javascript', users: [ 'Chad', 'Bill', 'Sue' ], count: 3 },
//   { skill: 'html', users: [ 'Sue' ], count: 1 }
// ]
const newArr = [];
const skill = [];

array.reduce((acc, currentVal, currentInd, arr) => {

  if (currentInd === 1) {
    skill.push(acc.skill);
    newArr.push({ skill: acc.skill, users: [acc.user], count: 1 })
  }

  if (!skill.includes(currentVal.skill)) {
    skill.push(currentVal.skill);
    newArr.push({ skill: currentVal.skill, users: [currentVal.user], count: 1 })
  } else {
    newArr.find(obj => (obj.skill === currentVal.skill)).users.push(currentVal.user);
    newArr.find(obj => (obj.skill === currentVal.skill)).count++;
  }

});
console.log(JSON.stringify(newArr))