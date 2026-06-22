const express = require("express");
const router = express.Router();

const prisma = require("../prisma/prismaClient");

router.post("/", async (req, res) => {
  try {
    const {
      ownerId,
      name,
      description,
      city,
      experienceYears,
      profileImage,
    } = req.body;
    const existingBoutique = await prisma.boutique.findUnique({
  where: {
    ownerId,
  },
});

if (existingBoutique) {
  return res.status(400).json({
    message: "Boutique already exists for this owner",
  });
}
    const boutique = await prisma.boutique.create({
      data: {
        ownerId,
        name,
        description,
        city,
        experienceYears,
        profileImage,
      },
    });

    res.status(201).json(boutique);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create boutique",
      error: error.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const boutiques = await prisma.boutique.findMany();

    res.json(boutiques);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const boutique = await prisma.boutique.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        portfolioItems: true,
      },
    });

    res.json(boutique);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const boutique = await prisma.boutique.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });

    res.json(boutique);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;