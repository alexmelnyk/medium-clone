import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getFakePost = (userId) => {
  return {
    title: faker.lorem.sentence({ min: 4, max: 10 }),
    coverImage: faker.image.url(),
    content: faker.lorem.paragraphs(10),
    createdAt: faker.date.past(),
    userId,
  };
};

const createUserWithPosts = async (postsCount = 10) => {
  const user = await prisma.user.create({
    data: {
      name: "John Snow",
      email: "johnSnow@google.com",
      image: faker.image.avatar(),
    },
  });

  const userId = user.id;
  const posts = [];
  for (let i = 0; i < postsCount; i++) {
    const post = await prisma.post.create({
      data: getFakePost(userId),
    });
    posts.push(post);
  }

  return {
    user,
    posts,
  };
};

async function main() {
  console.log("start");
  const data = await createUserWithPosts(20);
  console.log(data);
  console.log("end");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
