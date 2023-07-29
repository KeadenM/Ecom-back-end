const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  try {
    const tags = async Tag.findAll({
      model: Product,
      through: ProductTag
    })
    res.status(200).json(tags)
  }
  catch (err){
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  try {
    const tag = async Tag.findOne({
      where: {
        id: req.params.id
      },
      model: Product,
      through: ProductTag
    })
    res.status(200).json(tag)
  }
  catch (err){
    res.status(500).json(err)
  }
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  try {
    const newTag = async Tag.create(req.body)
    res.status(200).json(newTag)
  }
  catch (err){
    res.status(500).json(err)
  }
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  try {const updatedTag = async Tag.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(updatedTag)
}
catch (err){
  res.status(500).json(err)
    }
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  try {const deletedTag = async Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json('Tag with ID ' + ${req.params.id} + ' has been deleted')
}
catch (err){
  res.status(500).json(err)
    }
});

module.exports = router;
