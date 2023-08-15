import { NextResponse } from "next/server";
import { songs } from "./songs";

export async function GET(req, res) {
  return NextResponse.json(songs);
}
