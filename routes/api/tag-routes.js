const router = require('express').Router();
const { Tag, Product} = require('../../models');

// The `/api/tags` endpoint

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product } ],
    });
    if (!tagData) {
      res.status(400).json({ message: 'Unable to retrieve data!' });
      return; 
    }   
  res.status(200).json(tagData);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!tagData) {
      res.status(400).json({ message: 'No tag found with that id!'});
      return; 
    }   
  res.status(200).json(tagData);
  } catch (err) {
      res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body, {
      include: [{ model: Product }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Calls the update method on the Category model
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name,
      },
      {
        where: {
          tag_id: req.params.tag_id,
        },
      });
      if (!tagData.tag_id) {
        res.status(404).json({ message: 'No tag found with that id!' });
        return;
      }
      res.status(200).json(tagData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
