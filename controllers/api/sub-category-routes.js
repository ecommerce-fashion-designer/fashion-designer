const router = require('express').Router();
const { SubCategory , Product } = require('../../models');
const {slugify}=require('slugify')


//end point api/sub-category
router.get('/', async(req, res) => {
  try{
    const catData=await SubCategory.findAll({
      include:[{ model: Product }],
 });
 res.status(200).json({
catData,
message:"you get all categories"
 });
}catch(error){
  res.status(500).json(error);
}
});

//get data by id
router.get('/:id', async(req, res) => {
  try{
   const catData=await SubCategory.findByPk(req.params.id,{
    include:[{ model: Product }],
   });
   if(!catData){
    res.status(404).json({message:'No category found with that id!'})
    return;
   }
   res.status(200).json(catData)
  }catch(error){
    res.status(500).json(error);
  } 
});

//create category 
router.post('/', async(req, res) => {
 try{
  const catData=await SubCategory.create(req.body);
  res.status(200).json(catData)

 }catch(error){
  res.status(500).json(error);
 }
});

//update data
router.put('/:id', async(req, res) => {
 try{
const catData=await SubCategory.update(req.body,{
  where:{
    id:req.params.id
  }
});

if(!catData){
  res.status(404).json({message:'No category found with that id!'})
  return;
 }
 res.status(200).json({message:'updated category!!',catData})

 }catch(error){
  res.status(500).json(error);
 }
});

//delete category
router.delete('/:id', async(req, res) => {
 try{
const catData=await SubCategory.destroy({
  where:{
    id:req.params.id,
  },
})
if(!catData){
  res.status(404).json({message:'No cat found with that id!'})
  return;
 }
 res.status(200).json({message:'delete category!!'})
 }catch(error){
  res.status(500).json(error);
 }
});

module.exports = router;