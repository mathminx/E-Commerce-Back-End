const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

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
  // find a single tag by its `id`
  // be sure to include its associated Product data
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

router.post('/', async (req, res) => {
  /* req.body should look like this...
  {
    "tag_name": "iconic",
    "productIds": [1, 6]
  } 
  */
  Tag.create(req.body)
  .then((tag) => {
    console.log(req.body);
    // if there's product tags, we need to create pairings to bulk create in the ProductTag model
    if (req.body.productIds) {
      const productTagIdArr = req.body.productIds.map((product_id) => {
        return {
          product_id,
          tag_id: tag.id,
        };
      });
      return ProductTag.bulkCreate(productTagIdArr);
    }
    // if no product tags, just respond
    res.status(200).json(tag);
  })
  .then((ProductTag_id) => res.status(200).json(ProductTag_id))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// update tag
router.put('/:id', async (req, res) => {
  try {
    // Calls the update method on the Tag model
    const tagData = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!' });
      return;
    }

    res.status(200).json({message: `Tag ${req.params.id} name updated to ${req.body.tag_name}.`});
  }
    catch (err) 
    {
      res.status(500).json(err);
    }
  });

// delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with that id!'});
      return;
    }
    res.status(200).json({message: `Tag ${req.params.id} deleted.`});
  } 
  catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
