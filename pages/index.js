import MeetupList from "../components/meetups/MeetupList"
const DUMMY_MEETUP=[
    {
        id:'m1',
        title:'A First Meetup',
        image:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Forest_Research_Institute_campus%2C_Dehradun%2C_India.jpg",
        address:"Dehradun",
        description:"This is a first meetup..!!"

    },
    {
        id:'m2',
        title:'A Second Meetup',
        image:"https://upload.wikimedia.org/wikipedia/commons/4/4e/Forest_Research_Institute_campus%2C_Dehradun%2C_India.jpg",
        address:"Dehradun",
        description:"This is a SEcond meetup..!!"

    }
]

const HomePage= ()=>{
    return(
        <>
    
        <MeetupList meetups={DUMMY_MEETUP}/>
        
        </>
    )
}
export default HomePage;