import asyncHandler from '../middleware/asyncHandler.js';
import Cabin from '../models/cabinModel.js';
import AppError from '../middleware/appError.js';


// @desc    Fetch all cabins
// @route   GET /api/cabins
// @access  Public
export const getCabins = asyncHandler(async (req, res) => {
    const cabins = await Cabin.find({});
    res.status(200).json(cabins);
})

// // @desc    Delete a cabin
// // @route   DELETE /api/cabins/:id
// // @access  Private/Admin
export const deleteCabin = asyncHandler(async (req, res) => {
    const cabin = await Cabin.findById(req.params.id);

    if (cabin) {
        await Cabin.deleteOne({ _id: cabin._id });
        res.status(204).json({
            message: 'Cabin removed'
        });
    } else {
        return next(new AppError('No cabin found with that ID', 404))
    }
});

// @desc    Fetch single cabin
// @route   GET /api/cabins/:id
// @access  Public
export const getCabinById = asyncHandler(async (req, res) => {
    const cabin = await Cabin.findById(req.params.id);

    if (cabin) {
        res.status(200).json(
            cabin
        );
    } else {
        return next(new AppError('No cabin found with that ID', 404))
    }
});

// // @desc    Create a cabin
// // @route   POST /api/cabins
// // @access  Private/Admin
export const createCabin = asyncHandler(async (req, res) => {
    const cabin = new Cabin({
        name: `Sample name ${[...Array(4)].map(() => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('')}`,
        // user: req.user._id,
        maxCapacity: 1,
        regularPrice: 10,
        discount: 0,
        image: '/cabins/sample.jpg',
        description:
            "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
        ratingsAverage: 4.5,
        ratingQuantity: 0,
        reviews: [],
    });

    const createdCabin = await cabin.save();

    res.status(201).json(
        createdCabin
    )
});



// @desc    Update a cabin
// @route   PUT /api/cabins/:id
// @access  Private/Admin
export const updateCabin = asyncHandler(async (req, res) => {
    const { name, maxCapacity, regularPrice, discount, image, description } =
        req.body;

    const cabin = await Cabin.findById(req.params.id);

    if (cabin) {
        cabin.name = name;
        cabin.maxCapacity = maxCapacity;
        cabin.regularPrice = regularPrice;
        cabin.discount = discount;
        cabin.image = image;
        cabin.description = description;

        const updatedCabin = await cabin.save();
        res.status(200).json(updatedCabin);
    } else {
        return next(new AppError('No cabin found with that ID', 404))
    }
});

