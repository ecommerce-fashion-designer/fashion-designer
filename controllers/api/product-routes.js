const router = require('express').Router();
const {  Product } = require('../../models');
const {slugify}=require('slugify')


//end point api/products


router.get('/', async(req, res) => {
  try{
    const proData=await Product.findAll({
      
 });
 res.status(200).json({
proData,
message:"you get all products"
 });
}catch(error){
  res.status(500).json(error);
}

});

//get data by id
router.get('/:id', async(req, res) => {
  try{
   const proData=await Product.findByPk(req.params.id);
   if(!proData){
    res.status(404).json({message:'No product found with that id!'})
    return;
   }
   res.status(200).json(proData)
  }catch(error){
    res.status(500).json(error);
  }
 
});


//create product 
router.post('/', async(req, res) => {
 try{
  const proData=await Product.create(req.body);
  res.status(200).json(proData)

 }catch(error){
  res.status(500).json(error);
 }
});


//update data
router.put('/:id', async(req, res) => {
 try{
const proData=await Product.update(req.body,{
  where:{
    id:req.params.id
  }
})

if(!proData){
  res.status(404).json({message:'No product found with that id!'})
  return;
 }
 res.status(200).json({message:'updated product!!',proData})

 }catch(error){
  res.status(500).json(error);
 }
});

//delete product
router.delete('/:id', async(req, res) => {
 try{
const proData=await Product.destroy({
  where:{
    id:req.params.id,
  },
})
if(!proData){
  res.status(404).json({message:'No product found with that id!'})
  return;
 }
 res.status(200).json({message:'delete product!!'})
 }catch(error){
  res.status(500).json(error);
 }
});

module.exports = router;