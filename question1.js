/**  
There is an array, each item has such format: 
{firstName: 'xxx', lastName: 'xxx', customerID: 'xxx', note: 'xxx', 
profession: ‘xxx’} 
lastName, note can be empty, customerID can only be a set of digital 
numbers. 
profession can only have ‘student’, ‘freelancer’, ‘productOwner’, 
‘engineer’ or ‘systemAnalytics’. 
**/
const userArray = [
  {
    firstName: "John",
    lastName: "Doe",
    customerID: "1",
    note: "",
    profession: "engineer",
  },
  {
    firstName: "Anna",
    lastName: "",
    customerID: "2",
    note: "Important",
    profession: "student",
  },
  {
    firstName: "Bob",
    lastName: "Smith",
    customerID: "3",
    note: "VIP",
    profession: "freelancer",
  },
  {
    firstName: "Jane",
    lastName: "Chen",
    customerID: "8",
    note: "",
    profession: "systemAnalytics",
  },
];

/**  
Q1. Please follow the principle (‘firstName’ + ‘lastName’ + ‘customerID’) to sort this array and print it out. 
**/

function sortUserName(user) {
  user.sort((a, b) => {
    if (a.firstName !== b.firstName) {
      return a.firstName.localeCompare(b.firstName);
    }
    if (a.lastName !== b.lastName) {
      return a.lastName.localeCompare(b.lastName);
    }
    if (a.customerID !== b.customerID) {
      return parseInt(a.customerID) - parseInt(b.customerID);
    }
  });
  console.log(user);
}

/**  
Q2. Please sort by ‘profession’ to follow the principle.  (‘systemAnalytics’ > ‘engineer’ > ‘productOwner’ > ‘freelancer’ > ‘student’’) 
**/

function sortByType(user) {
  const professionItem = {
    systemAnalytics: 1,
    engineer: 2,
    productOwner: 3,
    freelancer: 4,
    student: 5,
  };

  user.sort((a, b) => {
    return professionItem[a.profession] - professionItem[b.profession];
  });
  console.log(user);
}

sortUserName(userArray);
sortByType(userArray);
