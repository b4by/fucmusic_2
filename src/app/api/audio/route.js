import { NextResponse } from "next/server";
import { audio } from "./audio";

export async function GET(req, res) {
  return NextResponse.json(audio);
}
