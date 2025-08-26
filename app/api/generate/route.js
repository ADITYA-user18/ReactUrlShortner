import clientPromise from "@/app/lib/mongodb";

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db("urllink");
    const collection = db.collection("url");

    
    const body = await req.json();


const docs = await collection.findOne({shorturl:body.shorturl})
if (docs) {
  return Response.json(
    {
      success: false,
      error: true,
      message: "URL Already Exists",
      shorturl: body.shorturl, 
    },
    { status: 400 }
  );
}

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  });
  
  return Response.json({
    message: "Url Shortened Successfully",
    success: true,
    data: result,
    shorturl: body.shorturl
  });


  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
