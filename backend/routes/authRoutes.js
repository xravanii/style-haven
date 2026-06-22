const express = require("express");
const router = express.Router();

const prisma = require("../prisma/prismaClient");

router.post("/login", async (req, res) => {
  try {
    const {
      firebaseUid,
      email,
      name
    } = req.body;

    let user = await prisma.user.findUnique({
      where: {
        firebaseUid,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          firebaseUid,
          email,
          name,
        },
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/role", async (req, res) => {
  try {
    const { userId, role } = req.body;

    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        role,
      },
    });

    res.json(user);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;