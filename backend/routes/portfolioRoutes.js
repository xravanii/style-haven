const express = require("express");
const router = express.Router();

const prisma = require("../prisma/prismaClient");

router.post("/", async (req, res) => {
  try {
    const {
      boutiqueId,
      title,
      description,
      imageUrl,
      category
    } = req.body;

    const portfolioItem = await prisma.portfolioItem.create({
      data: {
        boutiqueId,
        title,
        description,
        imageUrl,
        category
      }
    });

    res.status(201).json(portfolioItem);

  } catch (error) {
  console.error("FULL ERROR:", error);

  res.status(500).json({
    message: error.message,
    code: error.code,
    meta: error.meta
  });
}
});

router.get("/:boutiqueId", async (req, res) => {
  try {
    const items = await prisma.portfolioItem.findMany({
      where: {
        boutiqueId: req.params.boutiqueId,
      },
    });

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;