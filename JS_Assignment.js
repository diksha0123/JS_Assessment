/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const _NFTs_= [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_breed,_colour,_weight,_fav_food) {
    
    const NFT ={
        "name":_name,
        "breed":_breed,
        "colour":_colour,
        "weight":_weight,
        "fav_food":_fav_food
    }
    _NFTs_.push(NFT);
    console.log("Minted:" + _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for( let i=0;i<_NFTs_.length;i++){
        console.log("\n ID:  \t\t"+ (i+1));
        console.log("\n Name:  \t "+ _NFTs_[i].name);
        console.log("\n Breed: \t "+ _NFTs_[i].breed);
        console.log("\n Colour:\t "+ _NFTs_[i].colour);
        console.log("\n Weight:\t "+ _NFTs_[i].weight);
        console.log("\n Fav food:\t "+ _NFTs_[i].fav_food);
        console.log("\n");
        
    }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Length:" + _NFTs_.length);
}

// call your functions below this line

mintNFT("Khushi","PUG","golden",8,"EGGS");
mintNFT("Jenny","Indie","Brown",12,"Treats");
mintNFT("Jacky","Indie","Black",14,"Chicken");
listNFTs ();
getTotalSupply() ;



