
// Assignment 1 – Data Types

// 1. Temperature of a city in degrees Celsius: 25.5
    let temp:number = 25.5;
    console.log(`Temperature of a city in degrees Celsius: ${temp}`);
// 2. Whether a customer has placed an order: true or false
    let order : boolean = true;
    console.log(`customer has placed an order: ${order}`);
// 3. Person's phone number: "123-456-7890"
    let phone_no : number = 1234567890;
    console.log(`Person's phone number is : ${phone_no}`);
// 4. Amount of money in a customer's bank account: 1000.50
    let bank_balance : number = 1000.50;
    console.log(`Amount of money in a customer's bank account : ${bank_balance}`);
// 5. Person's email address: "john.doe@example.com"
    let email_id : string = "john.doe@example.com";
    console.log(`Person's email address : ${email_id}`);
// 6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
    let latitute : number = 37.7749;
    let longitude :number = -122.4194;
    console.log(`Coordinates of a location (latitude, longitude) are : ${latitute} , $(longitude)`);
// 7. Person's marital status: true or false
    let marital_status :boolean = false;
    console.log(`Person's marital status : ${marital_status}`);
// 8. Person's occupation: "Software Engineer"
    let occupation : string = "Software Engineer";
    console.log(`Person's occupation : ${occupation}`)
// 9. Person's favourite colour: "Blue"
    let colour : string = "Blue";
    console.log(`Person's favourite colour : ${colour}`)
// 10.Current year: 2023
    let current_year : number = 2023;
    console.log(`Current year is: ${current_year}`);
// 11.Number of followers on a social media platform: 1,000,000
    let total_followers : number = 1000000;
    console.log(`Number of followers on a social media platform : ${total_followers}`);
// 12.Rating of a movie: 7.5
let movie_rating :number = 7.5;
    console.log(`Rating of a movie : ${movie_rating}`);
// 13.Person's blood type: 'A'
    const BLOOD_GRP : string = 'A';
    console.log(`Person's blood type : ${BLOOD_GRP}`);
// 14.Title of a book: "To Kill a Mockingbird"
    const BOOK_TITLE :string = "To Kill a Mockingbird";
    console.log(`Title of a book is : ${BOOK_TITLE}`);
// 15.Number of employees in a company: 500
    let total_employees : number = 500;
    console.log(`Number of employees in a company : ${total_employees}`);
// 16.Time of an event: 2:30 PM
    interface EventTime {
    hour: number;   
    minute: number; 
    period: 'AM' | 'PM';
    }
    const meetingTime: EventTime = {
     hour: 2,
     minute: 30,
     period: 'PM'
    };
    console.log(`Time of an event : ${meetingTime}`);
// 17.Name of a country: "United States"
    const COUNTRY_NAME : string = "United States";
    console.log(`Name of a country : ${COUNTRY_NAME}`);
// 18.Person's eye color: "Brown"
    const EYE_COLOR : string = "Brown";
    console.log(`Person's eye color : ${EYE_COLOR}`);
// 19.Person's birthplace: "New York City"
    const BIRTH_PLACE : string = "New York City"
    console.log(`Person's birthplace : ${BIRTH_PLACE}`);
// 20. Distance between two cities: 200.5
    let distance : number = 200.5;
    console.log(` Distance between two cities : ${distance}`);
