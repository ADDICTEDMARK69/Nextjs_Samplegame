import { NextResponse } from "next/server";
import pool from "@/backend/db";
import bcrypt from "bcryptjs";

export async function POST(request:Request){

try{
    const body = await request.json();
    const {username,password} = body;

    if(!username || !password){
        return NextResponse.json(
        {error:"Missing required fields"},
        {status:400});
     }

 

}

catch(err){

}

}
