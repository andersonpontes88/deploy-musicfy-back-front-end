//cSpell:disable
import { MongoClient} from 'mongodb';

const URI =
"mongodb+srv://anderson88:YaiZuMgCZeneeoLM@users.urykys3.mongodb.net/?retryWrites=true&w=majority&appName=users"

const client = new MongoClient(URI);

export const db = client.db('Musicfy');



