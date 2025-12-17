// Intake Controller
// Kenapa dipisah dari routes? Supaya business logic terpisah dari routing
// Controller = Handle request/response + business logic

const prisma = require('../db/prisma');

/**
 * @route   POST /api/intake
 * @desc    Submit intake form (PUBLIC - No auth)
 * @access  Public
 */
const submitIntake = async (req, res, next) => {
  try {
    const {
      name,
      email,
      phone,
      serviceInquiry,
      message,
      budgetRange,
      attachmentUrl,
    } = req.body;

    // Validation
    if (!name || !email || !phone || !serviceInquiry || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields',
        required: ['name', 'email', 'phone', 'serviceInquiry', 'message'],
      });
    }

    // Email validation (simple)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format',
      });
    }

    // Create intake submission
    const intake = await prisma.intakeSubmission.create({
      data: {
        name,
        email,
        phone,
        serviceInquiry,
        message,
        budgetRange: budgetRange || null,
        attachmentUrl: attachmentUrl || null,
        status: 'new',
      },
    });

    res.status(201).json({
      success: true,
      message: 'Intake form submitted successfully',
      data: intake,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/intake
 * @desc    Get all intake submissions (ADMIN)
 * @access  Protected
 */
const getAllIntakes = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    // Build filter
    const where = {};
    if (status) {
      where.status = status;
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    // Get data + total count
    const [intakes, total] = await Promise.all([
      prisma.intakeSubmission.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.intakeSubmission.count({ where }),
    ]);

    res.status(200).json({
      success: true,
      data: intakes,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        totalPages: Math.ceil(total / parseInt(limit)),
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   GET /api/intake/:id
 * @desc    Get single intake submission detail (ADMIN)
 * @access  Protected
 */
const getIntakeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const intake = await prisma.intakeSubmission.findUnique({
      where: { id },
    });

    if (!intake) {
      return res.status(404).json({
        success: false,
        message: 'Intake submission not found',
      });
    }

    res.status(200).json({
      success: true,
      data: intake,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   PATCH /api/intake/:id/status
 * @desc    Update intake status (ADMIN)
 * @access  Protected
 */
const updateIntakeStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ['new', 'reviewed', 'closed'];
    if (!status || !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const intake = await prisma.intakeSubmission.update({
      where: { id },
      data: { status },
    });

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: intake,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @route   DELETE /api/intake/:id
 * @desc    Delete intake submission (ADMIN)
 * @access  Protected
 */
const deleteIntake = async (req, res, next) => {
  try {
    const { id } = req.params;

    await prisma.intakeSubmission.delete({
      where: { id },
    });

    res.status(200).json({
      success: true,
      message: 'Intake submission deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  submitIntake,
  getAllIntakes,
  getIntakeById,
  updateIntakeStatus,
  deleteIntake,
};