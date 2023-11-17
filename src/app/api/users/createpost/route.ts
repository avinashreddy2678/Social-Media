import mongoose from "mongoose";
import Posts from "@/app/models/PostModal";
import { connect } from "@/app/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import { getDatafromToken } from "@/app/helpers/getDataFromToken";
import User from "@/app/models/UserModel";
connect();
export async function POST(request:NextRequest) {
    const reqBody=await request.json();
    const userid=getDatafromToken(request);
    const { postimage,post}=reqBody;
    const user=await User.findById({_id:userid});
    const newpost= await new Posts({
        userid,
        post,
        postimage,
        createdAt:Date.now()
    })
    await newpost.save();
  await user.save();
    return NextResponse.json({message:"Posted Successfully"});
}