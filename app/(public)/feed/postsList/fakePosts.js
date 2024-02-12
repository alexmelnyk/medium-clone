import { faker } from "@faker-js/faker";

const POSTS_NUMBER = 10;
const posts = [];

for (let i = 0; i < POSTS_NUMBER; i++) {
  posts.push({
    id: faker.string.uuid(),
    title: faker.lorem.sentence({ min: 4, max: 10 }),
    body: faker.lorem.paragraph(10),
    author: faker.person.fullName(),
    avatar: faker.image.avatar(),
    tags: ["React", "Java"],
    coverImage: faker.image.url(),
    createdAt: faker.date.past(),
  });
}

export default posts;
