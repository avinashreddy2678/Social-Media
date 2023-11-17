import User from "@/app/models/UserModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
    try {
        const allusers=await User.find({}).select("_id name FollowingIds");
        //console.log(allusers)
        return NextResponse.json({allusers});
        
    } catch (error) {
        console.log(error)
    }
    
}