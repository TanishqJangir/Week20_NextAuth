import  Jwt  from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req : NextRequest){
    //idealy we should check the username and passsword in the db and only if it is right then we should return the jwt

    const body = await req.json();
    const username = body.username;
    const password = body.password;

    const userId =  1;
    const token = Jwt.sign({
        userId
    },"Secret")

    return NextResponse.json({
        token
    })
}