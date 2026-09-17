import { PLANS } from "../config/plan.js"
import User from "../models/user.model.js"

export const billing=async (req,res)=>{
try {
    const {planType}=req.body
    const userId=req.user._id
    const plan=PLANS[planType]
    if(!plan || plan.price==0){
        return res.status(400).json({message:"invalid paid plan"})
    }

    const user=await User.findById(userId)
    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    user.credits=user.credits+plan.credits
    user.plan=plan.plan
    await user.save()

    return res.status(200).json({
        message:`Successfully upgraded to ${planType} plan`,
        credits:user.credits,
        plan:user.plan
    })

} catch (error) {
    console.log(error)
    return res.status(500).json({message:`billing error: ${error}`})
}
}