const express = require("express");
const router = express.Router();

const prisma = require("../prisma/prismaClient");

router.post("/", async (req, res) => {
  try {
    const {
      requestId,
      boutiqueId,
      feasibility,
      estimatedPrice,
      comment,
      deliveryDays
    } = req.body;
    const request = await prisma.customRequest.findUnique({
      where: {
        id: requestId,
      },
    });

    if (request.status === "CLOSED") {
      return res.status(400).json({
        message: "Request already closed",
      });
    }
    const response = await prisma.requestResponse.create({
      data: {
        requestId,
        boutiqueId,
        feasibility,
        estimatedPrice,
        comment,
        deliveryDays
      }
    });
      await prisma.customRequest.update({
        where: {
          id: requestId,
        },
        data: {
          status: "RESPONDED",
        },
      });

    res.status(201).json(response);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/request/:requestId", async (req, res) => {
  try {
    const responses = await prisma.requestResponse.findMany({
      where: {
        requestId: req.params.requestId,
      },
      include: {
        boutique: true,
      },
    });

    res.json(responses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;