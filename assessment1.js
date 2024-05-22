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
let totalNFT=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (jewellery_type,jewellery_name,Available_pieces, Price_Each) {
  const nft={
    jewellery_type:jewellery_type,
    jewellery_name:jewellery_name,
    Available_pieces: Available_pieces,
    Price_Each: Price_Each
  };
  totalNFT.push(nft);
  console.log("Minted: "+ jewellery_name);
  console.log("---------------------------------------------------");
  
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
     for(let i=0;i<totalNFT.length;i++){
        console.log("Jewellery Type: "+ totalNFT[i].jewellery_type);
        console.log("Jewellery Name: "+ totalNFT[i].jewellery_name);
        console.log("Total available pieces: "+ totalNFT[i].Available_pieces);
        console.log("Price of each piece(in $): "+ totalNFT[i].Price_Each);
        console.log("---------------------------------------------------");
     }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
     return totalNFT.length;
}

// call your functions below this line
mintNFT("Diamond","Embroidery Ring",45,200);
mintNFT("Diamond","Women's Handmade Pandent",30,250);
mintNFT("Gold","Necklace",31,120);
mintNFT("Silver","Ring",800,45);
mintNFT("Artificial","Embroidery Earring pack of 20",300,20);

listNFTs();
console.log("Total Supply: " + getTotalSupply());

