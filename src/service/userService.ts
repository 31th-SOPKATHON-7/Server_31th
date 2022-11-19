import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//유저 조회
const getUser = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });

  return user;
};

const userService = {
  getUser,
};

export default userService;