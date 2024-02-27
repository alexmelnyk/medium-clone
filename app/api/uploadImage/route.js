import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs";
import cuid from "cuid";

export async function POST(req, res) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ error: "No files received." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const extension = file.name.split(".").pop();
    const filename = `${cuid()}.${extension}`;
    const dir = path.join(process.cwd(), "public/assets/");

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    await writeFile(dir + filename, buffer);
    return NextResponse.json({ url: `${process.env.BASE_URL}/assets/${filename}` }, { status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
