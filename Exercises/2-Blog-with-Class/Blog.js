const Author = require("./Author");

const john = new Author('John Doe')

const post = john.writePost('Something','Some things...')

post.addComment('Mary','awesome post')






console.log(john)
