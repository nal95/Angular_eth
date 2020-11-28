export interface Poll {
  id: number; //zb. 12
  question: string; // wich days of week you like most?
  results: number; //[10persons like M,20persons like T,0persons like W,5persons like T,10persons like F]
  options: string[];// [M,T,W,T,F]
  thumbnail: string;// https://image.png
}

export interface Voter {
  id: string;// Hash zb. 0xJKSMF45NCZ12T
  voted: number;//[12] number of voters
}
