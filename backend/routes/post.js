const express=require('express')
const {createposts,getallposts,getsinglepost,updatepost,deletepost}=require('../controllers/postcontroller')
const router=express.Router()

router.route('/').post(createposts)
router.route('/').get(getallposts)
router.route('/:id').get(getsinglepost)
router.route('/:id').put(updatepost)
router.route('/:id').delete(deletepost)


module.exports=router