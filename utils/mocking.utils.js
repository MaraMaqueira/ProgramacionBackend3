import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export const generateUsers = async (num) => {
  const users = [];
  const hashedPassword = await bcrypt.hash("coder123", 10);
  for (let i = 0; i < num; i++) {
    users.push({
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(["user", "admin"]),
      pets: []
    });
  }
  return users;
};
