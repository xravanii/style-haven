const express = require("express");
const router = express.Router();

const prisma = require("../prisma/prismaClient");

// Create Request
router.post("/", async (req, res) => {
  try {
    const {
      customerId,
      title,
      description,
      budgetMin,
      budgetMax
    } = req.body;

    const request = await prisma.customRequest.create({
      data: {
        customerId,
        title,
        description,
        budgetMin,
        budgetMax
      }
    });

    res.status(201).json(request);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: error.message
    });
  }
});

// Get all requests
router.get("/", async (req, res) => {
  try {
    const requests = await prisma.customRequest.findMany();

    res.json(requests);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// IMPORTANT: customer route BEFORE :id route
router.get("/customer/:customerId", async (req, res) => {
  try {
    const requests = await prisma.customRequest.findMany({
  where: {
    customerId: req.params.customerId,
  },
  include: {
    responses: true,
  },
});

    res.json(requests);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Get request by id
router.get("/:id", async (req, res) => {
  try {
    const request = await prisma.customRequest.findUnique({
      where: {
        id: req.params.id,
      },
      include: {
        images: true,
        responses: {
          include: {
            boutique: true,
          },
        },
      },
    });

    res.json(request);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Add image to request
router.post("/:requestId/images", async (req, res) => {
  try {
    const image = await prisma.requestImage.create({
      data: {
        requestId: req.params.requestId,
        imageUrl: req.body.imageUrl,
      },
    });

    res.status(201).json(image);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.patch("/:id/accept", async (req, res) => {
  try {
    const { responseId } = req.body;

    const request = await prisma.customRequest.update({
      where: {
        id: req.params.id,
      },
      data: {
        status: "CLOSED",
        selectedResponseId: responseId,
      },
    });

    res.json(request);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;