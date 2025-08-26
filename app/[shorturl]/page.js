import { redirect } from 'next/navigation'
import clientPromise from '../lib/mongodb'

export default async function Page({ params }) {
  const shorturl = params.shorturl; 

  const client = await clientPromise;
  const db = client.db("urllink");
  const collection = db.collection("url");

  const docs = await collection.findOne({shorturl:shorturl });

  if (docs) {
   
    redirect(docs.url);
  } else {
   
    redirect(process.env.HOST || "/");
  }
}
