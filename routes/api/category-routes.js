const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET one category
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a category
router.put('/:id', async (req, res) => {
  try {
    // Calls the update method on the Category model
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        where: {
          category_id: req.params.id
        }
      });
      console.log("2", categoryData);
      if (!categoryData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
      const updatedCategory = await Category.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
      if (!updatedCategory) {
        res.status(404).json({ message: 'Error fetching updated category!' });
        return;
      }
      res.status(200).json(updatedCategory);
  }
  catch (err) 
  {
    res.status(500).json(err);
  }
});

// DELETE a category
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        category_id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    if (categoryData == 1) {
      res.status(200).json(categoryData);
    }
    else {
      res.status(500).json(err);
    }
  } 
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
