import { Router } from "express";
import { generateUsers } from "../utils/mocking.utils.js";
import UserModel from "../dao/models/user.model.js";
import PetModel from "../dao/models/pet.model.js";
import { faker } from "@faker-js/faker";

const router = Router();

router.get("/mockingpets", (req, res) => {
  const pets = [];
  for (let i = 0; i < 50; i++) {
    pets.push({
      name: faker.animal.cat(),
      species: "cat",
      age: faker.number.int({ min: 1, max: 15 }),
    });
  }
  res.json({ status: "success", payload: pets });
});

router.get("/mockingusers", async (req, res) => {
  const users = await generateUsers(50);
  res.json({ status: "success", payload: users });
});

router.post("/generateData", async (req, res) => {
  const { users = 0, pets = 0 } = req.body;
  const newUsers = await generateUsers(Number(users));
  const newPets = [];
  for (let i = 0; i < pets; i++) {
    newPets.push({
      name: faker.animal.dog(),
      species: "dog",
      age: faker.number.int({ min: 1, max: 20 }),
    });
  }
  const insertedUsers = await UserModel.insertMany(newUsers);
  const insertedPets = await PetModel.insertMany(newPets);
  res.json({
    status: "success",
    insertedUsers: insertedUsers.length,
    insertedPets: insertedPets.length
  });
});

export default router;
