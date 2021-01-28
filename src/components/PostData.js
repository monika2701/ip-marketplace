export default function PostData(type, userData) {
    let BaseURL = 'https://marketplace.parintekinnovation.com/api/user.php?method=';
    
    return new Promise((resolve, reject) =>{
    fetch(BaseURL+type, {
   method: 'POST',
   body: JSON.stringify(userData)
   })
   .then((response) => response.json())
   .then((responseJson) => {
    resolve(responseJson);
   })
   .catch((error) => {
    reject(error);
   });
   });
   }