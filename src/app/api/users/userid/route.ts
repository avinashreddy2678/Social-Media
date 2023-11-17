import { getDatafromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/UserModel";
import { NextRequest,NextResponse } from "next/server";
export async function GET(request:NextRequest) {
    const id=await getDatafromToken(request);
    try {
        if(id){
            const user=await User.findOne({_id:id}).select("-password")
            return NextResponse.json({user})
        }
      else{
        return NextResponse.json({message:"No proper Crediantials"})
      }
    } catch (error) {
      return NextResponse.json(error) 
    }
    
}