// test.js

const prisma = require("./prisma/prismaClient");

async function test() {
  const count = await prisma.boutique.count();
  console.log(count);
}

test();