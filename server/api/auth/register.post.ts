import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const userExists = await prisma.users.findFirst({
        where: { 
            OR: [
                { email: body.email },
                { name: body.name }
            ]
        }
    });

    if(userExists) {
        throw createError({
          statusCode: 403,
          statusMessage: "User already exists",
        });
    }

    const user = await prisma.users.create({
        data: {
          email: body.email,
          name: body.name,
          password: await hash(body.password, 12)
        },
    })

    return { status: 201, message: "User created" };
});

