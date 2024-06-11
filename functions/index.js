const {onCall} = require("firebase-functions/v2/https");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions


const onRequest = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");


// exports.helloWorld = functions.https.onRequest((request, response) => {
//   console.log("He came through");
//   const city = request.query.city;
//   return response.send({message: "Hello from Firebase!", city: city});
// });
exports.logUserDetails = functions.https.onRequest(async(request, response) => {
  // try {
    let id = "pmefIdtIPVauOk8XZYrfKrXk1hC3";
    console.log("id", id);
    const city = 'Abuja';
    const country = 'Nigeria'
    const desired_qualities = ["Financial Stability", "Emotional Intelligence", "Decisiveness", "Communication", "Independence"]
    const userRef = admin.firestore().collection('users');
    const userData = await userRef.where('city', '==', city)
    // .where('country', '==', country)
    .where('desired_qualities', '==', desired_qualities).get();
    console.log({data: userData.docs});
    response.send({data: userData.docs})
    // if (userData.empty) {
    //   console.log('User not found.');
    //   return Response.json({message: 'User not found'}) // or handle the case where no user is found
    // }

//     for (const userDoc of userData.docs) { // Iterate through QueryDocumentSnapshot objects
//       const { city, country } = userDoc.data(); // Destructure city and country from data
//       console.log("City:", city);
//       console.log("Country:", country);
    // }
//   } catch (error) {
//     console.error('Error retrieving user details:', error);
//     throw error;
//   }
// });
//   // let userId = 'ETYeda1i7niwclRevt2K'
  // let id = "0K8YpdELLbTty6DVq6KulwS8E0K3"
  logUserDetails(id)
    .then(userData => {
      return (userData.docs.hobbies)
    })
    .catch(error => {
      console.log(error)
    });
});
    // async function getRecommendedProfiles (req, res) {
    // try {
    //   let id = "0K8YpdELLbTty6DVq6KulwS8E0K3"
        // const { city, }
        // if (!req.body ||!req.body.city ||!req.body.country ||!req.body.hobbies ||!req.body.desiredQualities ||!req.body.age ||!req.body.gender) {
        //     return res.status(400).json({ error: 'Missing required fields in request body' });
        // }
        // console.log("Here we are!", id)
        // const { city, country, hobbies, desiredQualities, age, gender } = req.body;
        // console.log(req.body, "BODYYY")

        // // Query Firestore for profiles matching the specified criteria
        // const profilesSnapshot = await admin.firestore().collection('users')
        //    .doc(id)
        //    .where('country', '==', country)
        //   //  .where('gender', '!=', gender)
        //   //  .limit(10)
        //    .get();
        // // if (profilesSnapshot){
        //   console.log({profilesSnapshot});
        //   // return res.send({profilesSnapshot});
        
          
        
      
        //   console.log("No matching profile found")
        //   // return res.send("Profile not found")
        // const recommendedProfiles = [];
        
        // Loop through the profiles and calculate similarity score
      //   const userRef = admin.firestore().collection('users');
      // const profileDoc = await userRef.get();
      //   profilesSnapshot.forEach(profileDoc => {
      //       const profileData = profileDoc.data();

      //       // Calculate similarity score based on hobbies, desired qualities, and age
      //       const hobbiesSimilarity = calculateSimilarity(hobbies, profileData.hobbies);
      //       const qualitiesSimilarity = calculateSimilarity(desiredQualities, profileData.desiredQualities);
      //       const ageDifference = Math.abs(age - profileData.age);
            
      //       // Adjust age difference check to account for direction of age difference
      //       const maxAgeDifference = getMaxAgeDifference(gender, age > profileData.age);
      //       if (hobbiesSimilarity > 0 && qualitiesSimilarity > 0 && ageDifference <= maxAgeDifference) {
      //           recommendedProfiles.push({
      //               id: profileDoc.id,
      //               name: profileData.name,
      //               age: profileData.age,
      //               gender: profileData.gender,
      //               hobbiesSimilarity,
      //               qualitiesSimilarity,
      //               ageDifference
      //           });
      //       }
        // });

        // Sort recommended profiles by similarity scores
//         recommendedProfiles.sort((a, b) => {
//             if (a.hobbiesSimilarity!== b.hobbiesSimilarity) {
//                 return b.hobbiesSimilarity - a.hobbiesSimilarity;
//             }
//             if (a.qualitiesSimilarity!== b.qualitiesSimilarity) {
//                 return b.qualitiesSimilarity - a.qualitiesSimilarity;
//             }
//             return a.ageDifference - b.ageDifference;
//         });

//         // Return recommended profiles
//         console.log({recommendedProfiles})
//         res.status(200).json({ recommendedProfiles });
//     } catch (error) {
//         console.error('Error getting recommended profiles:', error);
//         res.status(500).json({ error: 'Failed to get recommended profiles' });
//     }
// };

// Function to calculate similarity between two arrays
// function calculateSimilarity(array1, array2) {
//     const intersection = array1.filter(value => array2.includes(value));
//     return intersection.length;
// }

// Function to get maximum age difference based on gender and direction of age difference
// function getMaxAgeDifference(gender, isUserOlder) {
//     if (gender === 'male') {
//         return isUserOlder? 8 : 3; // 8 years for older guys, 3 years for younger
//     } else {
//         return isUserOlder? 3 : 8; // 3 years for older girls, 8 years for younger
//     }
// }
