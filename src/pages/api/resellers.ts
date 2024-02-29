// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

export interface Reseller {
  _id: string;
  name: string;
  phone: string;
  createdAt: string;
  acceptanceOfTerms: string;
  biometrics: string;
  status: string;
}

function getRandomAcceptanceOfTerms() {
  const acceptanceOfTerms = [
    "Pendiente",
    "No aceptado",
    "Aceptado",
    "Dados eliminados",
  ];
  return acceptanceOfTerms[
    Math.floor(Math.random() * acceptanceOfTerms.length)
  ];
}

function getRandomBiometrics() {
  const biometrics = ["-", "Pendiente", "Completo", "No es elegible"];
  return biometrics[Math.floor(Math.random() * biometrics.length)];
}

function getRandomStatus() {
  const status = [
    "Pendiente",
    "Em revisón",
    "Completo",
    "Em transasón",
    "Recadastro",
  ];
  return status[Math.floor(Math.random() * status.length)];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Reseller[]>
) {
  let resellers = [];
  for (let i = 0; i < 100; i++) {
    resellers.push({
      _id: faker.database.mongodbObjectId(),
      name: faker.person.fullName(),
      phone: faker.phone.number("+571#######"),
      createdAt: faker.date
        .between({
          from: "2020-01-01T00:00:00.000Z",
          to: "2024-02-28T00:00:00.000Z",
        })
        .toISOString(),
      acceptanceOfTerms: getRandomAcceptanceOfTerms(),
      biometrics: getRandomBiometrics(),
      status: getRandomStatus(),
    });
  }
  res.status(200).json(resellers);
}
