const router = require('express').Router();
const { model } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const category = async Category.findAll({
      include: [Product]
    });
    res.status(200).json(category);
  }
  catch(err){
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = async Category.findOne({
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
    res.status(200).json(category)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
  try{
    console.log(req);
    const newCategory = async Category.create(req.body);
    res.status(200).json(newCategory);
  }
  catch (err){
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const catUpdate = async Category.update(req.body, {
    where: {
      id: req.params.id
      }
    });
    res.status(200).json(catUpdate)
  }
  catch (err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = async Category.destroy({
    where: {
      id: req.params.id
    }
  });
    res.status(200).json(`Category ID ${req.params.id} was deleted from the database`)
  }
  catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;
