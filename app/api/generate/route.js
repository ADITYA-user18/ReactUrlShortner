import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("urllink");
    const collection = db.collection("url");

    const body = await req.json();
    console.log("Incoming body:", body);

    const { url, shorturl } = body || {};

   
    if (!url || !shorturl) {
      return Response.json(
        { success: false, error: true, message: "Missing url or shorturl" },
        { status: 400 }
      );
    }

  
    const existing = await collection.findOne({ shorturl });
    if (existing) {
      return Response.json(
        {
          success: false,
          error: true,
          message: "Short URL already exists",
          shorturl,
        },
        { status: 400 }
      );
    }

 
    const result = await collection.insertOne({ url, shorturl });

    return Response.json(
      {
        success: true,
        message: "URL shortened successfully",
        data: result,
        shorturl,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
