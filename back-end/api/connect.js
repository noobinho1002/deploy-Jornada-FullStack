import { MongoClient} from "mongodb";

const URI = "mongodb+srv://rubenspereira1029:SBD5JjFb1FLuS8aC@cluster0.v9eur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");

//const songCollection = await db.collection("songs").find({}).toArray();

