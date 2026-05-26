import { NextResponse } from "next/server";
import pool from "@/backend/db";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, firstname, lastname, email, password } = body;
    if (!username || !email || !password) {
      
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await pool.execute(
      `INSERT INTO users (username, firstname, lastname, email, password)
       VALUES (?, ?, ?, ?, ?)`,
      [username, firstname, lastname, email, passwordHash]
    );

    return NextResponse.json({ message: "User created" }, { status: 201 });

  } catch (err) {

   console.log(err)
    return NextResponse.json({ error:  "Error in Signup"}, { status: 500 });
  }
}
