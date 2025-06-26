
import React from 'react';

function MegaMenu() {
  return (
    <div className="absolute top-9 left-[-500px] w-[1200px] h-[400px] bg-white shadow-xl z-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[#193254] mb-4">DRESS SHIRTS</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Formal Shirts</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Business Casual</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">French Cuff</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Tuxedo Shirts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#193254] mb-4">CASUAL SHIRTS</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Oxford Shirts</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Linen Shirts</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Denim Shirts</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Flannel Shirts</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#193254] mb-4">BY PATTERN</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Solid Colors</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Striped</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Checkered</li>
              <li className="hover:text-[#193254] cursor-pointer transition-colors duration-300">Printed</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#193254] mb-4">FEATURED</h3>
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=1"
                  alt="Featured Shirt"
                  className="w-full h-24 object-cover rounded"
                />
                <p className="text-sm mt-2 font-medium">New Collection</p>
                <p className="text-xs text-gray-500">Starting from $89</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;


// import React from 'react';

// const MegaMenu = () => {
//   const collarsData = [
//     "All shirts",
//     "Reverse collar shirt",
//     "Italian collar shirt",
//     "Round neck shirt",
//     "Mao collar shirt",
//     "Straight collar shirt",
//     "Officer collar shirt",
//     "Neapolitan collar shirt",
//     "English collar shirt",
//     "American collar shirt",
//     "French collar shirt",
//     "Pin collar shirt",
//     "Broken collar shirt"
//   ];

//   const stylesData = [
//     "Shirt big collar",
//     "Casual shirt",
//     "Exceptional shirts",
//     "Business shirt",
//     "Wedding shirt",
//     "Tuxedo shirt"
//   ];

//   const fabricsData = [
//     "Poplin shirt",
//     "Shirt crease",
//     "Oxford shirt",
//     "Linen shirt",
//     "Cotton gauze shirt",
//     "Striped shirt",
//     "Twill shirt",
//     "Breathable shirt",
//     "Flannel shirt"
//   ];

//   const coloursData = [
//     "White shirt",
//     "Blue shirt",
//     "Green shirt",
//     "Pink shirt",
//     "Unbleached shirt"
//   ];

//   const cuffsData = [
//     "Simple wrist shirt",
//     "Musketeer shirt"
//   ];

//   // Assuming the navbar height is 60px (adjust this based on your actual navbar height)
//   const navbarHeight = 80;

//   return (
//     <div
//       className="fixed left-20 w-[1200px] h-[600px] bg-white border shadow-xl z-50 animate-fade-in"
//       style={{ top: `${navbarHeight}px` }}
//     >
//       <div className="container mx-auto px-4 py-8 h-full overflow-y-auto">
//         <div className="grid grid-cols-12 gap-8">
//           {/* Categories Section */}
//           <div className="col-span-6">
//             <div className="grid grid-cols-2 gap-8">
//               {/* Collars */}
//               <div>
//                 <h3 className="font-semibold text-foreground mb-4 text-lg text-[#193254]">Collars</h3>
//                 <ul className="space-y-2">
//                   {collarsData.map((item, index) => (
//                     <li key={index} className="text-muted-foreground text-[#193254] cursor-pointer transition-colors duration-200 text-sm">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Styles */}
//               <div>
//                 <h3 className="font-semibold text-foreground mb-4 text-lg">Styles</h3>
//                 <ul className="space-y-2">
//                   {stylesData.map((item, index) => (
//                     <li key={index} className="text-muted-foreground hover:text-red-600 cursor-pointer transition-colors duration-200 text-sm">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* More Categories */}
//           <div className="col-span-3">
//             <div className="space-y-6">
//               {/* Fabrics */}
//               <div>
//                 <h3 className="font-semibold text-foreground mb-4 text-lg">Fabrics</h3>
//                 <ul className="space-y-2">
//                   {fabricsData.map((item, index) => (
//                     <li key={index} className="text-muted-foreground hover:text-red-600 cursor-pointer transition-colors duration-200 text-sm">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Colours */}
//               <div>
//                 <h3 className="font-semibold text-foreground mb-4 text-lg">Colours</h3>
//                 <ul className="space-y-2">
//                   {coloursData.map((item, index) => (
//                     <li key={index} className="text-muted-foreground hover:text-red-600 cursor-pointer transition-colors duration-200 text-sm">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Cuffs */}
//               <div>
//                 <h3 className="font-semibold text-foreground mb-4 text-lg">Cuffs</h3>
//                 <ul className="space-y-2">
//                   {cuffsData.map((item, index) => (
//                     <li key={index} className="text-muted-foreground hover:text-red-600 cursor-pointer transition-colors duration-200 text-sm">
//                       {item}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           {/* Featured Images */}
//           <div className="col-span-3">
//             <div className="space-y-4">
//               {/* First Featured Item */}
//               <div className="relative group cursor-pointer">
//                 <div className="bg-muted rounded-lg overflow-hidden aspect-[4/3]">
//                   <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="text-sm font-medium mb-2">Featured Collection</div>
//                       <div className="text-xs opacity-75">Premium Shirts</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
//                   <button className="bg-background text-foreground px-6 py-2 rounded-md font-medium hover:bg-accent transition-colors">
//                     DÉCOUVRIR
//                   </button>
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
//                   LES GRANDS COLS
//                 </div>
//               </div>

//               {/* Second Featured Item */}
//               <div className="relative group cursor-pointer">
//                 <div className="bg-muted rounded-lg overflow-hidden aspect-[4/3]">
//                   <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
//                     <div className="text-center text-slate-800">
//                       <div className="text-sm font-medium mb-2">New Collection</div>
//                       <div className="text-xs opacity-75">Casual Wear</div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
//                   <button className="bg-background text-foreground px-6 py-2 rounded-md font-medium hover:bg-accent transition-colors">
//                     DÉCOUVRIR
//                   </button>
//                 </div>
//                 <div className="absolute bottom-4 left-4 text-white font-bold text-lg">
//                   SURCHEMISES
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;