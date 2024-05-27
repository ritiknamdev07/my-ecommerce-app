import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

// productsReducer.js
// const initialState =[
//         { id:1,
//           offerPrice: 8999,
//           actualPrice: "13,999",
//           rating: 4,
//           name: "shoe",
//           image: [
//             "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
//             "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
//           ],
//           discretion : "Neeman's Casual Trainers For Men | Casual Shoes For Men | Comfortable and Lightweight"
//         },
//         {
//           id:2,
//           offerPrice: 8799,
//           actualPrice: "10,999",
//           rating: 5,
//           name: "shoe",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
//             "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
//             "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
//           ],
//         },
//         {
//           id:3,
//           offerPrice: 899,
//           actualPrice: "1,959",
//           rating: 4,
//           name: "shoe",
//           image: [
//             "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
//             "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
//           ],
//         },
//         {
//           id:4,
//           offerPrice: 7999,
//           actualPrice: "16,999",
//           rating: 4,
//           name: "shoe",
//           image: [
//             "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
//           ],
//         },
//         {
//           id:5,
//           offerPrice: 6999,
//           actualPrice: "11,999",
//           rating: 5,
//           name: "shoe",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsb24B4w1EApz5OJr0VVcqdiBs6WfFJJc1YMmceHYudxBgA6GOJxKE_zg9FjPWzO3kzPk2DXE&usqp=CAc",
//           ],
//         },
//         { id:6,
//           offerPrice: 6999,
//           actualPrice: "14,999",
//           rating: 4,
//           name: "shoe",
//           image: [
//             "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqUnHGFIxdluacdc6VLe93DodNfawn_2jHMb22uedruJ_jDEApg4_JvCPntwpB1z-myDsdl9JSSWIuG73tk7VBtFWv4rOwMCkC5dJmyGPe5Gmh7fm6DcfJ0g&usqp=CAE",
//           ],
//         },
//         {
//           id:7,
//           offerPrice: 8999,
//           actualPrice: "12,999",
//           rating: 3,
//           name: "shoe",
//           image: [
//             "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmJYStYtU8tuhWAHTkl7KQuS7XkmA0nub5JtRht_WwDcehgYYajyBaGVOxzG9Kq1TjRlwR2Rml8xyizazIDi-mkK_SI2FGX-BHDz87SRzYMOQx15p9RYUZ&usqp=CAE",
//           ],
//         },
//         {
//           id:8,
//           offerPrice: 999,
//           actualPrice: "1,999",
//           rating: 5,
//           name: "shoe",
//           image: [
//             "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR56TWmUIkw6tyPiOZKqn8X2WLAxpd6G6x2Z-Zz42jEayoLCJPRvfvCRimf79M6xQE9DI25tSRzcI-fdlGvz5n-1m90XFnOfI7SmARl0mH1JsFvoERLwMS8fUo&usqp=CAE",
//           ],
//         },
//         {
//           id:9,
//           offerPrice: 4099,
//           actualPrice: "9,900",
//           rating: 4,
//           name: "short",
//           image: ["https://www.rei.com/media/product/145578"],
//         },
//         {
//           id:10,
//           offerPrice: 6990,
//           actualPrice: "12,699",
//           rating: 3,
//           name: "short",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfPuXkPk2lTykOYTDL_iY4OfaR6v2BU-355g&usqp=CAU",
//           ],
//         },
//         {
//           id:11,
//           offerPrice: 3599,
//           actualPrice: "11,299",
//           rating: 2,
//           name: "short",
//           image: [
//             "https://contents.mediadecathlon.com/p827233/e1718060df09a80062c720d80d1fa465/p827233.jpg?f=650x650&format=auto",
//           ],
//         },
//         {
//           id:12,
//           offerPrice: 5099,
//           actualPrice: "11,950",
//           rating: 4,
//           name: "short",
//           image: [
//             "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1584574185-app001prod.jpg?crop=1.00xw:0.668xh;0,0.185xh&resize=480:*",
//           ],
//         },
//         {
//           id:13,
//           offerPrice: 5999,
//           actualPrice: "12,479",
//           rating: 3,
//           name: "short",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvz5YFwmGKMNR5hGZyFYCadI6DFiJ3j9SVJQ&usqp=CAU",
//           ],
//         },
//         { id:14,
//           offerPrice: 849,
//           actualPrice: "9,599",
//           rating: 4,
//           name: "short",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDI_5avN5S2uzAPrj1_QLmAGJ4sMGrDWDfeQ&usqp=CAU",
//           ],
//         },
//         {
//           id:15,
//           offerPrice: 899,
//           actualPrice: "11,999",
//           rating: 1,
//           name: "short",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Grx921fH2NZcN3fbvfjLTxl03Xs0-wtpEA&usqp=CAU",
//           ],
//         },
//         {
//           id:16,
//           offerPrice: 99,
//           actualPrice: "12,599",
//           rating: 3,
//           name: "short",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG6Wwhoy1oDxjxQGTiId82ODCjLSRPr0N5QQ&usqp=CAU",
//           ],
//         },
//         {
//           id:17,
//           offerPrice: 999,
//           actualPrice: "15,999",
//           rating: 4,
//           name: "short",
//           image: [
//             "https://pizu-prod-cdn-medias.s3.amazonaws.com/sys-master/s3medias1/h9d/hd3/8976171466782/11111922289http%3A/%2Fimages.salsify.com/image/upload/s--jPNYN1Ph--/bkvznldly1ywoqbdrmdb.png_540x540",
//           ],
//         },
//         {
//           id:18,
//           offerPrice: 6999,
//           actualPrice: "9,999",
//           rating: 3,
//           name: "skirt",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKbldj32LBhoozOmGaA-z0cywBwiE_mAzBvtCWC_Vf542bq2Vcb0G5VLL5g9xMDB4gFzecvORU&usqp=CAc",
//           ],
//         },
//         {
//           id:19,
//           offerPrice: 8999,
//           actualPrice: "13,999",
//           rating: 4,
//           name: "skirt",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm153Z0TcmLUdCx7V0gxwe-lA_G00FoKCYtcLTVsJ3KJ9nwkZJU5T_-T9M2lP7i3WuM6i4UlY&usqp=CAc",
//           ],
//         },
//         {
//           id:20,
//           offerPrice: 4999,
//           actualPrice: "7999",
//           rating: 2,
//           name: "skirt",
//           image: [
//             "https://rukminim1.flixcart.com/image/800/960/kar44280/skirt/m/s/b/free-ucskt05maroon-unique-choice-original-imafs9hejs7fpbah.jpeg?q=50"
//           ],
//         },
//         {
//           id:21,
//           offerPrice: 6999,
//           actualPrice: "9,999",
//           rating: 4,
//           name: "skirt",
//           image: [
//             "https://www.bodenimages.com/productimages/productlarge/19wxms_t0312_bpk_d06.jpg",
//           ],
//         },
//         {
//           id:22,
//           offerPrice: 2999,
//           actualPrice: "8,999",
//           rating: 3,
//           name: "skirt",
//           image: [
//             "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4914118/2018/6/7/5f0d25c6-0a26-4dec-815f-02a37d6cf1a41528375698888-HERENOW-Women-Skirts-4431528375698828-2.jpg",
//           ],
//         },
//         {
//           id:23,
//           offerPrice: 4599,
//           actualPrice: "7,999",
//           rating: 4,
//           name: "skirt",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPcxIhPZaX65KQlCPS7JdtmhqrwQMMSh3jRJEZ4dkhyzyi1-f0OoAAtgEoeNaBIM6G_2XA5g4&usqp=CAc",
//           ],
//         },
//         {
//           id:24,
//           offerPrice: 99,
//           actualPrice: "999",
//           rating: 3,
//           name: "skirt",
//           image: [
//             "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaNQ-MwfRTFMu5yaWr5t7_zC8d9QtUXsOz9jy1UcJIymNNHMl9hSsOO_gBc_QxZ8pzPs01ocsg&usqp=CAc",
//           ],
//         },
//         {
//           id:25,
//           offerPrice: 5999,
//           actualPrice: "10,999",
//           rating: 5,
//           name: "skirt",
//           image: [
//             "https://rukminim1.flixcart.com/image/800/960/k7285u80/skirt/x/p/n/free-bindi-purple-skirt-hukam-creation-original-imafpdauh3jkuztc.jpeg?q=50",
//           ],
//         },
//         {
//           id:26,
//           offerPrice: 7999,
//           actualPrice: "14,999",
//           rating: 3,
//           name: "skirt",
//           image: [
//             "https://rukminim1.flixcart.com/image/800/960/kar44280/skirt/m/s/b/free-ucskt05maroon-unique-choice-original-imafs9hejs7fpbah.jpeg?q=50",
//           ],
//           discretion :
//           "this is skirt this is skirt this is skirt this is skirt",
//         },
//         {
//           id:27,
//           offerPrice: 599,
//           actualPrice: "999",
//           rating: 4,
//           name: "skirt",
//           image: [
//             "https://www.bodenimages.com/productimages/productlarge/20wsum_t0496_pnk_w01.jpg",
//           ],
//         },

//         {
//           id:28,
//           offerPrice: 999,
//           actualPrice: "8,999",
//           rating: 4,
//           name: "pant",
//           image: [
//             "https://www.lespetits.in/pub/media/catalog/product/cache/90a79a4c6002305cc8af303e36fd8ed3/f/e/fendi-black-jeans-44953-1.jpg",
//           ],
//         },
//         {
//           id:29,
//           offerPrice: 7899,
//           actualPrice: "12,999",
//           rating: 3,
//           name: "pant",
//           image: [
//             "https://pnh-preprod.oss-ap-south-1.aliyuncs.com/20200305/3_1583409445963.2_1583409445963.jpeg?x-oss-process=style/thumb",
//           ],
//         },
//         {
//           id:30,
//           offerPrice: 4999,
//           actualPrice: "11,999",
//           rating: 4,
//           name: "pant",
//           image: [
//             "https://pantaloons.imgix.net/img/app/product/4/461136-3191179.jpg?w=83&auto=format",
//           ],
//         },
//         {
//           id:31,
//           offerPrice: 7999,
//           actualPrice: "15,999",
//           rating: 2,
//           name: "pant",
//           image: [
//             "https://pantaloons.imgix.net/img/app/product/4/461130-3191143.jpg?w=83&auto=format",
//           ],
//         },
//         {
//           id:32,
//           offerPrice: 7899,
//           actualPrice: "13,999",
//           rating: 4,
//           name: "pant",
//           image: [
//             "https://rukminim1.flixcart.com/image/800/960/jk1grrk0/jean/z/7/h/28-jeans100-star-girl-s-original-imaf6ue99ffhv2sd.jpeg?q=50",
//           ],
//         },
//         {
//           id:33,
//           offerPrice: 699,
//           actualPrice: "1,999",
//           rating: 1,
//           name: "pant",
//           image: ["https://5.imimg.com/data5/AG/TB/MY-10139824/15-500x500.jpg"],
//         },
//         {
//           id:34,
//           offerPrice: 6999,
//           actualPrice: "12,999",
//           rating: 4,
//           name: "pant",
//           image: [
//             "https://redbridgejeans.de/media/image/product/65680/lg/m4249_red-bridge-mens-jeans-pants-slim-fit-denim-stonewashed-arena-m4249_16~4.jpg",
//           ],
//         },
//         {
//           id:35,
//           offerPrice: 5999,
//           actualPrice: "9,999",
//           rating: 3,
//           name: "pant",
//           image: [
//             "http://udaipurbazar.com/images/thumbs/0000988_denim-knot-pant-high-waist-pants-online-for-girls_510.jpeg",
//           ],
//         },
//         { id:36,
//           offerPrice: 599,
//           actualPrice: "999",
//           rating: 3,
//           name: "shirt",
//           image: [
//             "https://5.imimg.com/data5/UC/TY/MY-9601095/100-25-cotton-fancy-casual-shirt-for-men-500x500.jpg",
//           ],
//         },
//         {
//           id:37,
//           offerPrice: 7999,
//           actualPrice: "9,989",
//           rating: 4,
//           name: "shirt",
//           image: [
//             "https://cdn.andamen.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/1/01_29_20.jpg",
//           ],
//         },
//         {
//           id:38,
//           offerPrice: 6999,
//           actualPrice: "10,999",
//           rating: 4,
//           name: "shirt",
//           image: ["https://cdn.andamen.com/media/catalog/product/0/1/01_9_43.jpg"],
//         },
//         {
//           id:39,
//           offerPrice: 6999,
//           actualPrice: "10,799",
//           rating: 3,
//           name: "shirt",
//           image: [
//             "https://cdn.shopclues.com/images1/thumbnails/98477/320/320/144857292-98477886-1580365831.jpg",
//           ],
//         },
//         {
//           id:40,
//           offerPrice: 8999,
//           actualPrice: "9,899",
//           rating: 2,
//           name: "shirt",
//           image: [
//             "https://cdn.shopclues.com/images1/thumbnails/98477/320/320/144857292-98477886-1580365831.jpg",
//           ],
//         },
//         {
//           id:41,
//           offerPrice: 5989,
//           actualPrice: "6,999",
//           rating: 1,
//           name: "shirt",
//           image: [
//             "https://m.media-amazon.com/images/I/31EXeuRw1sL._AC_UL480_FMwebp_QL65_.jpg",
//           ],
//         },
//         {
//           id:42,
//           offerPrice: 7599,
//           actualPrice: "8,399",
//           rating: 4,
//           name: "shirt",
//           image: ["https://images-na.ssl-images-amazon.com/images/I/41c9sqbff8L.jpg"],
//         },

//         {
//           id:43,
//           offerPrice: 9,
//           actualPrice: "999",
//           rating: 1,
//           name: "sandal",
//           image: [
//             "https://contents.mediadecathlon.com/p1555674/637877ca0b0ff380e6113ddb73d40a0b/p1555674.jpg?f=650x650&format=auto",
//           ],
//         },
//         {
//           id:44,
//           offerPrice: 7895,
//           actualPrice: "9,869",
//           rating: 5,
//           name: "sandal",
//           image: [
//             "https://images-na.ssl-images-amazon.com/images/I/71rSsxZ4-rL._UL1500_.jpg",
//           ],
//         },
//         {
//           id:45,
//           offerPrice: 978,
//           actualPrice: "1,699",
//           rating: 4,
//           name: "sandal",
//           image: [
//             "https://images-na.ssl-images-amazon.com/images/I/61nSvArLSWL._UL1280_.jpg",
//           ],
//         },
//         {
//           id:46,
//           offerPrice: 8985,
//           actualPrice: "9,699",
//           rating: 5,
//           name: "sandal",
//           image: [
//             "https://images-na.ssl-images-amazon.com/images/I/71axA8Ha2EL._UL1500_.jpg",
//           ],
//         },
//         {
//           id:47,
//           offerPrice: 999,
//           actualPrice: "11,239",
//           rating: 4,
//           name: "sandal",
//           image: ["https://images-na.ssl-images-amazon.com/images/I/41F6eliN3CL.jpg"],
//         },
//         {
//           id:48,
//           offerPrice: 653,
//           actualPrice: "9,399",
//           rating: 3,
//           name: "sandal",
//           image: [
//             "https://images-na.ssl-images-amazon.com/images/I/61XhwITIfmL._UL1500_.jpg",
//           ],
//         },
//         {
//           id:49,
//           offerPrice: 896,
//           actualPrice: "9,199",
//           rating: 1,
//           name: "sandal",
//           image: ["https://images-na.ssl-images-amazon.com/images/I/41PKHNlxj7L.jpg"],
//         },
//         {
//           id:50,
//           offerPrice: 8999,
//           actualPrice: "10,999",
//           rating: 4,
//           name: "sandal",
//           image: [
//             "https://www.samedelman.com/blob/product-images/99900/ec/02/32738/ec0232738_pair_large.jpg",
//           ],
//         },
//         {
//           id:51,
//           offerPrice: 940,
//           actualPrice: "959",
//           rating: 2,
//           name: "sandal",
//           image: [
//             "https://i8.amplience.net/i/office/2840700000_md1.jpg?$newhighres$",
//           ],
//         },
//       ]

const initialState = {
  products: [],
};



export const productsReducer = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      action.payload.map((n) => state.products.push(n));
    },
  },
});

export const { addProduct } = productsReducer.actions;

export default productsReducer.reducer;
