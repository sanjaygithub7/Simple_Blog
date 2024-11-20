const Category = require('../models/categorymodel'); // Assuming Category model is in the models folder

// Create a new category
exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create({
            name: req.body.name,
            slug: req.body.slug,
            description: req.body.description,
        });

        res.status(201).json({
            message: "Category created successfully",
            category,
        });
    } catch (error) {
        res.status(400).json({
            message: "Unable to create category",
        });
    }
};

// Get all categories
exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json({
            message: "All categories fetched successfully",
            categories,
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch categories",
        });
    }
};

// Get a single category by ID
exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json({
            message: "Category fetched successfully",
            category,
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to fetch category",
        });
    }
};

// Update an existing category
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug, description } = req.body;

        const updatedCategory = await Category.findByIdAndUpdate(
            id,
            { name, slug, description, updatedAt: Date.now() },
            { new: true } // Return the updated document
        );

        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({
            message: "Category updated successfully",
            updatedCategory,
        });
    } catch (error) {
        res.status(400).json({
            message: "Unable to update category",
        });
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await Category.findByIdAndDelete(id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        res.json({
            message: "Category deleted successfully",
            deletedId: `Deleted ID is ${id}`,
        });
    } catch (error) {
        res.status(500).json({
            message: "Unable to delete category",
        });
    }
};
