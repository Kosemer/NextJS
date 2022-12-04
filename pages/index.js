import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

/*const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m1",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 9, 12345 Some City",
    description: "This is a second meetup!",
  },
];*/

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

/*export async function getServerSideProps (context) {
    return{
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}*/

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Kosemer:vPt9lCh0iSAF4STe@cluster0.umvtlos.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toHexString()
      })),
    },
    revalidate: 1,
  };
}
export default HomePage;
